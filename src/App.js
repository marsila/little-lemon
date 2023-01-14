import { Routes, Route} from 'react-router-dom';

import Homepage from './components/Homepage';
import Nav from './components/Nav';
import Footer from './components/Footer';
import'./styles.scss';
import BookingPage from './components/BookingPage';
import ConfirmBooking from './components/ConfirmBooking';
import {fetchAPI,submitAPI} from './components/api';
function App() {

  function updateTimes(state, action) {
    if (action.type){
      const date = new Date(action.type);
      const avlableTimes = fetchAPI(date);
        return {
          ...state,
          occasionDate :action.type,
          avilableTimes:avlableTimes
       }
    }
  }
  function initialTimes(){
    const date = new Date();
    const avlableTimes = fetchAPI(date);    
    return {occasionDate: date.toDateString(),
            avilableTimes:avlableTimes,
          }
  };

  function submitForm(formData) {
    const success = submitAPI(formData);
    if (success) {
      sessionStorage.setItem("info", JSON.stringify(formData));
//window.location("localhost/jstest/#test?info");
      window.location.href = '/confirmbooking/#data?info';
    }
  }

  
  return (
    <>
      <Nav/>
      <Routes>
        <Route path="/" element ={<Homepage/>}/>
        <Route path="/booking-table" element={<BookingPage updateTimes= {updateTimes} initialTimes={initialTimes}  submitForm ={submitForm} />} />
        <Route path="/confirmbooking" element={ <ConfirmBooking /> } />
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
