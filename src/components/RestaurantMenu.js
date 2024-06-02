import Shimmer from './Shimmer';
import { useParams } from 'react-router-dom';
import useRestaurantMenu from '../utils/useRestaurantMenu';

const RestaurantMenu = () => {
  const { resId } = useParams();

  const resInfo = useRestaurantMenu(resId);

  if (resInfo === null) return <Shimmer />;

  const { itemCards } =
    resInfo?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
      ?.card;

  const { name, cuisines, costForTwoMessage, delivery } =
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
