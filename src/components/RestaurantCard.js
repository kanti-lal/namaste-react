import { useContext } from "react";
import { IMG_CDN_URL } from "../utils/constants";
import UserContext from "../utils/userContext";

const RestaurentCard = (props) => {
  const { resData } = props;

  const { name, cuisines, avgRating, costForTwo, sla } = resData?.info;

  const { loggedInUser } = useContext(UserContext);
  return (
    <div className="m-4 p-4 w-[250px] bg-gray-100 hover:bg-gray-300 rounded-lg">
      <img
        className="rounded w-full h-32 object-fill"
        src={IMG_CDN_URL + resData.info.cloudinaryImageId}
        alt="foods"
      />
      <h3 className="font-bold">{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating} Star</h4>
      <h4>{costForTwo}</h4>
      <h4>{sla?.slaString}</h4>
      <h4>User: {loggedInUser}</h4>
    </div>
  );
};

export const withPromotedLabel = (RestaurentCard) => {
  return (props) => {
    return (
      <div className="">
        <label className="absolute bg-green-500 text-white px-4 p-1 m-2 rounded-lg border-white border">
          Veg
        </label>
        <RestaurentCard {...props} />
      </div>
    );
  };
};

export const withVegRestaurant = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <label className="">100% Veg</label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export const withPromoteLabel = (RestaurentCard) => {
  return (props) => {
    return (
      <div>
        <label>Promoted</label>
        <RestaurentCard {...props} />
      </div>
    );
  };
};

export default RestaurentCard;
