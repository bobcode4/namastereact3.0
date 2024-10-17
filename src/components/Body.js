import RestCard, {withQuickTime} from "./RestCard";
import { useState, useEffect, useContext } from "react";
import Shimmer from "./Shimmer"
import {Link} from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import { restaurantListApi } from "../utils/commons";
import { withQuickTime } from "./RestCard";
import UserContext from "../utils/userContext";

 
const Body = () => {

    const [restList, setRestList] = useState([]);
    const [filteredRest, setFilteredRest] = useState([]);
    const [searchText, setSearchText] = useState([]);

    const RestCardQuicker = withQuickTime(RestCard);
    
    useEffect(()=>{
        fetchData();
    }, []);
    const fetchData = async () => {
        const data = await fetch(restaurantListApi);
        const json = await data.json();
        setRestList(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilteredRest(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants); 
    }


        const onlineStatus = useOnlineStatus();
        if(onlineStatus === false) return (
            <h1>Looks like You're Offline!!! Please check your internet connection</h1>
        )

        const {loggedInUser, setUserName} = useContext(UserContext);

        if (restList.length === 0){
            return <Shimmer />
        } 
    return (        
        <div className='body'>
            <div className="flex">
            <div className="search">
                <input 
                type="text" 
                placeholder="Search Here" 
                className="border border-solid rounded-sm border-black p-1 m-2" 
                value={searchText}
                onChange={(event)=> {
                    setSearchText(event.target.value)
                }}/>
                <button 
                className="ml-2 px-4 bg-green-300 border rounded-md border-solid border-orange-600"
                onClick={()=>{
                    const filteredRestaurants = filteredRest.filter((each) => each.info.name.toLowerCase().includes(searchText.toLowerCase().trim()))
                    setFilteredRest(filteredRestaurants);
                }}>
                    Search
                </button>
            </div>
            <div className=" justify-center self-center">
            <button className='ml-4 px-4 bg-green-300 border rounded-md border-solid border-orange-600' 
                onClick={()=>{
                    const topRatedRest = restList.filter((each)=> each.info.avgRating >= 4.3);
                    console.log(topRatedRest);
                        setFilteredRest(topRatedRest);        
            }}>            
                Top Rated Restaurants
            </button> 
            </div>   
            <div className="justify-center self-center">
                <label className="ml-4">User Name : </label>
                <input className="ml-1 border border-black rounded-md"
                value={loggedInUser}
                onChange={(event)=> setUserName(event.target.value) }
                />
            </div>       
            </div>

            <div className='flex flex-wrap justify-center p-2'>
                {filteredRest.map(each => (
                    <Link 
                    to={"restaurants/"+each.info.id}
                    key={each.info.id}>
                    {each.info.sla.deliveryTime<=20 ? <RestCardQuicker resData={each}/> : <RestCard resData={each}/>}                         
                    </Link> 
                ))}
            </div>  
        </div>
        
    );
};

export default Body