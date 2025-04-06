import React from "react";
import { IMG_CDN_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";

const ItemList = ({ items }) => {
  const dispatch = useDispatch();

  const handleAddClick = (item) => {
    dispatch(addItem(item));
  };

  return (
    <div>
      {items.map((item) => (
        <div
          key={item?.card?.info?.id}
          className="p-2 m-2 border-gray-300 border-b text-left flex justify-between"
        >
          <div className="w-9/12">
            <div className="py-2">
              <span>{item?.card?.info?.name}</span>
              <span className="">
                {" "}
                - ₹
                {item?.card?.info?.price / 100 ||
                  item?.card?.info?.defaultPrice / 100}
              </span>
            </div>
            <p className="text-xs text-gray-500">
              {item?.card?.info?.description}
            </p>
          </div>
          <div className="w-3/12 relative">
            {item?.card?.info?.imageId && (
              <>
                <img
                  className=" w-full h-20 rounded-lg"
                  src={IMG_CDN_URL + item?.card?.info?.imageId}
                  alt=""
                />
                <button
                  className="mx-auto absolute bottom-0 left-4   px-3 py-1 bg-black text-white shadow-lg border rounded-[8px]"
                  onClick={() => handleAddClick(item)}
                >
                  Add +
                </button>
              </>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
