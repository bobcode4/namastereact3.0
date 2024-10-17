import { useState, useEffect } from "react";
import User from "./User";

const About = () => {

    const [userInfo, setUserInfo] = useState({
        userName : "bob",
        userLocation : "earth",
        avatar : "https://dummy-img"
    });

    useEffect(()=>{
        fetchData();
    }, []);

    const fetchData = async () => {
        const data = await fetch('https://corsproxy.io/?https://api.github.com/users/akshaymarch7');
        const json = await data.json();
        const {name, location, avatar_url} = json;
        setUserInfo({
            userName : name,
            userLocation : location,
            avatar : avatar_url
        });
    }

    return (
        <div>
            <User data={userInfo} />
        </div>
    );
};

export default About;