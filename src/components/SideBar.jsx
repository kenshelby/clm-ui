const SideBar = ({ isOpen }) => {
    return (
        <div className={`sidebar-container ${isOpen ? "open" : ""}`}>
            <ul className="sidebar-list">
                <li className="list-items">Live</li>
                <li className="list-items">Tenants</li>
                <li className="list-items">Competitor</li>
                <li className="list-items">WebExtarctor</li>
                <li className="list-items">APIExtarctor</li>
            </ul>
        </div>
    )
}

export default SideBar;