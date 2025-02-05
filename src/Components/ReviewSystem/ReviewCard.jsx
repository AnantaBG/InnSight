import ReactStars from 'react-rating-stars-component';
import moment from 'moment'; 
import PropTypes from 'prop-types';
const ReviewCard = ({ review }) => {
    
    return (
        <div className="flex flex-col w-full justify-start">
         
        <p className='text-sm opacity-60'><span className='text-sm'>{review.username}</span> - {moment(review.timestamp).format('YYYY-MM-DD HH:mm')}</p>
        <p className='text-sm opacity-80'>Review for {review.roomName}</p>
        <ReactStars 
          count={5} 
          value={review.rating} 
          edit={false} 
          size={18} 
          activeColor="#ffd700" 
        />
        <p className='text-sm opacity-100'>{review.comment}</p>
      </div>
    );
};
ReviewCard.propTypes = {
    review: PropTypes.shape({
      username: PropTypes.string.isRequired,
      roomName: PropTypes.string.isRequired,
      rating: PropTypes.number.isRequired,
      comment: PropTypes.string.isRequired,
      timestamp: PropTypes.string.isRequired, 
    }).isRequired,
  };

export default ReviewCard;