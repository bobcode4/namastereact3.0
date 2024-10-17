import { useState } from "react";
import ItemList from "./ItemList";

const RestCategory = (props) => {
    const {data, showItems, setShowIndex} = props;
    const {title, itemCards} = data;

    // const[showItems, setShowItems]= useState(false)
    const handleClick = ()=> {
        setShowIndex();
    };

    return(
        <div>
            <div className="w-6/12 mx-auto my-4 bg-gray-50 shadow-lg p-4">
                <div className="flex justify-between cursor-pointer" onClick={handleClick}>
                    <span className="font-bold text-lg">{title}({itemCards.length})</span>
                    <span>⬇️</span>
                </div>  
            {showItems && <ItemList items={itemCards} /> }
            </div>           
        </div>
    );
};

export default RestCategory; 