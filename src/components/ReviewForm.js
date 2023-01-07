
import { useState } from 'react';

const ReviewForm = () => {
  const [comment, setComment] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Thank you for adding your comment :)`)
  }
  return(
    <form onSubmit={handleSubmit}>
      <h3> Please Add your comment:</h3>
        <textarea
          value={comment}
          onChange={(e)=> setComment(e.target.value)}
        />
      <button type="submit">Submit</button>
    </form>
  )
}

export default ReviewForm;