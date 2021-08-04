import React from 'react'
import Image from 'next/image'

function Notification() {
    return (
        <div className="notifications bg-white p-4 flex flex-colum my-4 hover:shadow-lg hover:cursor-pointer transition-all duration-300 border border-gray-100">
            <div className="w-10 h-10 flex flex-shrink-0 mr-4">
            <Image src="/push_icon.png" width="40" height="40" className="mr-2"/>
            </div>
            <div className="notifiaction-info">
                    <div className="notification-title font-bold text-xl">Terminänderung</div>
                    <div className="notification-time font-medium text-gray-500 mb-2 text-sm">vor 3 Minuten</div>
                    <div className="notification-text">KS 663.342 Falllösungen der asymetrischen Analogie von <b>Di., 27.6.21 13:40 HS 17</b> auf <b>Mi., 28.6.21 15:00 HS12</b></div>
                </div>
        </div>
    )
}

export default Notification
