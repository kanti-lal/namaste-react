import { useEffect, useState } from 'react';
import RestaurentCard from './RestaurantCard';
import { SWIGGY_API_URL } from '../utils/constants';
import Shimmer from './Shimmer';
import { Link } from 'react-router-dom';
const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  // console.log('🚀listOfRestaurants:', listOfRestaurants);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);

  const [searchText, setSearchText] = useState('');

  // console.log('Body Rendered');

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(SWIGGY_API_URL);
    const json = await data.json();

    setListOfRestaurants(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestaurants(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className='body'>
      <div className='filter'>
        <div className='search'>
          <input
            type='text'
            className='search-box'
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            onClick={() => {
              const filteredRestaurant = listOfRestaurants.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              console.log(filteredRestaurant, searchText);
              setFilteredRestaurants(filteredRestaurant);
            }}
          >
            Search
          </button>
        </div>
        <button
          className='filter-btn'
          onClick={() => {
            const filteredList = listOfRestaurants.filter(
              (res) => res.info.avgRating > 4
            );
            setListOfRestaurants(filteredList);
          }}
        >
          Top rated restaurant
        </button>
      </div>
      <div className='res-container'>
        {filteredRestaurants.map((restaurent) => {
          return (
            <Link
              key={restaurent.info.id}
              to={'/restaurant/' + restaurent.info.id}
              className='link'
            >
              <RestaurentCard key={restaurent.info.id} resData={restaurent} />
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Body;
