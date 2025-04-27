import axios from "axios";

const api=axios.create({
baseURL:"https://jsonplaceholder.typicode.com",
headers:{
         'X-Custom-Header':'foobar',
         "Content-Type":"applicatio/json",
        },
timeout:2000,
});

export default api;