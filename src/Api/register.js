import axios from "axios";
import {BACKEND_URL} from "../constants"

export default async function register(registerData){
    try{
        const response =await axios.post(`${BACKEND_URL}/api/auth/register`, registerData);
        return {result:true,data:response.data} 
    }catch(e){
        console.log(e.response);
        return {result:false,error:e.response.data.message[0]};
    }
}
