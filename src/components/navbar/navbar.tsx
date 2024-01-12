import React from 'react'
import DropdownHover from '../dropdown-hover/dropdown-hover'

function Navbar() {
    return (
        <div className="navbar fixed bg-transparent">
            <div className="navbar-start lg:hidden">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-transparent rounded-box w-52">
                        <li><a>Item 1</a></li>
                        <li>
                            <a>Parent</a>
                            <ul className="p-2">
                                <li><a>Submenu 1</a></li>
                                <li><a>Submenu 2</a></li>
                            </ul>
                        </li>
                        <li><a>Item 3</a></li>
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl">daisyUI</a>
            </div>
            <div className="navbar-center hidden w-full lg:flex lg:justify-around">
                <DropdownHover name='HOME' items={['ITEM1', 'ITEM2']} />
                <DropdownHover name='PAGES' items={['ITEM1', 'ITEM2']} />
                <DropdownHover name='TOURNAMENT' items={['ITEM1', 'ITEM2']} />
                <img src='https://hyperuraniumvr.com/images/logo.png' className='h-20' />
                <DropdownHover name='BLOG' items={['ITEM1', 'ITEM2']} />
                <DropdownHover name='SHOP' items={['ITEM1', 'ITEM2']} />
                <DropdownHover name='LANDING' items={['ITEM1', 'ITEM2']} />
            </div>
        </div>
    )
}

export default Navbar