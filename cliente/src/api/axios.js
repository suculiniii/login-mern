import axios from "axios";

const instace = axios.create({
    baseURL: 'http://localhost:5005/api',
    withCredentials: true
})
export default instace