import { IMG_CDN_URL } from "../config";
const RestroCard = ({name,cuisines,lastMileTravelString,cloudinaryImageId})=>{
    // console.log(props);
    // const  = restaurant.data;
    return(
        <div className="card">
            <img src={IMG_CDN_URL + cloudinaryImageId} alt="BurgerKing"/>
            <h2>{name}</h2>
            <h3>{cuisines.join(", ")}</h3>
            <h4>{lastMileTravelString} minutes</h4>
        </div>
    )
}

export default RestroCard;