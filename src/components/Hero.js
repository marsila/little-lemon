import pop from '../imgs/img-pop.jpg';

const Hero = () =>{
  return (
    <section className="hero-section">
        <article className="about">
          <h1>Little lemon</h1>
          <h2>Chicago</h2>
          <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
          <button>Reserve a table</button>
        </article>
        
          <img src={pop}  alt="resturant meal" width="250px" height="300px"/>
        
    </section>
  )
}

export default Hero;