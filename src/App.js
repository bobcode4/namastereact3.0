import React, { useEffect, useState } from "react";
import {lazy, Suspense} from "react";
import ReactDOM from "react-dom/client";

import {createBrowserRouter, Outlet, RouterProvider} from "react-router-dom";


import Header from './components/Header';
import Body from './components/Body';
import About from './components/About';
import Contact from "./components/Contact";
import Cart from "./components/Cart";
import RestMenu from './components/RestMenu';
import UserContext from "./utils/userContext";
import { Provider } from 'react-redux';
import appStore from "./utils/appStore";







const Grocery = lazy(() => import("./components/Grocery"));

const AppLayout = () => {
    const [userName, setUserName] = useState();

    //Authentication
    useEffect(()=> {
        const data = {
            name : "Sarath K",
        };
        setUserName(data.name);
    },[]);

    return (
        // Redux Provider
        <Provider store={appStore}>
        {/* Context Provider */}
        <UserContext.Provider value={{loggedInUser : userName, setUserName}}>
            <div className='app'>
                <UserContext.Provider value={{loggedInUser : "Elon Musk"}}>
                    <Header />
                </UserContext.Provider>
                    <Outlet />
            </div>
        </UserContext.Provider>
        </Provider>
    )
}

const appRouter = createBrowserRouter([
    {
        path:"/",
        element: <AppLayout />,
        children : [
            {
                path:"/",
                element: <Body />
            },
            {
                path:"/about",
                element: <About />
            },
            {
                path:"/contact",
                element: <Contact />
            },
            {
                path:"/cart",
                element: <Cart />
            },
            {
                path:"/restaurants/:resId",
                element: <RestMenu />
            },
            {
                path:"/grocery",
                element: <Suspense fallback={<h1>Safari Mart Loading</h1>}>
                            <Grocery /> 
                        </Suspense>
            }
        ]
    } 
    
]);



const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);