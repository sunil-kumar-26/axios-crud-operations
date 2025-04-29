import { useEffect, useState,lazy,Suspense } from 'react';
import api from './api/AxiosInstance.jsx';
// import GetPost from './components/GetPost';
import PostApi from './components/PostApi.jsx';
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
const GetPost=lazy(()=>import('./components/GetPost'));

function App() {
return( //bg-linear-to-r from-cyan-500 to-blue-500
  <>  
  <div className='max-w-[1440px]  mx-auto h-auto '>  
    
    <div className="  mx-auto ">
    <ul className=' flex flex-wrap gap-[40px] py-[5px] hover:cursor-pointer mobile:justify-center pr-[0px] md:pr-[50px]  text-[#000] sm:justify-end font-medium text-[18px] text-center bg-[#213448]'>
    <li className='order-0 border-[1px] border-[black] bg-[white] rounded-[2px]  hover:underline w-[60px] md:w-[80px]'>Home</li>
    <li className='order-1 border-[1px] border-[black] bg-[white] rounded-[2px] hover:underline w-[60px] md:w-[80px]'>About</li>
    <li className='order-2 border-[1px] border-[black] bg-[white] rounded-[2px] hover:underline w-[60px] md:w-[80px]'>More</li>
    </ul>
    </div>
    <div className=" m-[4px] bg-white  mt-[0px] rounded-[3px]">
    <div className="grid md:grid-cols-2 mobile:grid-cols-2 lg:grid-cols-3  mx-auto">
      <Suspense fallback={<Skeleton count={1} duration={0.5} width={1740} height={'100vh'} baseColor='#444' highlightColor='#202020'/>}>
      <GetPost/>
    </Suspense>
    </div>
    </div>

  </div>
  </>
)
}

export default App;






// useEffect( ()=>{
//   api.get("/posts").then((resData)=>{    
//    console.log(resData)       // now resData is a object containing {data:[{}],status:200} kiyu ki we changed the response through response interceptor  
//   }).catch((error)=>{
//    if(error.message)
//    console.log("Error Due TO This:",error.message)
//  else
//   console.log('Error Due To This:',error.res.ok)
//   })
 
// },[])

// return (
//  <>
//  <h1>hello </h1>
//  </>
// )