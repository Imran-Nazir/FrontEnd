import ConditionalRendering from "./components/ConditionalRendering";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Exercise from './components/exercise';

const App = () =>  {
  const newLocal = <h1>Hi Developers</h1>
  return (
    <div>
      {newLocal}
      <Header/>
      <Hero/> 
      <ContactForm/>
      <Footer/>
      <Exercise/>
      <ConditionalRendering/>

    </div>
    
  );
};

export default App;