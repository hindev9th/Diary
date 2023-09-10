import axios from "axios";

const apiRequest = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
    headers: {
        "Authorization": `Bearer ${localStorage.getItem('user')}`,
        "Content-Type": "application/json",
        Accept: "application/json",
    }
})

export default apiRequest;