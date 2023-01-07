import logo from '../imgs/logo1.png';
import'../styles.scss';
function Nav() {
  return(
    <nav>
      <img src={logo}  alt="resturant logo" width="300px" height="100px"/>
      <ul>
        <li><a href="/home" role="button">Home</a></li>
        <li><a href="/about-menu" role="button">About Menu</a></li>
        <li><a href="/reservation" role="button">Reservation</a></li>
        <li><a href="/order-online" role="button">Order online</a></li>
        <li><a href="/login" role="button">Login</a></li>
      </ul>
    </nav>
  );
}

export default Nav;