// Config driven UI     
import { useState } from "react";
import { restrolist } from "../config";
import RestroCard from "./RestroCard";

function filterData(searchText,restaurants){
    const filterData = restaurants.filter((restaurant)=> restaurant.data.name.includes(searchText));
    return filterData;
}

const Body =()=>{
    // let searchTxt = "KFC"

    const [searchText,setSearchText] = useState("KFC"); // to create state variable.
    const[restaurants,setRestaurants] = useState(restrolist);

    return(
        <>
        <div className="search-container">
        <input type="text" className="search-input" placeholder="Search" value={searchText} 
        onChange={(e)=>{setSearchText(e.target.value);}}/>
        {/* <h1>{searchClicked}</h1> */}
        <button className="search-btn" 
        onClick={
        ()=>{
            // need to filter data
            const data = filterData(searchText,restaurants);
            // update the state - restrolist
            setRestaurants(data);
        }}>Search</button>
        </div>
        <div className="restro-list">
            {
                restaurants.map((restaurant) =>{
                    return <RestroCard {...restaurant.data} key={restaurant.data.id}/>
                })
            }
        </div>
        </>
    )
}

export default Body;