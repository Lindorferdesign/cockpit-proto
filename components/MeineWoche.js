import Day from "../components/Day"
import Appointment from "../components/Appointment"


function MeineWoche() {
    return (
        <div className="meine-woche">
            <div className="woche flex justify-between mb-6 sticky bg-jku-background top-16">
                
   

        <div className="day flex flex-col justify-center align-middle">
            <div className="ring-indicator w-14 h-14 rounded-full border-2  flex justify-center items-center">
              <div className="day-single w-11 h-11 rounded-full bg-black flex items-center justify-center text-white border-jku-light-blue text-xl font-bold relative hover:bg-gray-400 transition-all duration-300 hover:cursor-pointer" >20</div>
            </div>
            <div className="day-title uppercase font-bold text-center mt-1">Heute</div>
            </div>
        
            <div className="day flex flex-col justify-center align-middle">
            <div className="ring-indicator w-14 h-14 rounded-full border-2 border-jku-light-blue 
            flex justify-center items-center">
              <div className="day-single w-11 h-11 rounded-full bg-gray-300 flex items-center justify-center text-black text-xl font-bold relative hover:bg-gray-400 transition-all duration-300 hover:cursor-pointer" >20</div>
            </div>
            <div className="day-title uppercase font-bold text-center mt-1">DI</div>
        </div>

        <div className="day flex flex-col justify-center align-middle">
            <div className="ring-indicator w-14 h-14 rounded-full border-2  border-jku-light-blue  flex justify-center items-center">
              <div className="day-single w-11 h-11 rounded-full bg-gray-300 flex items-center justify-center text-black text-xl font-bold relative hover:bg-gray-400 transition-all duration-300 hover:cursor-pointer" >20</div>
            </div>
            <div className="day-title uppercase font-bold text-center mt-1">MI</div>
        </div>

            <div className="day flex flex-col justify-center align-middle">
            <div className="ring-indicator w-14 h-14 rounded-full border-2  flex justify-center items-center">
              <div className="day-single w-11 h-11 rounded-full bg-gray-300 flex items-center justify-center text-black text-xl font-bold relative hover:bg-gray-400 transition-all duration-300 hover:cursor-pointer" >20</div>
            </div>
            <div className="day-title uppercase font-bold text-center mt-1">DO</div>
            </div>


            <div className="day flex flex-col justify-center align-middle">
            <div className="ring-indicator w-14 h-14 rounded-full border-2  flex justify-center items-center">
              <div className="day-single w-11 h-11 rounded-full bg-gray-300 flex items-center justify-center text-black text-xl font-bold relative hover:bg-gray-400 transition-all duration-300 hover:cursor-pointer" >20</div>
            </div>
            <div className="day-title uppercase font-bold text-center mt-1">FR</div>
            </div>

            <div className="day flex flex-col justify-center align-middle">
            <div className="ring-indicator w-14 h-14 rounded-full border-2  flex justify-center items-center">
              <div className="day-single w-11 h-11 rounded-full bg-gray-300 flex items-center justify-center text-black text-xl font-bold relative hover:bg-gray-400 transition-all duration-300 hover:cursor-pointer" >20</div>
            </div>
            <div className="day-title uppercase font-bold text-center mt-1">SA</div>
            </div>

            <div className="day flex flex-col justify-center align-middle">
            <div className="ring-indicator w-14 h-14 rounded-full border-2  flex justify-center items-center">
              <div className="day-single w-11 h-11 rounded-full bg-gray-300 flex items-center justify-center text-black text-xl font-bold relative hover:bg-gray-400 transition-all duration-300 hover:cursor-pointer" >20</div>
            </div>
            <div className="day-title uppercase font-bold text-center mt-1">Mo</div>
            </div>

            <div className="day flex flex-col justify-center align-middle">
            <div className="ring-indicator w-14 h-14 rounded-full border-2  flex justify-center items-center">
              <div className="day-single w-11 h-11 rounded-full bg-gray-300 flex items-center justify-center text-black text-xl font-bold relative hover:bg-gray-400 transition-all duration-300 hover:cursor-pointer" >RE</div>
            </div>
            <div className="day-title uppercase font-bold text-center mt-1">-</div>
            </div>


            </div>

            <div className="day-heading mb-4 font-bold text-lg">Montag, 24.04.2021</div>

            <div className="section-appointment">
                <Appointment title="Programming in Python 1"></Appointment>
                <Appointment title="Statistik 1"></Appointment>
                <Appointment title="Statistik 2"></Appointment>

            </div>        
        </div>
    )
}

export default MeineWoche
