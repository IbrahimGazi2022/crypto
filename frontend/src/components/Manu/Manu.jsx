import React from 'react';

const Manu = () => {
    return (
        <div className='pt-6 flex justify-between align-center'>
            {/* Logo */}
            <div>
                <img src="../image/logo.png" alt="" className='w-[180px] h-[60px]' />
            </div>◊

            {/* Menu Right Side */}
            <div className='flex items-center'>
                <ul className='grid grid-cols-4 gap-4'>
                    <li className='bg-[#34364E] rounded-full p-2'>
                        <a href="" aria-label="Telegram Link" title="Join us on Telegram">
                            <img src="../image/telegram.svg" alt="" className="w-[40px]" />
                        </a>
                    </li>

                    <li className='bg-[#34364E] rounded-full p-2'>
                        <a href="" aria-label="Telegram Link" title="Join us on Telegram">
                            <img src="../image/discord.svg" alt="" className="w-[40px]" />
                        </a>
                    </li>

                    <li className='bg-[#34364E] rounded-full p-2'>
                        <a href="" aria-label="Telegram Link" title="Join us on Telegram">
                            <img src="../image/twitter.svg" alt="" className="w-[40px]" />
                        </a>
                    </li>
                </ul>
                <div className="flex items-center">
                    <button className='rounded-full text-white wallet-btn cursor-pointer'>CONNECT WALLET</button>
                    <button className='bg-[#34364E] rounded-full ml-6 cursor-pointer'>
                        <img src="../image/ham.svg" alt="" className="w-[50px]"/>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Manu;
