import { useSelector } from "react-redux";
import { CircleUserRound } from 'lucide-react';
import { hamburger_icon } from "../utils/constants";

const Header = ({ click }) => {

    const user = useSelector(state => state.user);
    return (
        <div className="header">
            <div className="menu-icon-container" onClick={() => click()}>
                <img className="menu-icon" src={hamburger_icon} alt="menu-icon"></img>
            </div>
            <h2 className="header-message">Welcome</h2>
            <div className="user-profile">
                <span className="user-profile-icon"><CircleUserRound
                    strokeWidth={1}
                    nonScalingStroke={true} /></span>
                <span className="user-profile-text">{user?.name}</span>
            </div>
        </div>
    )
}

export default Header;