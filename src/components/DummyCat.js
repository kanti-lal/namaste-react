import React, { useState } from "react";
import ItemList from "./ItemList";

const DummyCat = ({ data }) => {
  const [showItems, setShowItems] = useState(false);

  const handleClick = () => {
    setShowItems(!showItems);
  };
  return (
    <div className="p-4 my-4 bg-gray-100 w-6/12 shadow-lg mx-auto ">
      <div
        onClick={handleClick}
        className="flex justify-between cursor-pointer"
      >
        {data.title} ({data?.itemCards?.length})
      </div>
      <div>{showItems && <ItemList items={data?.itemCards} />}</div>
    </div>
  );
};

export default DummyCat;
