import {CDN_URL} from "../utils/constants"; 
import { Link } from "react-router-dom";
import { useContext } from "react";
import UserContext from "../utils/UserContextT";
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
  const {loggedInUser} = useContext(UserContext);
  return (
    <Link key={id} to={`/resturant/${id}`}>
      <div className="bg-white shadow-xl hover:shadow-2xl transition-shadow duration-300 m-4 p-4 w-[250px] rounded-2xl border border-gray-200 hover:scale-105 transform cursor-pointer">
        <img
          className="rounded-2xl w-full h-40 object-cover mb-4 border-2 border-indigo-100"
          alt="res-logo"
          src={CDN_URL + cloudinaryImageId}
        />
        <div className="space-y-1">
          <h3 className="text-lg font-bold text-indigo-700 truncate">{name}</h3>
          <h4 className="text-sm text-gray-500 truncate">{cuisines.join(', ')}</h4>
          <div className="flex items-center gap-2 mt-2">
            <span className={`px-2 py-1 rounded-full text-xs font-semibold ${avgRating >= 4 ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'}`}>{avgRating} ⭐</span>
            <span className="px-2 py-1 rounded-full bg-pink-100 text-pink-700 text-xs font-semibold">{deliveryTime} min</span>
            <span className="px-2 py-1 rounded-full bg-pink-100 text-pink-700 text-xs font-semibold">{loggedInUser}</span>
          </div>
        </div>
      </div>
    </Link>
  );
  
};

// const withPromotedLabel = (ResturantCard) => {
//   return (props) => {
//     const { resturantData } = props;
//     const isPromoted = resturantData?.promoted;
//     return (
//       <div className={`relative ${isPromoted ? 'border-2 border-yellow-400' : ''}`}>
//         {isPromoted && (
//           <span className="absolute top-2 right-2 bg-yellow-300 text-yellow-800 px-2 py-1 rounded-full text-xs font-semibold">
//             Promoted
//           </span>
//         )}
//         <ResturantCard {...props} />
//       </div>
//     );
//   };
// };
export const withPromotedLabel = (ResturantCard) => {
  return (props) => {
    return (
      <div> 
        <label className=" bg-yellow-300 text-yellow-800 px-2 py-1 rounded-full text-xs font-semibold">Promoted</label>
       <ResturantCard {...props} />
      </div>
    );
  };
};

// const PromotedResturantCard = withPromotedLabel(ResturantCard);
export default ResturantCard;