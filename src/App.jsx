import Navbar from './fragment/navbar';
import Line from './component/line';
import Footer from './fragment/footer';
import Project from './scene/Project';
import About from './scene/about';
import Hero from './scene/hero';
import Skills from './scene/skills';
import { TbMessage } from 'react-icons/tb';
import Contact from './component/contact';
import ContactForm from './fragment/ContactForm';

function App() {
  return (
    <div className="App bg-[#0D2644]">
      <div className="w-full ">
        <Navbar />
      </div>
      <div className="w-4/6 mx-auto h-full">
        <Hero />
      </div>
      <div className="w-4/6 mx-auto">
        <Line />
      </div>
      <div className="w-4/6 mx-auto h-full ">
        <About />
      </div>
      <div className="w-4/6 mx-auto">
        <Line />
      </div>
      <div className="w-4/6 mx-auto h-full ">
        <Skills />
      </div>
      <div className="w-4/6 mx-auto">
        <Line />
      </div>
      <div className="md:w-4/6 mx-auto h-full ">
        <Project />
      </div>
      <div className="w-4/6 mx-auto">
        <Line />
      </div>
      <div className="md:w-4/6 mx-auto">
        <ContactForm />
      </div>
      <div className="bg-black mx-auto   ">
        <Footer />
      </div>
      <a href="https://www.linkedin.com/in/firos-malik-abdillah/">
        <TbMessage className=" rounded-full text-7xl text-white p-3 bg-[#bc6d38] animate-bounce fixed bottom-5 right-5" />
      </a>
    </div>
  );
}

export default App;
