import { useContext } from "react";
import { IMG_CDN_URL } from "../../utils/constants";
import UserContext from "../../utils/UserContext";

const RestaurantCard = (props) => {
    const {resData} = props

    const { loggedInUser } = useContext(UserContext)

    const {cloudinaryImageId, name, avgRating, cuisines, costForTwo, sla} = resData?.info
    return (
        <div className="w-[200px] h-[450px] p-2 rounded-2xl m-2 bg-gray-100 hover:bg-gray-200" >
            <img className="rounded-2xl" alt="res-logo" src={IMG_CDN_URL+cloudinaryImageId}></img>
            <h4 className="mt-1 text-lg font-semibold">{name}</h4>
            <h4 className="text-sm font-semibold">{cuisines.join(", ")}</h4>
            <h4 >{avgRating} stars</h4>
            <h4 >{sla?.slaString}</h4>
            <h4 >{costForTwo} </h4>
            <h4 >User: {loggedInUser} </h4>
        </div>
    )
}

// Higher order components

// input - Restaurant card ==> Restaurant card Promoted

export const WithPromotedLabel = (RestaurantCard) => {
    return (props) => {
        return (
            <div>
                <label>Promoted</label>
                <RestaurantCard {...props}></RestaurantCard>
            </div>
        )
    }
}

export default RestaurantCard;