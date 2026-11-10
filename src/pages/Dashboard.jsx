import { Outlet } from "react-router";
import Header from "../components/Header";
import SearchBar from "../components/SearchBar";
import SideBar from "../components/SideBar";
import { useState } from "react";

const Dashboard = () => {

    const [menuClick, setMenuClick] = useState(false);

    const returnClick = () => {
        setMenuClick(prev => !prev);
    }

    return (
        <div>
            <Header click={returnClick} />
            <div className="dasboard-body">
                {menuClick && <SideBar isOpen={menuClick} />}
                <SearchBar />
                <Outlet />
            </div>
        </div>
    )
}
export default Dashboard;