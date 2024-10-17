import Shimmer from "./Shimmer";
import {useParams} from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestCategory from "./RestCategory";
import { useState } from "react";


const RestMenu = () => {
    const { resId } = useParams();
    const resInfo = useRestaurantMenu(resId);

    const [showIndex, setShowIndex] = useState(null);

    if (resInfo === null) return <Shimmer />

    const {name, costForTwoMessage, cuisines, avgRating} = resInfo?.cards[2]?.card?.card?.info;
    // const {itemCards} = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[4]?.card?.card;
    const {cards} = resInfo.cards[4]?.groupedCard?.cardGroupMap?.REGULAR;
    const categories = cards.filter(eachCard => 
        eachCard?.card?.card?.['@type'] === 'type.googleapis.com/swiggy.presentation.food.v2.ItemCategory'); 
    // console.log(categories);
    return  (
        <div className="text-center">           
            <h1 className="font-bold text-2xl my-6">{name}</h1>
            <p className="font-bold txt-lg">{cuisines.join(",")}</p>
            {categories.map((eachCategory, index)=> (
                //Controlled Component
            <RestCategory key={eachCategory?.card?.card?.title} 
            data={eachCategory?.card?.card} 
            showItems={index === showIndex? true:false}
            setShowIndex={() => setShowIndex(index)}
            />
            ))}
        </div>
    );
};

export default RestMenu;  