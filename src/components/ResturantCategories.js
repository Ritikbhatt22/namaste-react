import { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategories = ({ restaurantLists, expandedIndexMain, setShowIndex }) => {
    const categories = restaurantLists?.itemCards || [];
    const handleClick = () => {
        setShowIndex();
    }
    return (
        <div className="mx-auto text-center text-xl font-semibold border rounded my-2 w-full max-w-3xl shadow-1xl">
            <button
                className="w-full px-4 py-2 bg-gray-100 hover:bg-gray-200 font-medium text-left shadow-1xl"
                onClick={handleClick}
            >
                {restaurantLists?.title} ({categories.length})
            </button>
            {expandedIndexMain &&
                categories.map((category, index) => {
                    return (<ItemList key ={index} categoryList = {category}/>);
                })}
        </div>
    );
};

export default RestaurantCategories;
