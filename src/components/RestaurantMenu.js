import { useParams } from 'react-router-dom';
import Shimmer from './Shimmer';
import useRestaurantMenu from '../../utils/useRestaurantMenu';

const RestaurantMenu = () => {
  const { resId } = useParams();

  const resInfo = useRestaurantMenu(resId)

  if (resInfo === null) return <Shimmer />;

  const { name, cuisines} = resInfo?.cards?.[2]?.card?.card?.info;
  const { itemCards } = resInfo?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[2]?.card?.card;
  return (
    <div className="m-4 p-4 w-[400px] h-auto border-[3px] border-solid border-black">
      <h1 className="text-3xl font-bold">{name}</h1>
      <h2 className="font-semibold">{cuisines.join(", ")}</h2>
      <h3 className="text-xl font-semibold">Menu</h3>
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
