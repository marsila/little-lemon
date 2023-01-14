//import { Routes, Route} from 'react-router-dom';
import BookinForm from "./BookingForm";
import resturant from '../imgs/resturant.png';
import chef from '../imgs/chef.png';


const BookingPage = ({updateTimes,initialTimes,submitForm}) => {

  return(
    <main className="booking-page">
      <header>
        <h1>Little lemon</h1>
        <h2>Chicago</h2>
      </header>
      <section className="page-hero">
        <h3>Find a table for any occasion</h3>
        <article className="hero-imgs">
        <img src={resturant}  alt="resturant hall" width="180px" height="200px"/>
        <img src={chef}  alt="chef" width="180px" height="200px"/>
        </article>
      </section>
      <BookinForm
        updateTimes= {updateTimes}
        initialTimes={initialTimes}
        submitForm ={submitForm}
      />
    </main>
  )
}

export default BookingPage