import { useEffect, useState } from "react";
import { FETCHING_MENU } from "../Constant";

// custom hook created for fetching restraunt data with dynamic id for url
export const useRestraunt = (params) => {
  const [restraunt, setRestraunt] = useState(null);
  const [resmenu, setResMenu] = useState([{}]);

  useEffect(() => {
    getRestraunt();
  }, []);

  const getRestraunt = async () => {
    const data = await fetch(FETCHING_MENU
       +
        params +
        "&submitAction=ENTER"
    );
    const DataJson = await data.json();
    setRestraunt(DataJson.data?.cards[0]?.card?.card?.info); //47589
    // console.log(restaurants);
    setResMenu(DataJson.data?.cards[2]);
    // console.log(resmenu);
  };
  return [restraunt, resmenu];
  // get data from api

  //return restraunt data
};
