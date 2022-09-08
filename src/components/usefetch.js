import { useEffect, useState } from "react";


const Usefetch = (request) => {

   const [data, setdata] = useState(null);    
   const [pending, setpending] = useState(true);
   const [error, seterror] = useState(null);  

   useEffect(()=>{

    setTimeout(()=>{

        fetch(request)
        .then((response)=>{ 
            if (response.ok === false) 
            {
                throw Error ("Data Not Foud !!");
            }
            return response.json() })
        .then((recievedData)=>{ setdata(recievedData.data); setpending(false)})
        .catch((error)=>{ seterror(error.message); setpending(false)})

    },1000)


   },[])

   return { data , pending, error };


    
}
 
export default Usefetch;