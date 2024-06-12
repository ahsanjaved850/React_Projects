import { useEffect, useState } from "react";

const useRestaurants = () => {
    const [listOfRestaurant, setListOfRestaurant] = useState([])
    useEffect(() => {
        fetchData();
    }, [])

    const fetchData = async () => {
        try
        {
            const data = await fetch("https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.6105073&lng=77.1145653&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
            const json = await data.json()
            setListOfRestaurant(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
        } catch (error) {
            console.error("Error fetching data: ", error);
        }
    }
  return listOfRestaurant;
}

export default useRestaurants;