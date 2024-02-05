'use client'
import { useState } from "react";
import { userInfo } from "../interfaces/interfaces";
import InputSearch from "../components/inputSearch";

export default function Home() {

  const [user, setUser] = useState<userInfo | null>(null)


  function setUserData(user: userInfo | null): void {
    setUser(user);
  }

  return (
    <div className="flex flex-col justify-center items-center">
      {/* input */}
      <InputSearch setUser={setUserData}/>
      
      {/* user Info */}
      <div className="mt-20">
        <div className="flex flex-col justify-center items-center">
            <h1 className="text-4xl font-bold ">{user?.name}</h1>
            <p className="">{user?.bio}</p>
        </div>
      </div>

    </div>
  );
}
