import {Link} from 'react-router-dom';
import logo from '../imgs/logo1.png';
import'../styles.scss';
function Nav() {
  return(
    <nav>
      <img src={logo}  alt="resturant logo" width="300px" height="100px"/>
      <ul>
        <li><Link to="/" role="button">Home</Link></li>
        <li><Link to="/about-menu" role="button">About Menu</Link></li>
        <li><Link to="/booking-table" role="button">Reservation</Link></li>
        <li><Link to="/order-online" role="button">Order online</Link></li>
        <li><Link to="/login" role="button">Login</Link></li>
      </ul>
    </nav>
  );
}

export default Nav;