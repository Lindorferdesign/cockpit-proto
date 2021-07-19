import Divider from "../components/Divider.js"

function UserCard() {
    return (
        <div className="user-card bg-white p-6 sticky top-10">
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
    )
}

export default UserCard
