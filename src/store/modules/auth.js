// import {login} from '../services/auth';


// const KEY_TOKEN='token';
// const KEY_EMAIL='email';
// const KEY_NAME='name';
// const auth={
//     state:{
//         token:localStorage.getItem(KEY_TOKEN)||'',
//         email:localStorage.getItem(KEY_EMAIL)||'',
//         name:localStorage.getItem(KEY_NAME)||''
//     },
//     getters:{
//         isAuthenticated(state){
//             return state.token!==''
//         },
        
//     },
//     mutations:{
//         setToken(state,token){
//             state.token=token; 
//         },
//         setEmail(state,email){
//             state.email=email; 
//         },
//         setName(state,name){
//             state.name=name; 
//         }
//     },
//     actions:{
//        async login({commit},credentials){
          
//                 const data= await login(credentials);
//                 const {authToken,email,name}=data;
//                 localStorage.setItem(KEY_TOKEN,authToken);
//                 localStorage.setItem(KEY_EMAIL,email);
//                 localStorage.setItem(KEY_NAME,name);

//                 commit('setToken',authToken);
//                 commit('setEmail',email);
//                 commit('setName',name);

//                 return email;
                
              
//               }
//         }
//     };
//     export default auth;
