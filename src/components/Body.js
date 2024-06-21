import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import RestaurantCard from './RestaurantCard';
import Shimmer from './Shimmer.js';
import useRestaurants from '../../utils/useRestaurants.js';
import useOnlineStatus from '../../utils/useOnlineStatus.js';

const Body = () => {
    const listOfRestaurant = useRestaurants()
    const [filteredRestaurant, setFilteredRestaurant] = useState([]);
    const [searchText, setSearchText] = useState('');
    
    useEffect(() => {
        if (listOfRestaurant.length > 0) {
            const filtered = listOfRestaurant.filter(res =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
            );
            setFilteredRestaurant(filtered);
        }
    }, [listOfRestaurant, searchText]);
    

    useEffect(() => {
        const filtered = listOfRestaurant.filter(res =>
            res.info.name.toLowerCase().includes(searchText.toLowerCase())
        );
        setFilteredRestaurant(filtered);
    }, []);


    const onlineStatus = useOnlineStatus()

    if(onlineStatus === false) return <h1>Looks like you are offline..!!!. Please check your internet connection</h1>

    return listOfRestaurant?.length === 0 ? <Shimmer /> : (
        <div className="body">
            <div className="flex m-2">
                <div className="search">
                    <input
                        type="text"
                        className="border border-solid border-black rounded-3xl"
                        value={searchText}
                        onChange={(e) => setSearchText(e.target.value)}
                    />
                    <button className="px-3 py-1 bg-green-100 m-1 rounded-2xl hover:bg-green-200"
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
                    className="px-4 py-1 bg-gray-100 rounded-2xl hover:bg-gray-200"
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
            <div className="flex flex-wrap">
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
