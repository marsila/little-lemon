
const ConfirmBooking = () =>{
  const data = JSON.parse(sessionStorage.getItem("info"));
  console.log('data',data);
  return(
    <section className="confirm">
      <h3>Thank you for your reservation in Little Lemon</h3>
       <p>your reservation will be on {data.resDate} at {data.resTime} for {data.guests} people</p>
      <h3>We wish you a happy {data.occasion}</h3> 

    </section>
  )
}

export default ConfirmBooking;