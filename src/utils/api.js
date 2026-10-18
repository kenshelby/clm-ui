import axios from "axios";

const clm_api = axios.create({
    baseURL: "http://localhost:3000/api",
    timeout: 5000,
    withCredential: true,
    headers: { "Content-Type": "application/json" }
})

export default clm_api;