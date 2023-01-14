import { useState, useReducer } from "react";


const BookinForm = ({updateTimes,initialTimes,submitForm}) => {

  const [state, dispatch] = useReducer(updateTimes, initialTimes());

  const [data, setData] = useState({
    resDate:'',
    resTime:'',
    guests:1,
    occasion:'Birthday',
    seating:'standard',
  });

  const handleChange= (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setData(values => ({...values,[name]:value}))
  }
  const handleRadioChange= (e) => {
    setData({...data,seating:e.target.value})
  }
  

  const isValidDate =(date) => {
    const d1=new Date();
    const d2 = new Date(date);
    return (d2< d1 ? false : true);

  }
  const handleDateChange = (e) => {
    const date_value = e.target.value;
    if (!isValidDate(date_value)){ alert("please enter a valid date!") }
    else {
      setData(values => ({...values,resDate:date_value}));
      dispatch({type: date_value})
    }
    
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(data);
    submitForm(data) ;
  }
  const isValid = (name) =>{
    if (name !== "")
    return true
  }
  return(
    <form onSubmit={handleSubmit}>
      <label htmlFor="res-date">Choose date
        <input 
          id="res-date"
          name="resDate"
          type="date" 
          value={data.resDate}
          onChange={handleDateChange}
        />
        <span className="error">{!isValid(data.resDate) && "Please set the date"}</span>
      </label>
      <label htmlFor="res-time">Choose time
        <select value={data.resTime} id="res-time" name="resTime" onChange={handleChange}>
           {
            state.avilableTimes.map(time=> {
              return <option value={time} key={time}>{time}</option>
            })
          }
        </select>
        <span className="error">{!isValid(data.resTime) && "Please set the time"}</span>
     </label>
      <label htmlFor="guests">Number of guests
        <input
          id="guests" 
          name="guests"
          type="number"
          min={1}
          max={10}
          value={data.guests}
          onChange={handleChange}
        />
      </label>
      <label htmlFor="occasion">Occasion
        <select value={data.occasion} id="occasion" name="occasion" onChange={handleChange}>
            <option value="Birthday">Birthday</option>
            <option value="Anniversary">Anniversary</option>
        </select>
      </label>
      <h3>Seating options</h3>
        <label htmlFor="standard">
        <span>Standard</span>
          <input
            type="radio"
            value="standard"
            checked={data.seating=== "standard"}
            onChange={handleRadioChange}
          />
        </label>
        <label htmlFor="outdoor">
          <span>Outdoors</span>
          <input
            type="radio"
            value="outdoor"
            checked={data.seating=== "outdoor"}
            onChange={handleRadioChange}
          />
        </label>
      <input type="submit" value="Make Your reservation" disabled{...data.resDate==='' || data.resTime ===''} />
    </form>
  )
}

export default BookinForm;