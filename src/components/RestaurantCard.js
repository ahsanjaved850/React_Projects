import { IMG_CDN_URL } from "../../utils/constants"

const RestaurantCard = (props) => {
    const {resData} = props

    const {cloudinaryImageId, name, avgRating, cuisines, costForTwo, sla} = resData?.info
    return (
        <div className="w-[200px] h-[400px] p-2 rounded-2xl m-2 bg-gray-100 hover:bg-gray-200" >
            <img className="rounded-2xl" alt="res-logo" src={IMG_CDN_URL+cloudinaryImageId}></img>
            <h4 >{name}</h4>
            <h4 >{cuisines.join(", ")}</h4>
            <h4 >{avgRating} stars</h4>
            <h4 >{sla?.slaString}</h4>
            <h4 >{costForTwo} </h4>
        </div>
    )
}

export default RestaurantCard;