import PropTypes from "prop-types";
import { useContext, useState } from "react";
import { AuthC } from "../../Provider/AuthProviderx";

const ReviewForm = ({roomName, roomId, onSubmit, onClose }) => {
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState('');
        const { user} = useContext(AuthC);
   (roomName)

  const handleSubmit = (event) => {
    event.preventDefault();
    const newReview = {
        username: user.displayName,
        rating,
        comment,
        id: roomId ,
        timestamp: new Date().toDateString(),
        roomName
      };
    onSubmit(newReview ); 
    setRating(0); 
    setComment(''); 
  };

  return (
    <div className="p-4">
      <h2 className="mb-4 text-2xl">Leave a Review</h2>
      <div className=" mb-4">
        {/* Add your rating component here (e.g., stars) */}
        <label htmlFor="rating">Rating:</label>
        <select 
          id="rating" 
          value={rating} 
          onChange={(e) => setRating(Number(e.target.value))}
          required 
          className="dark:bg-[#496b84]"
          
        >
          <option value="1">0</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
      </div>
      <div className="mb-4">
        <label htmlFor="comment">Your thoughts:</label>
        <textarea 
          id="comment" 
          value={comment} 
          onChange={(e) => setComment(e.target.value)}
          required 
          rows={4} 
          className="w-full border dark:bg-[#496b84] border-gray-300 rounded-md p-2" 
        />
      </div>
      <div className="flex justify-end">
        <button 
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" 
          onClick={handleSubmit}
        >
          Submit
        </button>
        <button 
          className="ml-4 bg-gray-300 hover:bg-gray-400 text-gray-700 font-bold py-2 px-4 rounded"
          onClick={onClose}
        >
          Cancel
        </button>
      </div>
    </div>
  );
};
ReviewForm.propTypes = {
    roomId: PropTypes.string.isRequired, // Assuming roomId is a string
    roomName: PropTypes.string.isRequired,
    onSubmit: PropTypes.func.isRequired, 
    onClose: PropTypes.func.isRequired,
  };

export default ReviewForm;