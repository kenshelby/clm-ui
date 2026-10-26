import { useSelector } from "react-redux";
import { hamburger_icon } from "../utils/constants";

const Header = ({ click }) => {

    const user = useSelector(state => state.user);
    return (
        <div className="header">
            <div className="menu-icon-container" onClick={() => click()}>
                <img className="menu-icon" src={hamburger_icon} alt="menu-icon"></img>
            </div>
            <h2 className="header-message">Welcome</h2>
            <div className="user-profile">{user?.name}</div>
        </div>
    )
}

export default Header;