import { useState, useEffect } from "react";
import {useParams} from "react-router-dom";
import { resMenuApi, resMenuTail } from "../utils/commons";

const useRestaurantMenu = () => {
    const [resInfo, setResInfo] = useState(null);
    const {resId} = useParams();
    
    useEffect(()=> {
        fetchMenu();
    }, []);
    
    const fetchMenu = async () => {
        const data = await fetch(resMenuApi+resId+resMenuTail);
        const json = await data.json();
        console.log(json);
        // console.log(json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card);
        setResInfo(json?.data);
    }
   
    return resInfo;
}

export default useRestaurantMenu;

