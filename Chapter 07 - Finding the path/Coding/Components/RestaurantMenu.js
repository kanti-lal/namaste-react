import { useEffect, useState } from 'react';
import Shimmer from './Shimmer';
import { MENU_API } from '../utils/constants';
import { useParams } from 'react-router-dom';

const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);

  const { resId } = useParams();
  console.log('params', resId);

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(MENU_API + resId);
    const json = await data.json();
    console.log('json', json);
    setResInfo(json);
  };

  if (resInfo === null) return <Shimmer />;

  const { itemCards } =
    resInfo?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
      ?.card;

  console.log('itemCards', itemCards);
  const { name, cuisines, costForTwoMessage, avgRating, delivery } =
    resInfo?.data?.cards[0]?.card?.card?.info;
  console.log(resInfo);

  return (
    <div className='menu'>
      <h1>{name}</h1>
      <h3>
        {cuisines.join(', ')} - {costForTwoMessage}
      </h3>
      <h3>{delivery}</h3>
      <h3>Menu</h3>
      <ul>
        {itemCards.map((item) => (
          <li key={item.card.info.id}>
            {item.card.info.name} - {' Rs.'} {item.card.info.price / 100}
          </li>
        ))}
        <li>{itemCards[0].card.info.name}</li>
      </ul>
    </div>
  );
};

export default RestaurantMenu;
