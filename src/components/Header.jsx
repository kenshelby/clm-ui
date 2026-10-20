import { useSelector } from "react-redux";

const Header = () => {

    const user = useSelector(state => state.user);
    return (
        <div className="header">
            <img className="header-logo" src="imglogo.png"></img>
            <h2 className="header-message">Welcome</h2>
            <div className="user-profile">{user?.name}</div>
        </div>
    )
}

export default Header;