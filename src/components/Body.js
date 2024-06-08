import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import RestaurantCard from './RestaurantCard';
import Shimmer from './Shimmer.js';

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

            const restaurants = json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants || [];
            setListOfRestaurant(restaurants);
            setFilteredRestaurant(restaurants);
        
        } catch (error) {
            console.error("Error fetching data: ", error);
            // Handle error by showing a message to the user or similar
        }
    };

    useEffect(() => {
        const filtered = listOfRestaurant.filter(res =>
            res.info.name.toLowerCase().includes(searchText.toLowerCase())
        );
        setFilteredRestaurant(filtered);
    }, [searchText, listOfRestaurant]);

    return listOfRestaurant.length === 0 ? <Shimmer /> : (
        <div className="body">
            <div className="filter">
                <div className="search">
                    <input
                        type="text"
                        className="search-box"
                        value={searchText}
                        onChange={(e) => setSearchText(e.target.value)}
                    />
                    <button
                        onClick={() => {
                            const filtered = listOfRestaurant.filter(res =>
                                res.info.name.toLowerCase().includes(searchText.toLowerCase())
                            );
                            setFilteredRestaurant(filtered);
                        }}
                    >
                        Search
                    </button>
                </div>
                <button
                    className="filter-btn"
                    onClick={() => {
                        const filteredList = listOfRestaurant.filter(
                            res => res.info.avgRating > 4
                        );
                        setFilteredRestaurant(filteredList);
                    }}
                >
                    Top Rated Restaurants
                </button>
            </div>
            <div className="res-container">
                {filteredRestaurant.map(restaurant => (
                    <Link key={restaurant.info.id} to={"/restaurants/" + restaurant.info.id}>
                        <RestaurantCard resData={restaurant} />
                    </Link>
                ))}
            </div>
        </div>
    );
}

export default Body;
