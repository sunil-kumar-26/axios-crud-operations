import axios from "axios";
/*creating axios instances  */

const api=axios.create({
    baseURL:"https://jsonplaceholder.typicode.com",
    timeout:2000,
    headers:{"x-custom-header":"foobar"},
});


api.interceptors.request.use((config)=>{  

    if(config.timeout===2000)
    {
    // const time=config.timeout+3000;
    return {...config,timeout:config.timeout+2000,headers:config.headers} 
    }
    else
    {
        return config;
    }
},
(error)=>{
    return Promise.reject(error)
});

//------------------------------------------------------------------------------------------

api.interceptors.response.use((response)=>{
    return {data:response.data,status:response.status};
    // return response;
},
(error)=>{
    return Promise.reject(error)
});






export default api;


// const getPost=()=>{
// return api.get("/posts");
// }1