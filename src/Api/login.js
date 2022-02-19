import axios from "axios";
import {BACKEND_URL} from "../constants";


const login=async (loginData)=>{
    try{
        const response= await axios.post(
            `${BACKEND_URL}/api/auth/login`,
            {
                email: loginData.email,
                password: loginData.password
            }
        )

        return {result:true,data:response.data};
    }catch(e){
        return {result:false,data:e.response.error};
    }
}

export default login;