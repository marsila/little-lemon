import chefs from '../imgs/chefs.png'


const Chicago =()=>{
  return(
    <section className='chicago'>
      <article className="about">
          <h1>Little lemon</h1>
          <h2>Chicago</h2>
          <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
      </article>
      <img src={chefs}  alt="resturant chefs" width="200px" height="250px" className="chefs-img"/>
    </section>
  )
}

export default Chicago;