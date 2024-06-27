import React, { lazy, Suspense, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
// import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import UserContext from "../utils/UserContext.js";
import { Provider } from "react-redux";
import appStore from "../utils/appStore.js";
// import Grocery from "./components/Grocery";

// Chunking
// Code Splitting
// Dynamic Bundling
// Lazy loading
// On demand loading
// dynamic import

const Grocery = lazy(() => import("./components/Grocery"))

const About = lazy(() => import("./components/About"))

const AppLayout = () => {

    const [userName, setUserName] = useState();

    // Authentication
    useEffect(() => {
        const data = {
            name: "Ahsan Javed"
        }
        setUserName(data.name)
    },[])

    return (
        <Provider store={appStore}>
            {/* default value */}
            <UserContext.Provider value={{loggedInUser: userName, setUserName}}>
                {/* Ahsan Javed */}
                <div className="app">
                {/* <UserContext.Provider value={{loggedInUser: "S A"}}> */}
                    {/* S A */}
                    <Header></Header>
                {/* </UserContext.Provider> */}
                <Outlet></Outlet>
                </div>
            </UserContext.Provider>
        </Provider>
    )
}

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout></AppLayout>,
        children: [
            {
                path: "/",
                element: <Body></Body>,
            },
            {
                path: "/about",
                element: <About></About>,
            },
            {
                path: "/contact",
                element: <Contact></Contact>,
            },
            {
                path: "/grocery",
                element: <Suspense fallback={<h1>loading.....</h1>}><Grocery></Grocery></Suspense>,
            },
            {
                path: "/restaurants/:resId",
                element: <RestaurantMenu></RestaurantMenu>,
            }
        ],
        errorElement: <Error></Error>,
    },   
])

const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(<RouterProvider router={appRouter} />)