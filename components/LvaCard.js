function LvaCard(props) {
    return (
        <div className="lva-single bg-white p-6 justify-between flex flex-col hover:shadow-lg transition-all duration-300 hover:cursor-pointer">
         <div>
         <div className="flex justify-between items-center">
            <div className="lva-header flex justify-center items-center">
                <div className="lva-type bg-black h-8 w-8 rounded-full text-white flex align-middle justify-center items-center font-bold mr-2 text-sm">PR</div>
                <div className="lva-type-text uppercase text-sm">Praktikum</div>
            </div>
            <div className="lva-ects uppercase font-bold">2 ECTS</div>
        </div>
        <div className="lva-title mt-6 font-bold text-xl">{props.title}</div>
        </div>

        <div className="bottom-info">
        <div className="lva-leiter mt-4 flex items-center">
            <div className="lva-leiter-info border-t-1 pt-2 w-full">
                <div className="lva-leiter-headline text-sm uppercase font-medium font-gray-200 text-xs font-bold text-gray-400">Leitung</div>
                <div className="lva-leiter-name font-medium">Max Mustermann</div>
            </div>
        </div>
        <div className="badges mt-4">
           <span className="font-bold badge py-1 px-3 bg-gray-100 w-auto text-sm rounded-full">531.223</span>
        </div>


        </div>
    </div>
    )
}

export default LvaCard
