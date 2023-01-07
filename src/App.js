//import './App.css';
import Hero from './components/Hero';
import Nav from './components/Nav';
import Specials from './components/Specials';
import Footer from './components/Footer';
import'./styles.scss';
import CustomerSay from './components/CustomersSay';
import Chicago from './components/Chicago';

function App() {
  return (
    <>
      <Nav/>
      <Hero/>
      <Specials/>
      <CustomerSay/>
      <Chicago/>
      <Footer/>
    </>
  );
}

export default App;
