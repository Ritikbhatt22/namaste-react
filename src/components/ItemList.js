import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";

const ItemList = ({categoryList}) => {
        const { name, id, description, imageId } = categoryList?.card?.info || {};
        const imgId = "https://media-assets.swiggy.com/swiggy/image/upload/" + imageId;
        const dispatch = useDispatch();
        const handleAddItem = (item) => {
            // Dispatch an action 
            dispatch(addItem(item));
        }
    return(
        <div
            key={id}
            className="flex items-center gap-4 border-b last:border-b-0 px-4 py-4 bg-white"
        >
            <div className="flex-1 text-left">
                <h1 className="text-lg font-semibold">{name}</h1>
                <p className="text-sm text-gray-700 mt-1">
                    {description || "No details available."}
                </p>
            </div>
            {imageId && (
                <div>
                    <button 
                        className="p-2 mx-16 rounded-lg bg-black text-white shadow-lg"
                        onClick = {()=>{handleAddItem(categoryList)}}
                    >
                        Add +
                    </button>
                    <img
                        src={imgId}
                        alt={name}
                        className="w-24 h-24 object-cover rounded shadow"
                    />
                </div>
               
            )}
        </div>
    );
}

export default ItemList;