import './App.css';
import Home from "./Components/Home";
import About from "./Components/About";
// import Work from "./Components/Work";
import Testimonials from './Components/Testimonials';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import Filter from './Components/Filter';

function App() {
  return (
    <div className="App">
     <Home/>
     <Filter/>
     <About/>
     {/* <Work/> */}
     <Testimonials/>
     <Contact/>
     <Footer/>
    </div>
  );
}

export default App;
