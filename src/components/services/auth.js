import axios from 'axios'


export const signUp= async (data)=>{

     const result=await axios.post(
        `https://mymeetingsapp.herokuapp.com/api/auth/register`,
        data,{
            headers:{
                'content-type': 'application/json'
            }
        }

     )
     return result.data;
};
export const login = async (credentials ) => {
    // var data = JSON.stringify({
    // "email": "19mci1107@example.com",
    // "password": "Sarthak@1103"
    // });
    const response= await axios.post(
                `https://mymeetingsapp.herokuapp.com/api/auth/login`,
                credentials,
                {
                    headers: {
                        'Content-Type': 'application/json'
                    }
                }
            )
            return response.data;
                
};


