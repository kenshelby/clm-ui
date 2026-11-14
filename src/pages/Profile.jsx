import { useSelector } from "react-redux";

const Profile = () => {

    const loggedInUser = useSelector(state => state.user);
    return (
        <div className="profile-container" >
            <h2>Profile</h2>
            <div>
                <p>Name: {loggedInUser.name}</p>
                <p>Role: {loggedInUser.role}</p>
            </div>
        </div>
    )
}

export default Profile; //admin, dev, manager, teamlead