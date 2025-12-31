import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {useApiService} from "../Utils/Apiservice"
import { MENU_URL } from "../Utils/contants";

const RestroMenu = () => {
 
  const [item, setItems] = useState(null);
  const {id}=useParams();
  
    const menudata =useApiService(MENU_URL,id);
  
  //const {name,avgRating,cuisines,costForTwo}=menudata?.data?.cards[2]?.card?.card?.info;
  console.log(menudata?.data?.cards[2]?.card?.card?.info);
   
 
  return (
    <div style={{textAlign:"center"}}>
      <h1>{menudata?.data?.cards[2]?.card?.card?.info?.name}</h1>
       <h3>{menudata?.data?.cards[2]?.card?.card?.info?.costForTwo} - {menudata?.data?.cards[2]?.card?.card?.info?.avgRating}</h3>
     <h3> cuisines : {menudata?.data?.cards[2]?.card?.card?.info?.cuisines.join(",")}</h3>
     

    </div>
  );
};
export default RestroMenu;
