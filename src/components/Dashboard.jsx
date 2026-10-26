import Header from "./Header";
import SearchBar from "./SearchBar";
import SideBar from "./SideBar";
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
            </div>
        </div>
    )
}
export default Dashboard;