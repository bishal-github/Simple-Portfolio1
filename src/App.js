import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Foooter from './components/Foooter';
import Contact from './components/Contact';
import Services from './components/Services';


import './styles/App.scss'
import './styles/header.scss'
import './styles/home.scss'
import './styles/foooter.scss'
import './styles/contact.scss'


function App() {
  return (
   <Router>
    <Header />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/contact' element={<Contact />} />
      <Route path='/services' element={<Services />} />
    </Routes>
    <Foooter />
   </Router>
  );
}

export default App;
