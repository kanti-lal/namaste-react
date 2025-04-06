import { useEffect, useState } from "react";
import RestaurentCard, {
  withPromotedLabel,
  withPromoteLabel,
} from "./RestaurantCard";
import { SWIGGY_API_URL } from "../utils/constants";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/userContext";
import { useContext } from "react";
const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [loading, setLoading] = useState(false);

  const RestauraentCardPromoted = withPromotedLabel(RestaurentCard);
  const [searchText, setSearchText] = useState("");

  const PromoteComponent = withPromoteLabel(RestaurentCard);

  const { setUserName, loggedInUser } = useContext(UserContext);

  const fetchData = async () => {
    setLoading(true);
    const data = await fetch(SWIGGY_API_URL);
    const json = await data.json();

    const restaurants =
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants || [];
    setListOfRestaurants(restaurants);
    setLoading(false);
    setFilteredRestaurants(restaurants);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const onlineStatus = useOnlineStatus();

  if (onlineStatus === false)
    return (
      <h1>Look like you're Offline!! Please check your internet Connection</h1>
    );

  return loading ? (
    <div className="p-4 mt-10">
      <Shimmer />
    </div>
  ) : (
    <div className="body">
      <div className="flex p-4 mx-4">
        <div className="">
          <input
            type="text"
            className="h-8 px-2 border border-solid border-black rounded"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="bg-purple-500 text-white px-4 py-1 ml-2 rounded"
            onClick={() => {
              const filteredRestaurant = listOfRestaurants.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilteredRestaurants(filteredRestaurant);
            }}
          >
            Search
          </button>
        </div>
        <div className="flex items-center pl-6">
          <button
            type="button"
            className="bg-purple-500 text-white px-4 py-1 rounded"
            onClick={() => {
              const filteredList = listOfRestaurants.filter(
                (res) => res.info.avgRating > 4
              );
              setListOfRestaurants(filteredList);
            }}
          >
            Top rated restaurant
          </button>

          <input
            name="user"
            className="border border-black ml-5"
            value={loggedInUser}
            onChange={(e) => setUserName(e?.target?.value)}
          />
        </div>
      </div>
      <div className="flex flex-wrap">
        {filteredRestaurants.map((restaurent) => {
          return (
            <>
              <Link
                key={restaurent.info.id}
                to={"/restaurant/" + restaurent.info.id}
                className="link"
              >
                {restaurent.info.veg ? (
                  <RestauraentCardPromoted
                    key={restaurent.info.id}
                    resData={restaurent}
                  />
                ) : (
                  <RestaurentCard
                    key={restaurent.info.id}
                    resData={restaurent}
                  />
                )}
              </Link>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default Body;
