import UserContext from "../utils/userContext";
import { useContext } from "react";

const User = (props) => {
    const {loggedInUser} = useContext(UserContext);
    const {data} = props;
    const {userName, avatar, userLocation} = data;
    return (
        <div>
            <img src={avatar} className="w-44 h-44"/>
            <h3>Name : {userName}</h3>
            <h3>Location : {userLocation}</h3>
            <h4>User : {loggedInUser}</h4>
        </div>
    )
}
    
    
export default User;