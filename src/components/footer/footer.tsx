import React from 'react'
import NavIcon from '../navbar/nav-icon'
import Button from '../button/button'
import AncorHover from '../ancor-hover/ancor-hover'
import { Flip } from 'react-awesome-reveal'

function Footer() {
    return (
        <div className="bg-black">
            <div className="flex h-32 items-center justify-around">
                <NavIcon />
                <AncorHover label='home' />
                <AncorHover label='boosting' />
                <AncorHover label='esports' />
                <AncorHover label='gamer' />
                <AncorHover label='magazine' />
                <Flip direction='horizontal' >
                    <Button label='OUTLINED' className='mb-5 sm:m-0' outlined />
                </Flip>
            </div>
        </div>)
}

export default Footer