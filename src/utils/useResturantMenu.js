import { useEffect, useState } from "react";
import { MENU_API } from "./constants";
import Shimmer from "../components/Shimmer";
const useResturantMenu = (resID) => {
    // Fetch data
    const [resturant, setResturantMenu] = useState(null);

    useEffect(() =>{
        fetchResturantMenu(resID);
    },[])

    const fetchResturantMenu = async () =>{
        const data = await fetch(MENU_API + resID+"&catalog_qa=undefined&submitAction=ENTER");
         let resData = await data.json();
        setResturantMenu(resData.data);
    }

    
    // if (resturant == null) {
    //     return <Shimmer/>;
    // }
    return resturant;
}

export default useResturantMenu;