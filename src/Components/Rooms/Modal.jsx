import { useContext, useState } from 'react';
import ReactStars from 'react-rating-stars-component'; 
import { AuthC } from '../../Provider/AuthProviderx';
// eslint-disable-next-line react/prop-types
const ReviewForm = ({ onSubmit, onClose }) => {
    const [rating, setRating] = useState(0);
  const [comment, setComment] = useState('');
      const { user} = useContext(AuthC);
      const handleSubmit = (event) => {
        event.preventDefault();
        const newReview = {
            username: user.displayName,
            rating,
            comment,
            timestamp: new Date().toISOString(), 
          };
          onSubmit(newReview);
          
  };

    return (
        <div className="p-4"> 
        <div className="bg-white p-6 rounded-lg mb-4"> 
          <h2 className="text-lg font-semibold mb-4">Leave a Review</h2>
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="rating">Rating:</label>
              <ReactStars
                count={5}
                onChange={setRating}
                size={24}
                activeColor="#ffd700"
              />
            </div>
            <div>
              <label htmlFor="comment">Comment:</label>
              <textarea 
                id="comment" 
                value={comment} 
                onChange={(e) => setComment(e.target.value)} 
              />
            </div>
            <button type="submit">Submit</button>
            <button type="button" onClick={onClose}>Cancel</button>
          </form>
        </div>
      </div>
    );
};

export default ReviewForm;