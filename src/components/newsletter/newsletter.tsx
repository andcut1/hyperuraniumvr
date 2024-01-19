import React from 'react'
import InputText from '../input-text/input-text'
import Button from '../button/button'

function Newsletter() {
    return (
        <div className="container m-auto flex items-center justify-center h-[50vh]">
            <div className='w-5/6'>
                <h3 className="uppercase text-white text-center text-6xl tracking-tight mb-12">hyperuranium newsletter</h3>
                <div className="flex space-x-2">
                    <InputText placeholder='your email' className='clipPathInput' />
                    <Button label='subscribe' className='bg-customSecondary clipPathPentagon' />
                </div>
            </div>
        </div>)
}

export default Newsletter