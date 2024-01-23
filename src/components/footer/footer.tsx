import React from 'react'
import NavIcon from '../navbar/nav-icon'
import Button from '../button/button'
import AncorHover from '../ancor-hover/ancor-hover'
import { Flip } from 'react-awesome-reveal'

function Footer() {
    return (
        <div className="bg-black">
            <div className="container mx-auto flex flex-col sm:flex-row min-h-32 items-center justify-around ">
                <NavIcon />
                <AncorHover label='home' href='#' />
                <AncorHover label='boosting' href='#' />
                <AncorHover label='esports' href='#' />
                <AncorHover label='gamer' href='#' />
                <AncorHover label='card' href='#card-section' />
                <div className='relative my-5 sm:m-0'>
                    <Button label='OUTLINED' outlined />
                </div>
            </div>
        </div>)
}

export default Footer