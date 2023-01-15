export default{
    name:'downloadCV',
    title:'DownloadCv',
    type: 'document',
    fields:[
        {
            name:'description',
            title:'Description',
            type:'string'
        },
        {
            name:'file',
            title:'File',
            type: 'file',
            options: {
              hotspot: true,
            },
        },  
    ]
}