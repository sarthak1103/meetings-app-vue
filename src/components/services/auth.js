import axios from 'axios'

export const login= async ()=>{
    const response= await axios.post(
        `https://mymeetingsapp.herokuapp.com/api/auth/login`,
        
        );
        console.log(response.data)
        return response.data
};
