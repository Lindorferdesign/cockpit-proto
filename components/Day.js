function Day() {
    return (
        <div className="day flex flex-col justify-center align-middle">
            <div className="ring-indicator w-14 h-14 rounded-full border-2 border-black flex justify-center items-center">
              <div className="day-single w-11 h-11 rounded-full bg-gray-300 flex items-center justify-center text-black text-xl font-bold relative hover:bg-gray-400 transition-all duration-300 hover:cursor-pointer" >20</div>
            </div>
            <div className="day-title uppercase font-bold text-center mt-1">Mo</div>
        </div>
    )
}

export default Day
