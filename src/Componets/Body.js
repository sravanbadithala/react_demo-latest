import RestroCards from "./RestroCards";
import cards from "../Utils/mockData";
import { useEffect, useState } from "react";
import ShimmerUi from "./Shimmer";
import { Link } from "react-router-dom";
import { useApiService } from "../Utils/Apiservice";
import { API_RES_URL } from "../Utils/contants";
import useOnlineStatus from "../Utils/useOnlineStatus"

const Bodycomponent = () => {
  
const resdata=useApiService(API_RES_URL,null);
const status=useOnlineStatus();
console.log(resdata);
const cardsfrompi =
      resdata?.data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
  const [listOfCards, setListOfCards] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [listOffilter, setListOffilter] = useState([]);
  
 useEffect(()=>{
  
  if(cardsfrompi!=null || cardsfrompi!=undefined ){
    setListOfCards(cardsfrompi);
    setListOffilter(cardsfrompi);
  }
 },[cardsfrompi])
console.log(listOfCards);


  const filterWithRating = () => {
    const filteredList = listOfCards.filter(
      (list) => list.info.avgRating > 4.5
    );
    setListOffilter(filteredList);
    console.log(filteredList);
  };
  const filerWithDelivery = () => {
    const filteredForQuick = listOfCards.filter(
      (listQuick) => listQuick.info.sla.deliveryTime < 25
    );
    setListOffilter(filteredForQuick);
  };
  console.log(status);
  if(status==false) return <h1>Check Your inter net connetion</h1>
  if (listOfCards.length === 0) {
    return <ShimmerUi />;
  }
  return (
    <div className="flex flex-col" >
      <div className="flex flex-col">
       
        <div className="search-comp flex m-4 gap-4">
          <input
          className="border border-solid"
            type="text"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          ></input>
          <button
          className="px-8 py-1  bg-blue-400 rounded-sm"
            onClick={() => {
              const listSerchcards = listOfCards.filter((card) =>
                card.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              console.log(listSerchcards);
              console.log(listOfCards[0].info.name);
              listSerchcards.length == 0
                ? setListOffilter(listOfCards)
                : setListOffilter(listSerchcards);
            }}
          >
            search
          </button>
        </div>
         <div className="buttons flex gap-8 m-4">
        <button className="px-4 py-2 bg-blue-500 text-white rounded" onClick={filterWithRating}>
          Top restro
        </button>

        <button className="px-4 py-2  bg-blue-500 text-white rounded" onClick={filerWithDelivery}>
          quickDeliver
        </button>
        </div>
      </div>
      <div className="grid grid-cols-4 gap-6 w-full px-6">
      
          {listOffilter.map((resCardss) => (
           <Link key={resCardss.info.id}  to={"restro/"+resCardss.info.id}> <RestroCards key={resCardss.info.id} restroName={resCardss} /></Link>
          ))}
       
      </div>
    </div>
  );
};
export default Bodycomponent;
