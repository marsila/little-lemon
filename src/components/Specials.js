import salad from '../imgs/salad.jpg';
import brushettos from '../imgs/brushettos.jpg';
import grilledFish from '../imgs/grilled-fish.jpg';
function Specials(){
  return(
    <main>      
      <section className="highlights-block">
        <section className="specials-top">
          <h2>This Week Specials</h2>
          <button>Order online</button>
        </section>
        <section className="specials-cards">
        <article className="card">
          <img src={salad} alt="Greek salad" width="200px" height="200px"/>          
          <div className="card-header">
            <h3>Greek Salad</h3>
            <p className="price">$ 12.99</p>
          </div>
          <p className="card-body">The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.</p>
          
        </article>
        <article className="card">
          <img src={brushettos} alt="Greek salad" width="200px" height="200px"/>
          <div className="card-header">
            <h3>Brushetto</h3>
            <p className="price">$ 5.99</p>
          </div>
          <p className="card-body">Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.</p>
        </article>
        <article className="card">
          <img src={grilledFish} alt="Greek salad" width="200px" height="200px"/>
          <div className="card-header">
            <h3>Grilled Fish</h3>
            <p className="price">$ 14.99</p>
          </div>  
          <p className="card-body">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sed cursus.</p>
        </article>
        </section>        
      </section>
    </main>
  );
}

export default Specials;