import { swiggyImgUrl } from "../utils/commons";
import UserContext from "../utils/userContext";
import { useContext } from "react";

const RestCard = (props) => {
    const { resData } = props
    const { info } = resData
    const { name, avgRating, costForTwo, cuisines, id, cloudinaryImageId} = info;
    const {loggedInUser} = useContext(UserContext);
    return (
        <div className='flex-col flex-wrap m-6 p-4 bg-gradient-to-r from-slate-500 to bg-yellow-100 hover:bg-slate-300 w-72 h-56 rounded-md'>
            <img 
            className='rest-card-image'
            alt="rest-image" 
            src={swiggyImgUrl + cloudinaryImageId}
            />
            <h3>resId : {id}</h3>
            <h3 className='font-bold'>{name}</h3>
            <h4>{avgRating}</h4>
            <h4 className="flex flex-wrap">{cuisines.join(',')}</h4>
            <h4>{costForTwo}</h4>
            <h4>user : {loggedInUser}</h4>
        </div> 
    )
}

export const withQuickTime = (RestCard) => {
    return (props) => {
        return (
            <div>
                <label className="absolute bg-black text-white rounded-md ml-6 mb-7 px-2">Fast Delivery</label>
                <RestCard {...props}/>
            </div>
        )
    }
} 

export default RestCard;

