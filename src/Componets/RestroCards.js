import { CARD_IMG_BASE_URL } from "../Utils/contants";
const RestroCards = (props) => {
  const { restroName } = props;
  const { name, avgRating, cloudinaryImageId, cuisines, sla } =
    restroName?.info;

  return (
   
    <div className="p-1 w-96 gap-3 h-150 border-0 rounded-lg  bg-fuchsia-50 hover:border hover:border-b-amber-50 cursor-pointer">
      <img className ="w-96 rounded-lg" src={CARD_IMG_BASE_URL + cloudinaryImageId}></img>
      <h3 className="font-bold py-3">
        {name} <span>{avgRating}</span>
      </h3>
      <h4>{cuisines.join(",")}</h4>
      <h4>deliveryTime {sla.deliveryTime} min</h4>
    </div>
    

  );
};
export default RestroCards;
