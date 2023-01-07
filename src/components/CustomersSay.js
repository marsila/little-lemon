import ReviewForm from './ReviewForm'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar} from "@fortawesome/free-solid-svg-icons"; 
import review from '../imgs/review.png';
import { useState } from 'react';

const CustomerSay = () =>{
  const [isCheck, setIsCheck] = useState(false);
  const handleClick= (e)=>{
    console.log(isCheck); 
    setIsCheck(current => !current);
  }
  return(
    <section className="user-section">
      <article className="user-profile">
        <img src={review} alt="user review" width="150px" height="150px" />
        <button>User Profile</button>
      </article>
      <div className="user-review">
        <h3>Rate our services</h3>
        <ul className= "stars">
          <li><FontAwesomeIcon icon={faStar} className={isCheck ? 'checked': ''} onClick={handleClick}/></li>
          <li><FontAwesomeIcon icon={faStar} className={isCheck ? 'checked':''} onClick={handleClick}/></li>
          <li><FontAwesomeIcon icon={faStar} className={isCheck ? 'checked': ''}/></li>
          <li><FontAwesomeIcon icon={faStar} className={isCheck ? 'checked': ''} /></li>
          <li><FontAwesomeIcon icon={faStar} className={isCheck ? 'checked': ''}/></li>
        </ul>
      </div>
      <ReviewForm/>  
    </section>
  )
}
export default CustomerSay