import axios from 'axios';
import { successHandler, errorHandler } from './helper';

export const fetchUsers = () => {
    return axios.get( `https://mymeetingsapp.herokuapp.com/api/users` )
                .then( successHandler )
                .catch( errorHandler );
}

