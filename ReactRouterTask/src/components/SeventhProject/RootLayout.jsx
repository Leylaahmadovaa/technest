import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

export default function RootLayout(){
    return <div>
        <Navbar></Navbar>
        <Outlet></Outlet>
    </div>
}
