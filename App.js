import React from "react";
import ReactDOM from "react-dom/client";

/**
 * Header
 *  -Logo
 *  -Nav-items
 * Body
 *  -Search
 *  -Restaurant Contianer
 *  -Resturant Cards
 *      -image
 *      -Name of res, star rating, cuisine, delivery time
 * Footer
 *  -Copyright
 *  -Links
 *  -Contact
 *  -Address
 */

const Header = () => {
    return (
        <div className="header">
            <div>
            <img className="logo" src="https://logowik.com/content/uploads/images/restaurant9491.logowik.com.webp"></img>
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
}


const RestaurantCard = (props) => {
    const {name, cuisine, rating, delivery_time} = props
    return (
        <div className="res-card" style={{backgroundColor: "#f0f0f0"}}>
            <img className="res-logo" alt="res-logo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVc4UJCTumSMsxqAL2fLIcD0MUvj2Bzk_tw6EVpeLYgw&s"></img>
            <h3>{name}</h3>
            <h4>{cuisine}</h4>
            <h4>{rating} stars</h4>
            <h4>{delivery_time} min</h4>
        </div>
    )
}

const Body = () => {
    return (
        <div className="body">
            <div className="search">Search</div>
            <div className="res-container">
                <RestaurantCard name="Master Biryani" cuisine="Biryani, Asian" rating="4.2" delivery_time="45" />
                <RestaurantCard name="KFC" cuisine="Burgers, Fast Food" rating="4.8" delivery_time="25"/>
            </div>
        </div>
    )
}

const AppLayout = () => {
    return (
        <div className="app">
        <Header></Header>
        <Body />
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(<AppLayout></AppLayout>)