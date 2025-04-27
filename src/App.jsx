import { useEffect, useState } from 'react';
import api from './api/PostApi.jsx';

function App() {
  useEffect( ()=>{
     api.get("/posts").then((resData)=>{    
      console.log(resData)       // now resData is a object containing {data:[{}],status:200} kiyu ki we changed the response through response interceptor  
     }).catch((error)=>{
      if(error.message)
      console.log("Error Due TO This:",error.message)
    else
     console.log('Error Due To This:',error.res.ok)
     })
    
  },[])

  return (
    <>
    <h1>hello </h1>
    </>
  )
}

export default App;
