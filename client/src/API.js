import axios from "axios";
export const baseURL = axios.create({
    baseURL: "http://localhost:4000/api"
});