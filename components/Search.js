'use client'

import { useVideoContext } from "@/context/VideoContext";
import {  useState } from "react"
import CircularProgress from '@mui/joy/CircularProgress';
import toast from "react-hot-toast";


const Search = () => {
    const [search,setSearch] = useState('');

    const {setResult,setLoading,loading} = useVideoContext();

    async function handleSearch(){
      setLoading(true)
        try {
            const response = await fetch('/api', {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify({videoLink : search} ),
            });
    
            if(response.ok){
                const data = await response.json();
                setResult(data);
            }else{
                const errorData = await response.json();
                console.log(errorData.error);
            }
        } catch (error) {
            console.log("error while fetching video " + error);
            toast.error("Invalid URL")
        }finally{
            setSearch("")
            setLoading(false);
        }

        console.log(search);

        
    }

  return (
    <div className='flex gap-6 items-center justify-center m-10 flex-wrap'>
      <input
       placeholder='Paste Video URL Here' 
       value={search} 
       onChange={(e)=>setSearch(e.target.value)} 
       className='  sm:w-[450px] border-none h-12 px-5 rounded-3xl' 
       type="text" />
       {
        loading ? (
          <button  className=' flex justify-center items-center gap-3 bg-blue-700 hover:bg-blue-600   h-12  min-w-min p-2 px-5 font-bold text-xl text-white rounded-3xl w-[140px]'><CircularProgress size="sm" determinate={false}  variant="solid"/></button>
          
          ):(
            
            <button onClick={handleSearch} disabled={search.length>0 ? false : true} className=' flex justify-center items-center gap-3 bg-blue-700 hover:bg-blue-600   h-12  min-w-min p-2 px-5 font-bold text-xl text-white rounded-3xl w-[140px]'>Download</button>
        )
       }
    </div>
  )
}

export default Search
