import React from 'react'

function Appointment(props) {
    return (
        <div className="appointment py-4 px-6 bg-white flex items-center mb-1 border-l-4 border-black hover:border-l-8 transition-all hover:cursor-pointer min-w-full
        ">
            <div className="a-time mr-12 font-bold text-lg">12:00 – <br></br>14:00</div>
            <div className="a-details mr-4">
                <div className="a-title">LVA-Termin</div>
                <div className="a-lva font-bold mr-12 text-lg">{props.title}</div>
            </div>
            <div className="room-info">
                <div className="room">Raum</div>
            <div className="a-room font-bold text-lg">LP B110	</div>
            </div>
         
        </div>
    )
}   

export default Appointment
