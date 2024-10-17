import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";

const ItemList = (props) => {
    const {items} = props;

    const dispatch = useDispatch();
    
    const handleAddItem = (each) => {
        // Dispatch an action
        dispatch(addItem(each))
    };
    return(
        <div>
           {items.map((each) => (
            <div key={each.card.info.id}
            className="p-2 m-2 border-b-2 border-gray text-left flex justify-between">
                <div>
                    <span>{each.card.info.name}</span>
                    <span> - ₹ {(each.card.info.price)/100}</span>
                    <p className="text-xs">{each.card.info.description}</p>
                </div>
               
                    <button className="text-white text-xs bg-black border rounded-md px-1 m-2 h-8 w-14"
                    onClick={() => handleAddItem(each)}>
                        ADD +
                    </button>
                           
            </div>
           ))}
        </div>
    );
};

export default ItemList;