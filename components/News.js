import React from 'react'
import Image from 'next/image'

function News() {
    return (
        <div className="notifications bg-white p-4 flex flex-colum my-4">
            <div className="w-10 h-10 flex-shrink-0 mr-4">
             <Image src="/news_icon.png" width="40" height="40" className="mr-2 flex"></Image>
            </div>
        <div className="notifiaction-info">
            <div className="news-date font-medium text-gray-500">Mo., 04.11.2021</div>
                <div className="news-title font-semibold">MUSSS & MUSSS O.C. Angebot 2021S - Anmeldung noch möglich</div>
            </div>
    </div>
    )
}

export default News
