import { useState } from "react";
import AddCustomer from "../components/AddCustomer";

const Live = () => {

    const [addClicked, setAddClicked] = useState(false);

    const handleAddCustomer = () => {
        setAddClicked(true);
    }
    return (
        <div className="live-customers-container">
            <div className="customer-body">
                <button className="add live-customer" onClick={handleAddCustomer}>Add Live</button>
                {addClicked && <AddCustomer close={setAddClicked} />}
            </div>
        </div>
    )
}

export default Live;