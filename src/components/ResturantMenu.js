import Shimmer from "./Shimmer";
import { useState } from "react";
import { useParams } from "react-router-dom";
import useResturantMenu from "../utils/useResturantMenu"
import ResturantCategories from "./ResturantCategories";
const ResturantMenu = () => {
    const { resID } = useParams();
    const resturant = useResturantMenu(resID);
    const [showIndex, setShowIndex] = useState(null);
    const dummy = "dummy data";
    if (resturant == null) {
        return <Shimmer />;
    }

    const { name, cuisines, costForTwoMessage } = resturant?.cards[2]?.card?.card?.info || {};
    const { itemCards } = resturant?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[1]?.card?.card || {};
    let categories = resturant?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(e => e.card?.card?.['@type'] === 'type.googleapis.com/swiggy.presentation.food.v2.ItemCategory');

    return (
        <div className="text-center p-4">
            <h1 className="text-2xl font-bold">{name}</h1>
            <p>{cuisines.join(", ")}</p>
            {categories.map((category, index) => {
                let { card } = category?.card || {};
                return (
                    <ResturantCategories 
                    key={card.categoryId} 
                    restaurantLists={card} 
                    expandedIndexMain={index==showIndex ? true : (false)} 
                    setShowIndex={()=>index!=showIndex?setShowIndex(index):setShowIndex(null)}
                    dummy ={dummy}
                    />
                )
            })}
        </div>
    )

}

export default ResturantMenu;