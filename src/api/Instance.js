import axios from "axios";

export const instance = axios.create({
    baseURL: 'https://fakestoreapi.com',
    // timeout: 800,
    // headers:{
    //     Accept: 'application/json',
    // }
})