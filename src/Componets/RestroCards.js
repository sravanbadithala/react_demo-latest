import { CARD_IMG_BASE_URL } from "../Utils/contants";
const RestroCards = (props) => {
  const { restroName } = props;
  const { name, avgRating, cloudinaryImageId, cuisines, sla } =
    restroName?.info;

  return (
    <div className="Restocards">
      <img width="98%" src={CARD_IMG_BASE_URL + cloudinaryImageId}></img>
      <h3>
        {name} <span>{avgRating}</span>
      </h3>
      <h4>{cuisines.join(",")}</h4>
      <h4>deliveryTime {sla.deliveryTime} min</h4>
    </div>
  );
};
export default RestroCards;
