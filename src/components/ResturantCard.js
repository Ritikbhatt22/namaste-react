import {CDN_URL} from "../utils/constants"; 
import { Link } from "react-router-dom";
const ResturantCard = (props) => {
  const {resturantData } = props;
  const {
    id,
    cloudinaryImageId,
    name,
    cuisines,
    avgRating,
    deliveryTime,

  } = resturantData;
  return (
     <Link key={id} to={`/resturant/${id}`}>
    <div className='res-card' style={{ backgroundColor: '#f0f0f0' }}>
      <img
        className='res-logo'
        alt="res-logo"
        src={CDN_URL+cloudinaryImageId}
      />
      <div className="res-card-elem">
        <h3>{name}</h3>
        <h4>{cuisines.join(', ')}</h4>
        <h4>{avgRating}</h4>
        <h4>{deliveryTime}</h4>
      </div>
    </div>
    </Link>
  );
  
};

export default ResturantCard;