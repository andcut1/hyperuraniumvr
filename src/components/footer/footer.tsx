import React from 'react'
import NavIcon from '../navbar/nav-icon'
import Button from '../button/button'

function Footer() {
    return (
        <div className="bg-black">
            <div className="flex h-32 items-center justify-around">
                <NavIcon />
                <a href="" className="bg-transparent uppercase p-3 text-white">main home</a>
                <a href="" className="bg-transparent uppercase p-3 text-white">boosting</a>
                <a href="" className="bg-transparent uppercase p-3 text-white">esports</a>
                <a href="" className="bg-transparent uppercase p-3 text-white">gamer</a>
                <a href="" className="bg-transparent uppercase p-3 text-white">magazine</a>
                <Button label='OUTLINED' className='mb-5 sm:m-0' outlined />
            </div>
        </div>)
}

export default Footer