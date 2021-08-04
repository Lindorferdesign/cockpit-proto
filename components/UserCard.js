import Divider from "../components/Divider.js"
import Image from "next/image"

function UserCard() {
    return (
        <>
        <div className="sticky-header  sticky top-20">
        <div className="user-card bg-white p-6">
            <div className="user-info flex flex-row">
            <div className="user-icon w-10 h-10 bg-black rounded-full justify-center align-middle text-white text-center flex font-semibold items-center mr-4">DL</div>
            <div className="user-info-detail">
                <div className="user-info-name font-bold">Daniel Lindorfer</div>
                <div className="user-info-mat text-sm">Mat.-Nr.: 102302</div>
            </div>
            </div>

            <div className="user-studium mt-4">
                <span>066 203</span>
                <span className="font-bold ml-2">Masterstudium Humanmedizin</span>
            </div>
            <Divider></Divider>
            <div className="semesteruebersicht my-4">
                <span className="font-bold text-md mb-2">Semesterübersicht</span>
                <span className="ml-2">SS2021</span>
                <div class="semester-infos flex w-full">
                 <div className="semester-lvas w-full p-4 hover:cursor-pointer hover:bg-gray-100 transition-all duration-300">
                     <div className="">LVAs</div>
                     <div className="text-4xl font-bold">4</div>
                 </div>
                 <div className="semester-lvas w-full p-4">
                 <div className="">ECTS</div>
                    <div className="text-4xl font-bold">12,00</div>
                </div>
                </div>  
                <h2 className="font-bold text-md mt-8">Semesterfortschritt</h2>
                <div className="mb-4">2/40 Wochen</div>
                <div className="progress-bar h-4 w-full bg-jku-background relative">
                    <div className="absoloute left-0 top-0 w-44 bg-jku-light-blue h-full z-2"></div>
                </div>
            </div>
        </div>

        <div className="links p-6 mt-4 bg-white">
        <div className="font-bold text-md mb-2">Links</div>
        <div className="Links flex flex-wrap transition-all duration-300">
        <div className="p-4 hover:bg-gray-50 w-4/12 cursor-pointer">
            <Image src="/Link_1.png" width="74" height="60" objectFit='contain'></Image>
        </div>
        <div className="p-4 hover:bg-gray-50  w-4/12 cursor-pointer transition-all duration-300">
            <Image src="/Link_1.png" width="74" height="60" objectFit='contain'></Image>
        </div>
        <div className="p-4 hover:bg-gray-50  w-4/12 cursor-pointer">
            <Image src="/Link_1.png" width="74" height="60" objectFit='contain'></Image>
        </div>
        <div className="p-4 hover:bg-gray-50  w-4/12 cursor-pointer">
            <Image src="/Link_1.png" width="74" height="60" objectFit='contain'></Image>
        </div>
        <div className="p-4 hover:bg-gray-50  w-4/12 cursor-pointer">
            <Image src="/Link_1.png" width="74" height="60" objectFit='contain'></Image>
        </div>
            <div className="p-4 hover:bg-gray-50  w-4/12 cursor-pointer">
            <Image src="/Link_1.png" width="74" height="60" objectFit='contain'></Image>
        </div>
        </div>
        </div>
        </div>
  </>
    )
}

export default UserCard
