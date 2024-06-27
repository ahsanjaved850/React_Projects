import { LOGO_URL } from "../../utils/constants";
import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../../utils/useOnlineStatus";
import UserContext from "../../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
    const [btnNameReact, setBtnNameReact] = useState("Login")
    const onlineStatus = useOnlineStatus();

    const { loggedInUser } = useContext(UserContext)

    const cartItem = useSelector((store) => store.cart.items)
    // console.log(loggedInUser)

    // if no dependency array => useEffect is called on every render
    // if dependency array is empty = [] => useEffect is called on initial render(just once)
    // if dependency array is [btnNameReact] => useEffect is called everytime btnNameReact updates
    // useEffect(() => {
    //     console.log('Rendered')
    // }, [btnNameReact])
    return (
        <div className="flex justify-between bg-slate-100 shadow-md mb-2">
            <div>
            <img className="w-40" src={LOGO_URL}></img>
            </div>
            <div className="flex items-center">
                <ul className="flex p-4 m-1">
                    <li className="px-2 font-bold font-large">Online Status: {onlineStatus ? "🟢"  : "🔴" }</li>
                    <li className="px-2 font-bold font-large hover:bg-slate-200"><Link to="/">Home</Link></li>
                    <li className="px-2 font-bold font-large hover:bg-slate-200"><Link to="/grocery">Grocery</Link></li>
                    <li className="px-2 font-bold font-large hover:bg-slate-200"><Link to="/about">About Us</Link></li>
                    <li className="px-2 font-bold font-large hover:bg-slate-200"><Link to="/contact">Contact Us</Link></li>
                    <li className="px-2 font-bold font-large hover:bg-slate-200">Cart ({cartItem.length} items)</li>
                    <button className="px-2 font-bold font-large hover:bg-slate-200" 
                        onClick={() => {
                            btnNameReact === "Login" ? setBtnNameReact("Logout") : setBtnNameReact("Login") 
                        }
                    }
                    >{btnNameReact}</button>
                    <li className="px-2 font-bold font-large">{loggedInUser}</li>
                </ul>
            </div>
        </div>
    )
}

export default Header;