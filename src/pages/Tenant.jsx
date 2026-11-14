import { useState, useEffect } from "react";


const Tenant = () => {

    const handleAddCustomer = () => {
        console.log("button clicked")
    }
    return (
        <div className="tenant-container" >
            <button className="add-customer-button" onClick={handleAddCustomer} >
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
            <h1>Tenant page</h1>
        </div>
    )
}

export default Tenant
