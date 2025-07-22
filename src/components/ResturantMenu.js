import { useEffect,useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_API } from "../utils/constants";


const ResturantMenu = () => {
    const [resturant, setResturantMenu] = useState(null);
    useEffect(()=>{
        fetchMenu();
    },[]);

    const {resID} = useParams();

    const fetchMenu = async () => {
        let url = MENU_API+resID+"&catalog_qa=undefined&submitAction=ENTER";
        let data = await fetch(url);
        let res = await data.json();
        setResturantMenu(res.data); 
    } 

    if (resturant == null) {
        return <Shimmer/>;
    }

    const {name, cuisines, costForTwoMessage} = resturant?.cards[2]?.card?.card?.info || {};
    console.log(resturant)
    const { itemCards } = resturant?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[1]?.card?.card || {};

    //  if (!itemCards) {
    //     return <Shimmer/>;
    // }
    console.log(itemCards);
    return (
        <div className="menu">
            <h1 className="menu__title">{name}</h1>
            <h2 className="menu__cuisines">{cuisines.join(", ")}</h2>
            <h2 className="menu__cost">{costForTwoMessage}</h2>
            <h2 className="menu__heading">Menu</h2>
            <ul className="menu__list">
                {
                  itemCards ?  itemCards.map((item) => {
                        return (
                            <li className="menu__item" key={item.card.info.id}>
                                <span className="menu__item-name">{item.card.info.name}</span>  
                                <span className="menu__item-price">
                                    ₹{item.card.info.price / 100 || item.card.info.defaultPrice / 100}
                                </span>
                            </li>
                        );
                    }) : <Shimmer/>
                }
            </ul>
        </div>
    )

}

export default ResturantMenu;