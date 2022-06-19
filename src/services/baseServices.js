import axios from "axios";
import { DOMAIN, TOKEN, TOKEN_FIVERR } from "../utils/setting/setting";



export class baseService {
    
    get = (url) => {
        let urltype = `${DOMAIN}${url}`
        console.log( urltype);
        return axios({
            method: 'GET',
            url: urltype,
            headers: { 
                'tokenByClass': TOKEN_FIVERR
              }
        })
    }
    patch = (url) => {
        let urltype = `${DOMAIN}${url}`
        console.log(urltype);
        console.log('http://fiverr.cybersoft.edu.vn/api/jobs/booking/618d3abc95d99f001c0c0cf7' === urltype);
        return axios({
            method: 'PATCH',
            url: urltype,
            headers: { 
                'token' : TOKEN_FIVERR,
                'tokenByClass': TOKEN_FIVERR
              }
        })
    }
        post = (url, data) => {
            let urltype = `${DOMAIN}${url}`
            // console.log(urltype);
  
        return axios({
            url: urltype,
            method: 'post',
            data: data,
            headers: { 
                'tokenByClass': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCDEkMOgIE7hurVuZyAwNSIsIkhldEhhblN0cmluZyI6IjE1LzEwLzIwMjIiLCJIZXRIYW5UaW1lIjoiMTY2NTc5MjAwMDAwMCIsIm5iZiI6MTYzNDgzNTYwMCwiZXhwIjoxNjY1OTM5NjAwfQ.JnZ2TCDw6qCOkgVFEoDB-LbIivUOb5JgXbCraWktEKQ', 
                'Content-Type': 'application/json'
              },
        })
    }

}