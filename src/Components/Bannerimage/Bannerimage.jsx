import Banner from '../../assets/Banner.jpg'
import React from 'react';
 export function Bannetimage() {
    return <div className='w-full h-96'>


        <img className='w-full h-full' src={Banner} alt="banner" />

    
    <div className="absolute top-20 left-0 right-80 mx-auto w-[20rem]">
    <div className="flex flex-col gap-4">
        <div className="font-semibold text-5xl tect-white">
Crypto tracker
        </div>
        <div className="font-semibold text-am text-white text-center">
            get all info regarding cryptocurrency
        </div>
    </div>
    </div>
 
   
    </div>
    // </div>
}
// export default Bannetimage;