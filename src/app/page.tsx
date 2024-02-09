'use client'
import { useState } from "react";
import { userInfo } from "../interfaces/interfaces";
import InputSearch from "../components/inputSearch";
import UserInformation from "../components/userInfo";

export default function Home() {

  const [user, setUser] = useState<userInfo | null>(null)


  function setUserData(user: userInfo | null): void {
    setUser(user);
  }

  return (
    <div className="flex flex-col min-h-screen justify-center items-center">
      {/* input */}
      <InputSearch setUser={setUserData}/>
      
      {/* user Info */}
      {user && <UserInformation user={user}/>}
    </div>
  );
}
