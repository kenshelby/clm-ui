import { Link } from "react-router";


const SideBar = ({ isOpen }) => {
    return (
        <div className={`sidebar-container ${isOpen ? "open" : ""}`}>
            <ul className="sidebar-list">
                <Link to="live"><li className="list-items">Live</li></Link>
                <Link to="tenant"><li className="list-items">Tenants</li></Link>
                <Link to="competitor"><li className="list-items">Competitor</li></Link>
                <Link to="webextractor"><li className="list-items">WebExtractor</li></Link>
                <Link to="apiextractor"><li className="list-items">APIExtractor</li></Link>
            </ul>
        </div>
    )
}

export default SideBar;