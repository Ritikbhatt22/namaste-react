import ResturantCard,{withPromotedLabel} from "./ResturantCard";
import restaurantList from "../utils/mockData";
import { useState, useEffect, useContext } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContextT from '../utils/UserContextT';
console.log('UserContext:', UserContextT);
const Body = () => {
    const [restaurantData, setFilteredList] = useState([]);
    const [filteredResturant, setFilteredResturant] = useState([]);
    const [searchText, setSearchText] = useState("");

    const ResturantCardPromoted = withPromotedLabel(ResturantCard);
    const filterBest = () => {
        const topRated = restaurantData.filter(
            (resturant) => resturant.info.avgRating > 4.2
        );
        setFilteredResturant(topRated);
    };

    const searchResturant = () => {
        const filtered = restaurantData.filter((resturant) =>
            resturant.info.name.toLowerCase().includes(searchText.toLowerCase())
        );
        setFilteredResturant(filtered);
    };

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        let link = "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.41359211947815&lng=77.09232757497782&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING#";
        const data = await fetch(link);
        const json = await data.json();
        const resData =
            json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
        setFilteredList(resData);
        setFilteredResturant(resData);
    };

    const onlineStatus = useOnlineStatus();

    if (onlineStatus === false)
        return (
            <h1 className="text-center text-2xl font-bold text-red-500 mt-10">
                Looks like you are offline! Please check your internet connection.
            </h1>
        );

    const {setUserInfo, loggedInUser} = useContext(UserContextT);
    return restaurantData?.length === 0 ? (
        <Shimmer />
    ) : (
        <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-blue-50">
            <div className="flex flex-col items-center py-8">
                <h1 className="text-4xl font-extrabold text-green-700 mb-6 drop-shadow">
                    Find Your Favourite Restaurant
                </h1>
                <div className="flex gap-4 w-full max-w-xl">
                    <input
                        type="text"
                        className="flex-1 px-4 py-2 border border-green-300 rounded-lg shadow focus:outline-none focus:ring-2 focus:ring-green-400 transition"
                        placeholder="Search restaurants..."
                        value={searchText}
                        onChange={(e) => setSearchText(e.target.value)}
                    />
                    <button
                        className="px-6 py-2 bg-green-500 text-white font-semibold rounded-lg shadow hover:bg-green-600 transition"
                        onClick={searchResturant}
                    >
                        Search
                    </button>
                    <button
                        className="px-6 py-2 bg-yellow-400 text-white font-semibold rounded-lg shadow hover:bg-yellow-500 transition"
                        onClick={filterBest}
                    >
                        Top Rated
                    </button>
                    <span>UserName : </span>
                    <input className="border border-black p-2" 
                    value = {loggedInUser}
                    onChange={(e)=> setUserInfo(e.target.value)}/>
                </div>
            </div>
            <div className="flex flex-wrap justify-center gap-8 px-8 pb-12">
                {filteredResturant?.map((restaurantLists) => {
                    if (!restaurantLists.info) {
                        return null;
                    }
                    const restaurant = restaurantLists.info;
                    const resID = restaurant.id;
                    return true
                        ? <ResturantCardPromoted key={resID} resturantData={restaurant} />
                        : <ResturantCard key={resID} resturantData={restaurant} />;
                })}
            </div>
        </div>
    );
};

export default Body;