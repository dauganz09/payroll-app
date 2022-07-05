import axios from 'axios';


export default axios.create({
    baseURL: 'http://192.168.1.21/covaxsys/api/',
    headers: {
        'Content-Type': 'application/json',
    },


});