import React, { useEffect, useState } from "react";
import { restaurantData } from "../config/config";
import CardSection from "./CardSection";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { filteredData } from "../Utils/Helper";
import { useRestraunt } from "../Utils/useRestraunt";


const Body = () => {
  const [searchText, setSearchText] = useState("");
  const [filteredRes, setFilteredRes] = useState([]);
  const [allRestro, setAllRestro] = useState([]);



  useEffect(() => {
    fetchData();
  }, []);

  const fetchData =  async () =>  {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json(); 
    console.log('json',json);

    setAllRestro(json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    setFilteredRes(json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  }

  const offline = true;

  if(offline){
    return <><h1>Offline, Please connect to internet</h1></>
  }

  if (!allRestro) return null;

  if (filteredRes?.length === 0)
    return <h1>No Restraunt Match your filter </h1>;
  return allRestro.length === 0 ? (
    <Shimmer />
  ) : (
    <>
      <div className="flex items-center space-x-2 md:space-x-4 ml-10 mt-4">
        <input
          className="flex-1 py-2 px-3 rounded-full border border-gray-300 shadow-sm focus:outline-none focus:ring focus:border-blue-300"
          placeholder="Search"
          type="text"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
          onClick={() => {
            const data = filteredData(searchText, allRestro);
          }}
        >
          Search
        </button>
      </div>
      <div className="restarunt-list">
        {filteredData.map((restaurant) => {
          return(
         <Link to={'/restraunt/' + restaurantData.id} key={restaurantData.id} ><CardSection restaurant={restaurant.data} /></Link>
       )})}
      </div>
    </>
  );
};

export default Body;
