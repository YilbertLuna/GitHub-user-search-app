import { userInfo } from "../../interfaces/interfaces"
import Image from "next/image"
import { FaLocationDot, FaLink, FaSquareTwitter, FaBuilding  } from "react-icons/fa6";

type props = {
    user: userInfo | null
}

export default function UserInformation({user}: props): JSX.Element {
    
    return(
        <div className="mt-11 w-80 p-4 bg-white dark:bg-darkUser dark:text-white shadow-inputShadow rounded-lg space-y-3">
            {/* photo, name, username and count created */}
            <div className="flex flex-row justify-center items-center space-x-5">
                <div className="flex justify-start items-start">
                    <Image src={user?.avatar_url as string} alt="user image" width={112} height={112} className="rounded-full" />
                </div>
                <div className="flex flex-col justify-center items-start">
                    <h1 className="text-xl font-bold ">{user?.name}</h1>
                    <p>@{user?.login}</p>
                    {/* <p>{user?.created_at}</p> */}
                    <p>joined 25 jan 2011</p>
                </div>
            </div>

            {/* bio */}
            <div className="flex justify-center items-center">
                <p>{user?.bio}</p>
            </div>

            {/* repos, followers and followings */}
            <div className=" flex flex-row justify-between items-center p-3 rounded-lg bg-lightInfoUser dark:bg-darkUserInfo">
                <p className="flex flex-col text-center">
                    <span>Repos</span>
                    <span>{user?.public_repos}</span>
                </p>
                <p className="flex flex-col text-center">
                    <span>Followers</span>
                    <span>{user?.followers}</span>
                </p>
                <p className="flex flex-col text-center">
                    <span>Following</span>
                    <span>{user?.following}</span>
                </p>
            </div>

            {/* informarion user */}
            <div className="flex flex-col justify-start items-start space-y-3">
                <p className="flex flex-row ">
                    <span className={`${user?.location ? '' : 'text-gray-400'} flex flex-row justify-center items-center text-center gap-6`}><FaLocationDot />{user?.location ? user?.location : 'Not Available'}</span>
                </p>

                <a href={user?.blog}>
                    <span className={`${user?.blog ? '' : 'text-gray-400'} flex flex-row justify-center items-center text-center gap-6`}><FaLink/>{user?.blog ? user?.blog : 'Not Available'}</span>
                </a>

                <p className="flex flex-row ">
                    <span className={`${user?.twitter_username ? '' : 'text-gray-400'} flex flex-row justify-center items-center text-center gap-6`}><FaSquareTwitter/>{user?.twitter_username ? user?.twitter_username : 'Not Available'}</span>
                </p>

                <p className="flex flex-row ">
                    <span className={`${user?.company ? '' : 'text-gray-400'} flex flex-row justify-center items-center text-center gap-6`}><FaBuilding />{user?.company ? user?.company : 'Not Available'}</span>
                </p>
            </div>

        </div>
    )
}