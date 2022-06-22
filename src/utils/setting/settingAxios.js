import axios from "axios"
import { DOMAIN, TOKEN_FIVERR } from "./setting"


export const http = axios.create({
    baseURL:DOMAIN,
    timeout:30000
})
http.interceptors.request.use((config) => { 
    config.headers = {
        ...config.headers,
        'token': TOKEN_FIVERR,
        'tokenByClass': TOKEN_FIVERR ,
        'Content-Type': 'application/json'

    }
    return config
 }, (errors)=>{
     return Promise.reject(errors)
 })

 