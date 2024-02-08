'use client'
import { useState, useEffect, useRef } from "react"
import { CiSearch  } from "react-icons/ci";
import { userInfo } from "../../interfaces/interfaces";
import { MdDarkMode , MdLightMode } from "react-icons/md";

type props = {
    setUser: (user: userInfo | null) => void;
}

export default function InputSearch({setUser}: props): JSX.Element {

    const [notfound, setNotfound] = useState<boolean>(false)
    const [empiti, setEmpiti] = useState<boolean>(false)
    const userNameRef = useRef<HTMLInputElement>(null)
    const [inputValue, setInputValue] = useState<string>('octocat')

    function submitInputValue() {
        if(userNameRef.current?.value.trim() === "" || userNameRef.current?.value === undefined){
          setEmpiti(true)
          setUser(null)
          return
        }
        setEmpiti(false)
        setInputValue(String(userNameRef.current?.value))
    }

    // effect to change the user when the input value is changed

    useEffect(()=> {
        async function getDataUser() {
            const response = await fetch(`https://api.github.com/users/${inputValue}`);
            const data = await response.json();
        
            if (response.status != 200) {
              setNotfound(true);
              setUser(null);
              return;
            }
        
            setNotfound(false);
            setUser(data);
        }
        getDataUser()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[inputValue])
    

    return(
        <div className="flex flex-col justify-center items-center">
            <div className="flex flex-row justify-between w-full mt-32">
                <h1>DEVFINDER</h1>
                <p className="flex flex-row justify-center items-center gap-1">
                    <span>
                    dark
                    </span>
                    <MdDarkMode  className="text-xl text-gray-500"/>
                    {/* <MdLightMode className="text-xl text-gray-500"/> */}
                </p>
            </div>
            <div className="flex justify-center items-center mt-5 w-80 p-5 bg-white shadow-inputShadow rounded-lg">
                <form onSubmit={e => {
                    e.preventDefault()
                    submitInputValue()
                }} className="flex flex-row justify-center items-center gap-2">
                    <CiSearch className="text-3xl"/>
                
                    <input ref={userNameRef} type="text" name="username" id="username" placeholder="search github username..." className="placeholder-black focus:outline-none w-40 bg-white"/>

                    {empiti && <p className="text-red-500 text-xs">Enter User</p>}
                    {notfound && <p className="text-red-500 text-xs">Not Fount</p>}

                    <button type="submit" className="bg-button text-white p-2 rounded-lg">search</button>
                </form>
            </div>
      </div>
    )
}