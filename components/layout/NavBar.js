import React from 'react';
import Link from 'next/link';

const NavBar = () => {
    return (
        <nav className=' border-b-2 border-slate-200 bg-white'>
            <div className="flex justify-between items-center max-w-[1100px] mx-auto px-5 py-3">
                <Link href="/">
                    <a className="text-xl font-extralight">
                        Super Hero
                    </a>
                </Link>
                <Link href="/add-hero">
                    <a className='bg-blue-600 text-white px-3 py-1 rounded-sm'>
                        Add Hero
                    </a>
                </Link>
            </div>
        </nav>
    );
};

export default NavBar;
