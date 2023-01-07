import logo from '../imgs/logo-footer-dark.png'
function Footer() {
  return(
    <footer>
      <section className="footer-nav">
        <img src={logo} alt="resturant logo" width="90px" height="150px"/>
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
          <li><a href="https://www.facebook.com">Facebook</a></li>
          <li><a href="https://twitter.com">Twitter</a></li>
          <li><a href="https://www.instagram.com">Instagram</a></li>          
        </ul>
      </section>
    </footer>
  );
}

export default Footer;