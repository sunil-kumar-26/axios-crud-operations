import React, { useEffect, useState } from "react";
import DeleteApi from './DeleteApi.jsx';
import api from "../api/AxiosInstance.jsx";
import PostApi from "./PostApi.jsx";
function GetPost(){
  const[body,setBody]=useState([])
    const getAPI= async (api)=>{
     try{
         const api_received= await api.get("/posts")
        //  console.log(api_received);  
         setBody(api_received.data||[])
     }
     catch(error){
      console.log(error.message)
     }
    }

useEffect(()=>{
    getAPI(api);
},[]);
    if(!body.length){
    return(
      <h4>Loading...</h4>  
    )
    }
  

    // const DeleteSpecificData=(idx,body)=>{
    //   console.log("hello",idx);
    //   DeleteApi(idx,body);
    //   }
    //   DeleteApi()
//.........
//.................................................
  console.log("data fetched",body)

    return(
        <>
        
           <div className="bg-purple-200  text-center my-[20px] p-[50px] pl-[20px] ">
           <PostApi body={body} setBody={setBody}/>
           </div>

        {body.map((item,idx)=>{
          return(
        <div key={idx} className="mx-auto bg-[#E5E5E5] rounded-[10px] m-[10px]  ">
          <div className="border-[1px] sm:w-[300px] w-[175px] h-[110px] mobile:h-[220px]   lg:w-[320px] led:w-[350px] sm:h-[240px]  rounded-[3px] ">
          <div className="">
          <h2 className="font-arial underline  font-bold capitalize sm:text-[14px] mobile:text-[10px] p-[10px] border-[0px]">{idx+1}.Title: {item.title}</h2>
         <p className="p-[10px] sm:text-[16px] font-medium mobile:p-[7px] mobile:text-[10px] border-[0px] text-justify ">{item.body}</p>
         </div> 
         <div className="flex justify-center gap-[10px] mx-auto max-w-[250px] my-[1px] p-[2px]">

          <button className="border-[1px] mobile:w-[80px] bg-[#213448] rounded-[4px] text-white cursor-pointer hover:bg-green-300 mobile:active:bg-green-400 mobile:active:text-black active:border-none hover:text-[black]
          active:bg-[#213448] active:text-white ">  update</button>
           <button className="active:bg-[#213448] active:text-white  border-[1px] mobile:w-[80px]  bg-red-500 rounded-[4px] text-white cursor-pointer  hover:bg-green-300 active:border-none mobile:active:bg-green-400 mobile:active:text-black hover:text-[black] 
           " onClick={()=>{DeleteApi(idx,body,setBody)}}>delete</button>

          {/* <DeleteApi del={idx}/>   */}
         </div>
        </div>
         </div>
          )
        })}
      
        
        </>
    )
}
export default GetPost;