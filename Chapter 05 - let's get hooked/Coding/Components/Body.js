import { useState } from 'react';
import RestaurentCard from './RestaurantCard';
import { resList } from '../utils/mockData';
const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState(resList);

  return (
    <div className='body'>
      <div className='filter'>
        <button
          className='filter-btn'
          onClick={() => {
            const filteredList = listOfRestaurants.filter(
              (res) => res.info.avgRating > 4
            );
            setListOfRestaurants(filteredList);
            console.log('filterdata', filteredList);
          }}
        >
          Top rated restaurant
        </button>
      </div>
      <div className='res-container'>
        {listOfRestaurants.map((restaurent) => {
          return (
            <RestaurentCard key={restaurent.info.id} resData={restaurent} />
          );
        })}
      </div>
    </div>
  );
};

export default Body;
