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
    <div className="body">
      <div className="serachBar">
        <button className="filter-btn" onClick={filterWithRating}>
          Top restro
        </button>

        <button className="quick-btn" onClick={filerWithDelivery}>
          quickDeliver
        </button>
        <div className="search-comp">
          <input
            type="text"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          ></input>
          <button
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
      </div>
      <div className="restro-containers">
        <div className="resto-cards">
          {listOffilter.map((resCardss) => (
           <Link key={resCardss.info.id}  to={"restro/"+resCardss.info.id}> <RestroCards key={resCardss.info.id} restroName={resCardss} /></Link>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Bodycomponent;
