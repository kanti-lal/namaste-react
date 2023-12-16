import { resList } from '../utils/mockData';
import RestaurentCard from './RestaurantCard';

const Body = () => {
  return (
    <div className='body'>
      <div className='filter'>
        <button className='filter-btn'>Top rated restaurant</button>
      </div>
      <div className='res-container'>
        {resList.map((restaurent) => (
          <RestaurentCard key={restaurent.info.id} resData={restaurent} />
        ))}
      </div>
    </div>
  );
};

export default Body;
