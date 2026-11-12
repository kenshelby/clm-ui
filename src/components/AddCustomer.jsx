import { useRef } from "react";
import clm_api from "../utils/api"

const AddCustomer = ({ close }) => {

    const name = useRef(null);
    const uid = useRef(null);
    const address = useRef(null);
    const url = useRef(null);
    const logo = useRef(null);

    const handleAddNewLive = async (e) => {
        e.preventDefault();
        const payload = {
            name: name.current.value,
            uid: uid.current.value,
            address: address.current.value,
            logo: logo.current.value
        }

        try {

            const res = await clm_api.post("/live/addnewlive", payload);
            alert(res.data.message);
            close(false);

        } catch (error) {

            alert(error.response?.data?.message || "something went wrong");

        }
    };


    return (
        <div className="add-customer-container">
            <button type="button" className="btn-close" aria-label="Close" onClick={() => close(false)} >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24" height="24" viewBox="0 0 24 24"
                    fill="none" stroke="currentColor"
                    stroke-width="2" stroke-linecap="round"
                    stroke-linejoin="round"
                    class="lucide lucide-x preview-icon"><path d="M18 6 6 18" /><path d="m6 6 12 12" />
                </svg>
            </button>
            <form className="add-customer-form" onSubmit={handleAddNewLive} >

                <label htmlFor="name" >Name:</label>
                <input ref={name} type="text" id="name" />

                <label htmlFor="uid" >uid:</label>
                <input ref={uid} type="text" id="uid" />

                <label htmlFor="name" >Address:</label>
                <input ref={address} type="text" id="address" />

                <label htmlFor="url" >url:</label>
                <input ref={url} type="url" id="url" />

                <label htmlFor="logo" >logo:</label>
                <input ref={logo} type="text" id="logo" />

                <button className="add-customer-submit" onClick={handleAddNewLive} >submit</button>
            </form>
        </div >
    )
}

export default AddCustomer;