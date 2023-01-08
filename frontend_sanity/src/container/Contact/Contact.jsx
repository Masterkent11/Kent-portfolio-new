import { Button, Stack, Typography } from '@mui/material';
import React, {useState} from 'react';
import { useRef } from 'react';
// import { mobile } from '../../constant';
import emailjs from '@emailjs/browser';
import { AppWrap, MotionWrap } from '../../wrapper';
import { motion } from 'framer-motion';

const Contact = () => {
    const [formData, setFormData] = useState({name: '', email: '', message: ''});
    const [isFormSubmitted, setIsFormSubmitted] = useState(false);
    const [loading, setLoading] = useState(false );
    const form = useRef();

const {name, email, message} = formData;
const handleChangeInput = e =>{
    const {name, value } = e.target;
    setFormData({...formData, [name]: value });
}

const handleSubmit = ()=>{
    setLoading(true);

    const contact = {
        _type: 'contact',
        name: name,
        email: email,
        message: message
    }
    emailjs.sendForm('service_1egdf0e', 'template_mbke69v', form.current, 'rua04rZXDxilrT4Wv')
       .then(res=>{
            setLoading(false);
            setIsFormSubmitted(true);
       })

}
    const sendEmail = (e) => {
      e.preventDefault();
    };
    return (
        <>
            <Stack >
                <Stack>
                    <Stack 
                        display={'flex'}
                        justifyContent={'center'}
                        alignItems={'center'}>
                            <Typography variant="h4" id="contact__header">{!isFormSubmitted? `Let's Connect each other!.` : ''}</Typography>
                    </Stack>
                </Stack>
                <motion.div
                    //  whileInView={{ x: [200, 50, 0], opacity: [0, 0, 1] }}
                    //  transition={{ duration: 1.5 }}
                     >
                                   {!isFormSubmitted ?
                <Stack
                    display={'flex'}
                    justifyContent={'center'}
                    margin={3}
                    >
                   <form ref={form} onSubmit={sendEmail} id='form'>
                    <Stack
                         display={'flex'}
                         gap={{lg: 2}}
                         justifyContent={{lg:'center', xs: 'center'}}
                         flexDirection={{sm:'column', lg:'row'}}
                        >
                        <Stack >
                            <label id='label'>Name</label>
                            <input type="text" name="user_name" id='input' placeholder='Type your name here..'/>
                            <label>Email</label>
                            <input type="email" name="user_email" id='input' placeholder='Type your email here..' />
                        </Stack>
                        <Stack
                            display={'flex'}
                            flexDirection={'column'}
                            justifyContent={{sm:'center',lg:'center'}}
                            width={{lg: '500px'}}
                            alignItems={{sm:'center', lg:'center'}}
                            >
                            <label>Message</label>
                            <textarea 
                                name="message" 
                                id='textarea'
                                placeholder='Write an email here...'
                                value={message}
                                onChange={handleChangeInput}

                            />
                            <Button 
                                type="submit" 
                                value="Send" 
                                id='btn_submit'
                                variant='contained'
                                onClick={handleSubmit}
                                >
                                   {loading  ?  'Sending': 'Send Message'}
                            </Button>
                        </Stack>
                    </Stack>
                    </form>                    
                </Stack>

                //Otherwise
                :   <Stack  
                textAlign={'center'}
                >
                    <motion.div
                        //  whileInView={{ x: [-200, -50, 0], opacity: [0, 0, 0.8] }}
                        //  transition={{ duration: 1.5 }}
                        >
                        <Typography variant="h4" id='contact__header'>Thank you for getting in touch!</Typography>
                    </motion.div>
                    
                </Stack>}
                </motion.div>    
            </Stack>   
        </>
    );
};

export default AppWrap(
    MotionWrap(Contact, 'app__contact'),
    'contact',
    'app__whitebg',
  );