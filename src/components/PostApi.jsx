import React, { useState } from "react";
import api from "../api/AxiosInstance";
import GetPost from "./GetPost";

function PostApi({body,setBody}){
   const[addData,setAddData]=useState({
    title:'',
    body:'',
   });

 const onHandleData=(evt)=>{
    let name=evt.target.name;
    let value=evt.target.value;
    setAddData((previous)=>{
        return {...previous,[name]:value}
    })
}

const post_data_func=async (addData,body,setBody)=>{
    try{
        console.log('ye gaya tha',addData)
   const response=await api.post('/posts',addData);
   console.log('ye aya hai',response);
   if(response.status==201){
    setBody([...body,response.data]);
   }
    }
    
    catch(error){
        if(error){
            console.log('log errorr:::',error)
        }
    }
}

function onHandleSubmit(formEvent){
 formEvent.preventDefault()
 post_data_func(addData,body,setBody);
}

 
    return(
        <>
        <form onSubmit={onHandleSubmit} className="flex flex-wrap justify-between lg:max-w-[700px] mobile:w-[350px] border-[1px]  bg-[#213448] mx-auto gap-[10px] h-auto items-center px-[20px] py-[10px] rounded-[5px]">
        <input type="text" autoComplete="off" className="bg-green-400 border-[1px] w-[200px] pl-[10px]  h-[40px] font-[500]"
         placeholder="add title" name='title' value={addData.title} onChange={(evt)=>onHandleData(evt)}/>
        <input type="text" autoComplete="off" className="bg-blue-400 border-[1px] w-[200px] h-[40px] pl-[10px] font-[500]" placeholder="add body" 
        name='body' value={addData.body} onChange={(evt)=>onHandleData(evt)}/>
        <button className="bg-purple-600 text-black font-[500] border-[1px] h-[40px] flex-wrap w-[60px] cursor-pointer">Add</button>
        </form>
        </>
    )
}





export default PostApi ;