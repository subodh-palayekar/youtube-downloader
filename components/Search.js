'use client'

import { VideoContext } from "@/context/VideoContext";
import { useContext, useState } from "react"

const Search = () => {
    const [search,setSearch] = useState('');
    // const [result,setResult]=useState([]);

    const {result ,setResult} = useContext(VideoContext);

    async function handleSearch(){

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
                console.log(result);
            }else{
                const errorData = await response.json();
                console.log(errorData.error);
            }
        } catch (error) {
            console.log("error while fetching video " + error);
        }finally{
            setSearch("")
        }

        console.log(search);

        
    }

  return (
    <div className='flex gap-6 items-center justify-center m-10'>
      <input
       placeholder='Paste Video URL Here' 
       value={search} 
       onChange={(e)=>setSearch(e.target.value)} 
       className='w-[450px] border-none h-12 px-5 rounded-3xl' 
       type="text" />
      <button onClick={handleSearch} className='bg-blue-700 hover:bg-blue-600   h-12  min-w-min p-2 px-5 font-bold text-xl text-white rounded-3xl'>Download</button>
    </div>
  )
}

export default Search
