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
    const [theme, setTheme] = useState<string>('light');


    //funtion to handle button theme
    const toggleTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);
        localStorage.setItem('theme', newTheme);
    }

    useEffect(() => {
        const localTheme = localStorage.getItem('theme')
        if(localTheme) setTheme(localTheme);
    }, [])

    useEffect(() => {
        document.querySelector('html')?.classList.remove('light', 'dark')
        document.querySelector('html')?.classList.add(theme)
    }, [theme])


    // function to change input
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
        <div className="flex flex-col justify-center items-center md:w-3/4 desktop:max-w-2xl">
            <div className="flex flex-row justify-between w-full dark:text-white">
                <h1>DEVFINDER</h1>
                <p className="flex flex-row justify-center items-center gap-1">
                    <span onClick={toggleTheme} className={`${theme === 'light' ? '' : 'hidden'} flex flex-row items-center`}>
                        dark
                        <MdDarkMode  className="text-xl text-gray-500"/>
                    </span>
                    <span onClick={toggleTheme} className={`${theme === 'light' ? 'hidden' : ''} flex flex-row items-center`}>
                        light
                        <MdLightMode className="text-xl text-gray-500"/>
                    </span>
                </p>
            </div>
            <div className="flex justify-center items-center mt-5 w-80 p-5 bg-white shadow-inputShadow rounded-lg dark:bg-darkUser md:w-full">
                <form onSubmit={e => {
                    e.preventDefault()
                    submitInputValue()
                }} className="flex flex-row justify-center items-center gap-9 md:gap-11 desktop:gap-40">
                    <div className="flex flex-row justify-center items-center gap-3">
                        <CiSearch className="text-3xl dark:text-button"/>
                    
                        <input ref={userNameRef} type="text" name="username" id="username" placeholder="search github username..." className="placeholder-black w-36 dark:placeholder-white dark:text-white focus:outline-none text-sm bg-white dark:bg-darkUser md:w-96 md:text-lg"/>
                    </div>

                    {empiti && <p className="text-red-500 text-xs">Enter User</p>}
                    {notfound && <p className="text-red-500 text-xs">Not Fount</p>}

                    <button type="submit" className="bg-button text-white p-2 rounded-lg">search</button>
                </form>
            </div>
      </div>
    )
}