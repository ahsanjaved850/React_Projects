import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer.js"

const Body = () => {

    const [listOfRestaurant, setListOfRestaurant] = useState([]);
    const [filteredRestaurant, setFilteredRestaurant] = useState([]);
    const [searchText, setSearchText] = useState('');

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const response = await fetch("https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.6105073&lng=77.1145653&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
            const json = await response.json();
            console.log(json?.data?.cards[4].card?.card?.gridElements?.infoWithStyle?.restaurants)
            setListOfRestaurant(json?.data?.cards[4].card?.card?.gridElements?.infoWithStyle?.restaurants);
            setFilteredRestaurant(json?.data?.cards[4].card?.card?.gridElements?.infoWithStyle?.restaurants);
        
        } catch (error) {
            console.error("Error fetching data: ", error);
        }
    }
    return listOfRestaurant.length === 0 ? <Shimmer /> : (
        <div className="body">
            <div className="filter">
                <div className="search">
                    <input 
                    type="text"
                    className="search-box"
                    value={searchText}
                    onChange={(e) => {
                        setSearchText(e.target.value)
                    }}
                    />
                    <button
                    onClick={() => {
                        // filter the restaurant and update the UI
                        const filteredRestaurant = listOfRestaurant.filter(res => res.info.name.toLowerCase().includes(searchText.toLowerCase()))

                        setFilteredRestaurant(filteredRestaurant)
                    }}
                    >
                        Search
                    </button>
                    
                </div>
                <button  
                className="filter-btn"
                onClick={() => {
                    const filteredList = listOfRestaurant.filter(
                        res => res.info.avgRating > 4.2
                    );
                    setListOfRestaurant(filteredList)
                }}
                >
                Top Rated Restaurants
                </button>
                </div>
            <div className="res-container">
           { filteredRestaurant.map(restaurant => (
                <RestaurantCard key= {restaurant.info.id} resData={restaurant}></RestaurantCard>
            ))}
            </div>
        </div>
    )
}

export default Body;