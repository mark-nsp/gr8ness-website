import logo from './logo.svg';
import './App.css';
import Landing from './Landing';
import Testimonials from './Testimonials';
import AboutMe from './AboutMe';
import { BrowserRouter, Route, Routes} from 'react-router-dom';

function App() {
  return (
    <>
      <Landing />
      <AboutMe />
      <Testimonials />
   </>
  );
}

export default App;
