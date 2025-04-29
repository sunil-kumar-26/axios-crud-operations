import React, { useEffect } from "react";
import api from "../api/AxiosInstance";

function DeleteApi( deleted,body,setBody){
    console.log("here",deleted,"your item",body)
        const Delete_fun=async (deleted,body,setBody)=>{
            try{
            const res=await api.delete(`/posts/${deleted}`)
            if(res.status===200){
            console.log('ss',res,body); 

            const new_data=body.filter((currendIndex)=>{                
                return currendIndex.id!==deleted;
            }) 
            setBody(new_data) ;
            console.log(new_data)
        }
       
                
            }catch(error){
                console.log("errrror",error.message)
                console.log("whole Error idhar hai ",error)
            }; 
                                           /* /posts/1   */
        }
        
        
        
        
        
       Delete_fun(deleted,body,setBody)
        // return(
        //     <>
        //     <button className="active:bg-[#213448] active:text-white  border-[1px] mobile:w-[80px]  bg-[#213448] rounded-[4px] text-white cursor-pointer  hover:bg-green-300 active:border-none mobile:active:bg-green-400 mobile:active:text-black hover:text-[black] ">delete</button>
        //     </>
        // )
}


export default  DeleteApi;