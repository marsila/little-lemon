import chef1 from '../imgs/chef1.png'
import chef2 from '../imgs/chef2.png'

const Chicago =()=>{
  return(
    <section className='chicago'>
      <article className="about">
          <h1>Little lemon</h1>
          <h2>Chicago</h2>
          <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
      </article>
      <article className='chef-imgs'>
        <img src={chef1}  alt="resturant chef" width="150px" height="200px" className="chef1"/>
        <img src={chef2}  alt="resturant chef" width="150px" height="300px"className="chef2"/></article>
    </section>
  )
}

export default Chicago;