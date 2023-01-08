

import { About, Contact, Header, Skills, Work, Testimonials, AboutMe } from "./container";
import { Navbar } from "./components";

function App() {
  return (
    <div className="app">
      <Navbar/>
      <Header/>
      <About/>
      <AboutMe/>
      <Skills/>
      <Work/>
      <Testimonials/>
      <Contact/>
    </div>
  );
}

export default App;
