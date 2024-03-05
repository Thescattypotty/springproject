import axios from "axios";

const Rest_API_BASE_URL = "http://localhost:8080/api/employee";


export const listEmployee = () => {
    return axios.get(Rest_API_BASE_URL);
}

