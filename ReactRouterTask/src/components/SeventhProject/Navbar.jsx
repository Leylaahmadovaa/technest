import { NavLink } from "react-router-dom";

export default function Navbar(){

    return (
        <>
        
    <div className="bg-gray-300 flex justify-around items-center h-9 font-bold text-xs px-14">
        <h1>Categories</h1>
        <div className="flex gap-12 items-center w-[600px]">
        <NavLink to="/" style={({isActive})=>({textDecoration:isActive?"underline":undefined})}>Home</NavLink>
        <NavLink to="/product" style={({isActive})=>({textDecoration:isActive?"underline":undefined})}>Products</NavLink>
        <p>Pages</p>
        <p>Blogs</p>
        </div>
        <div className="flex justify-around items-center gap-6">
            <p>Sell on MarketKit</p>
            <p>Tract your order</p>
            <p>US Dollar</p>
            <p className="flex">
                <img src="https://upload.wikimedia.org/wikipedia/en/a/ae/Flag_of_the_United_Kingdom.svg" className="w-8 pr-2" alt="flag" />
                English
            </p>
        </div>
    </div>
    
    <div className="bg-blue-500 h-[70px] flex items-center justify-around">
        <h1 className="text-2xl font-extrabold">Market<span className="inline-block text-white font-thin font-titleone">Kit</span></h1>
        <div className="flex w-[70%]">
        <div className="flex">
            <input type="text" className="h-8 w-[700px] pl-3 rounded-sm" placeholder="Search for items..." />
            <button className="bg-black text-white w-20 h-8 text-xs rounded-sm">Search</button>
        </div>
        <div className="flex justify-around w-[250px] text-white items-center ml-3">
        <i className="fa-solid fa-city"></i>
        <i className="fa-regular fa-heart"></i>
        <i className="fa-solid fa-bag-shopping"></i>
        <div className="flex items-center">
        <i className="fa-regular fa-user"></i><span className="text-black inline-block ml-3 text-xs">Login/Register</span>
        </div>
        </div>
        </div>
    </div>
        </>)
}
