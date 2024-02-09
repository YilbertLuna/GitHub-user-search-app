import { userInfo } from "../../interfaces/interfaces"
import Image from "next/image"
import { FaLocationDot, FaLink, FaSquareTwitter, FaBuilding  } from "react-icons/fa6";
import { dateCreated } from "../../utils/date";

type props = {
    user: userInfo | null
}

export default function UserInformation({user}: props): JSX.Element {
    
    return(
        <div className="mt-8 w-80 p-4 bg-white dark:bg-darkUser dark:text-white shadow-inputShadow rounded-lg space-y-3 md:space-y-3 md:w-3/4 desktop:max-w-2xl">
            {/* photo, name, username and count created */}
            <div className="flex flex-row justify-center items-center space-x-5 mt-2 md:justify-center md:ml-4">
                <div className="flex justify-center items-center">
                    <Image src={user?.avatar_url as string} alt="user image" width={112} height={112} priority={true} className="rounded-full" />
                </div>
                <div className="flex flex-col w-full justify-center items-start desktop:flex-row desktop:justify-between desktop:items-start">
                    <div className="flex flex-col justify-center items-start desktop:items-start ">
                        <h1 className="text-xl font-bold ">{user?.name}</h1>
                        <a href={user?.html_url} className="text-button">@{user?.login}</a>
                    </div>
                    <p>{dateCreated(user?.created_at)}</p>
                </div>
            </div>

            {/* bio */}
            <div className="flex justify-center items-center md:ml-4 desktop:max-w-md desktop:ml-32">
                <p>{user?.bio}</p>
            </div>

            {/* repos, followers and followings */}
            <div className=" flex flex-row justify-between items-center p-3 rounded-lg bg-lightInfoUser dark:bg-darkUserInfo md:max-w-lg md:ml-4 md:justify-center md:gap-36 desktop:max-w-md desktop:ml-32 desktop:gap-28">
                <p className="flex flex-col text-center md:text-start">
                    <span>Repos</span>
                    <span>{user?.public_repos}</span>
                </p>
                <p className="flex flex-col text-center md:text-start">
                    <span>Followers</span>
                    <span>{user?.followers}</span>
                </p>
                <p className="flex flex-col text-center md:text-start">
                    <span>Following</span>
                    <span>{user?.following}</span>
                </p>
            </div>

            {/* informarion user */}
            <div className="flex flex-col justify-start items-start space-y-3 md:grid md:grid-cols-2 md:justify-center md:items-center desktop:ml-28">
                <p className="flex flex-row md:justify-start md:items-center md:ml-4">
                    <span className={`${user?.location ? '' : 'text-gray-400'} flex flex-row justify-center items-center text-center gap-6`}><FaLocationDot />{user?.location ? user?.location : 'Not Available'}</span>
                </p>

                <p className="flex flex-row md:justify-start md:items-center md:ml-4">
                    <a href={user?.blog} className={`${user?.blog ? '' : 'text-gray-400'} flex flex-row justify-center items-center text-center gap-6`}><FaLink/>{user?.blog ? user?.blog : 'Not Available'}</a>
                </p>

                <p className="flex flex-row md:justify-start md:items-center md:ml-4">
                    <span className={`${user?.twitter_username ? '' : 'text-gray-400'} flex flex-row justify-center items-center text-center gap-6`}><FaSquareTwitter/>{user?.twitter_username ? user?.twitter_username : 'Not Available'}</span>
                </p>

                <p className="flex flex-row md:justify-start md:items-center md:ml-4">
                    <span className={`${user?.company ? '' : 'text-gray-400'} flex flex-row justify-center items-center text-center gap-6`}><FaBuilding />{user?.company ? user?.company : 'Not Available'}</span>
                </p>
            </div>

        </div>
    )
}