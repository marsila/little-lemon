import logo from '../imgs/logo.jpg'
function Footer() {
  return(
    <footer>
      <section>
        <img src={logo} alt="resturant logo" width="250px" height="80px"/>
        <ul>
          <li><a href="/home" role="button">Home</a></li>
          <li><a href="/about-menu" role="button">About Menu</a></li>
          <li><a href="/reservation" role="button">Reservation</a></li>
          <li><a href="/order-online" role="button">Order online</a></li>
          <li><a href="/login" role="button">Login</a></li>
        </ul>
      </section>
      <section>
        <h2>Contacts</h2>
        <ul>
          <li>Adress</li>
          <li>Phone number</li>
          <li>Email</li>          
        </ul>
      </section>
      <section>
        <h2>Social Media Links</h2>
        <ul>
          <li>Facebook</li>
          <li>Twitter</li>
          <li>Instagram</li>          
        </ul>
      </section>
    </footer>
  );
}

export default Footer;