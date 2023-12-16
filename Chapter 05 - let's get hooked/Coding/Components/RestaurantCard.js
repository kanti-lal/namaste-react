import { IMG_CDN_URL } from '../utils/constants';

const RestaurentCard = (props) => {
  const { resData } = props;

  const { name, cuisines, avgRating, costForTwo, deliveryTime } = resData.info;
  return (
    <div className='res-card'>
      <img
        className='res-logo'
        src={IMG_CDN_URL + resData.info.cloudinaryImageId}
        height={128}
        alt='foods'
      />
      <h3>{name}</h3>
      <h4>{cuisines.join(', ')}</h4>
      <h4>{avgRating} Star</h4>
      <h4>{costForTwo}</h4>
      <h4>{deliveryTime} Minutes</h4>
    </div>
  );
};

export default RestaurentCard;
