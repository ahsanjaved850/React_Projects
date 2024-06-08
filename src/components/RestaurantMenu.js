import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Shimmer from './Shimmer';
import { MENU_API } from '../../utils/constants';

const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);
  const { resId } = useParams();

  useEffect(() => {
    fetchMenu();
  }, [resId]); 

  const fetchMenu = async () => {
    try {
      const response = await fetch(MENU_API + resId);
      const json = await response.json();

      setResInfo(json.data);
    } catch (error) {
      console.error("Error fetching menu:", error);
    }
  };

  if (resInfo === null) return <Shimmer />;

  const { name, cuisines, costForTwoMessage} = resInfo?.cards?.[2]?.card?.card?.info;
  const { itemCards } = resInfo?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[2]?.card?.card;
  return (
    <div className='menu'>
      <h1>{name}</h1>
      <h2>{cuisines.join(", ")}</h2>
      <h3>{costForTwoMessage}</h3>
      <h3>Menu</h3>
      <ul>
        {itemCards?.map(item => (
          <li key={item.card.info.id}>
            {item.card.info.name} - {" Rs:"}{item.card.info.price / 100 || item.card.info.defaultPrice / 100}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
