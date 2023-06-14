// Config driven UI     
import { restrolist } from "../config";
import RestroCard from "./RestroCard";
const Body =()=>{
    return(
        <div className="restro-list">
            {
                restrolist.map((restaurant) =>{
                    return <RestroCard {...restaurant.data} key={restaurant.data.id}/>
                })
            }
        </div>
    )
}

export default Body;