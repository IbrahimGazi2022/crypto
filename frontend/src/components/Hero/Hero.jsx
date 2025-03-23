import React from 'react';

const Hero = () => {
    return (
        <div className='grid grid-cols-2 gap-4 mt-16'>
            {/* Hero Left Side */}
            <div className="">
                <div className='flex items-center gap-6 bg-[#2C3A47] w-fit align-center rounded-full p-2 pr-4 pl-4 backdrop-sepia-0'>
                    <h4 className='text-white badge'>New</h4>
                    <p className='text-white text-sm'>New roadmap added for Phase 4 - 2025</p>
                </div>

                {/* Banner Title */}
                <div>
                    <h1 className='mt-10 leading-[70px] uppercase text-[70px] font-bold text-white banner-title'>
                        Unified Web
                        <br />
                        3.0 TRADE
                    </h1>
                    <p className='text-white mt-10'>Buy tokens now and reap the benefits of the blockchain revolution. Benefit and influence the development of a project
                    </p>
                    <button className='mt-10 rounded-full text-white wallet-btn cursor-pointer'>REGISTER</button>
                </div>
            </div>

            {/* Hero Left Side */}
            <div className="w-[400px] justify-self-end card">

            </div>
        </div>
    );
};

export default Hero;
