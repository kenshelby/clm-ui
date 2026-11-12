import { useState, useEffect } from "react";
import clm_api from "../utils/api";
import AddCustomer from "../components/AddCustomer";

const Live = () => {

    const [addClicked, setAddClicked] = useState(false);
    const [liveData, setLiveData] = useState([]);

    useEffect(() => {

        async function getAllLive() {
            const resLive = await clm_api.get('/live/getlive')
            console.log(resLive);
            setLiveData(resLive.data.data);
        }
        getAllLive();

    }, []);

    const handleAddCustomer = () => {
        setAddClicked(prev => !prev);
    }
    return (
        <div className="live-customers-container">
            <div className="customer-body">
                <button className="live-customer-button" onClick={handleAddCustomer} >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24" height="24"
                        viewBox="0 0 24 24" fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        class="lucide lucide-plus preview-icon"><path d="M5 12h14" /><path d="M12 5v14" />
                    </svg>
                </button>
                {addClicked && <AddCustomer close={setAddClicked} />}
                {liveData && liveData.map((live) =>
                    <li key={live._id}>{live.name}</li> //use return if curly braces
                )}
            </div>
        </div>
    )
}

export default Live;