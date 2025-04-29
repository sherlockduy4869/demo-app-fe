'use client'
import { useEffect, useState } from "react";

export default function Home() {

  const [userInfor, setUserInfor] = useState([]);
  useEffect(()=>{
    const getData = async () =>{
      const query = await fetch('http://localhost:3001/api/v1/user');
      const response = await query.json();
      setUserInfor(response.data);
    }
    getData();
  },[])

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <p>
        Hello

         {
          userInfor.map((user:any)=>{
            return (
              <>
                <br />
                {user.name}
              </>
            )
          })
         }
      </p>
    </div>
  );
}
