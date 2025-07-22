import ResturantCard from "./ResturantCard";
import restaurantList from "../utils/mockData";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

const Body = () => {
    const [restaurantData, setFilteredList] = useState([]);
    const [filteredResturant, setFilteredResturant] = useState([]);
    const [searchText, setSearchText] = useState("");

    const filterBest = () => {
      
    };

    const searchResturant = () =>{
        var filteredResturant = restaurantData.filter((resturant) => {
            return resturant.info.name.toLowerCase().includes(searchText.toLowerCase());
        });
        setFilteredResturant(filteredResturant);
    }

    useEffect(()=>{
        fetchData();
    },[]);

    const fetchData = async () => {
        let link = "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.41359211947815&lng=77.09232757497782&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING#";
        const data = await fetch(link);
        const json = await data.json();
        const resData = json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
        setFilteredList(resData);
        setFilteredResturant(resData);
    };

    return restaurantData?.length == 0 ? <Shimmer/>: (
        <div className='body'>
            <div className ="search">
                <input type ="text" className="search-box" value = {searchText} onChange={(e)=>{
                    setSearchText(e.target.value);
                }}></input>
                <button className="filter-btn" onClick={()=>{searchResturant()}}>Search</button>
                 <button className="filter-btn" onClick={()=>{filterBest()}}>Top Rated Resturant</button>
            </div>
            <div className='res-contanier'>
            { 
            filteredResturant?.map((restaurantLists) => {
              if (!restaurantLists.info){
                return null;
              } 
              const restaurant = restaurantLists.info;
              const resID = restaurant.id;
              return (
               <ResturantCard key={resID} resturantData={restaurant} />
              )
             
            })
            }
            </div>
        </div>
    )
}

export default Body;