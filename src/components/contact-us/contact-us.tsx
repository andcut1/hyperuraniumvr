import React from 'react'
import Button from '../button/button'
import InputText from '../input-text/input-text'

function ContactUs() {
    return (
        <div className="mx-auto w-5/6 sm:h-screen flex items-center">
            <div className="flex flex-col w-full lg:flex-row lg:justify-between">
                <div className="flex flex-col mb-10 lg:w-1/2">
                    <h3 className='uppercase text-white text-4xl mb-10 tracking-tight'>
                        {'contact us '}
                        <span className='text-purple-600 tracking-tight'>
                            about press matters,
                        </span>
                        <br />
                        {'potential '}
                        <span className='text-purple-600 tracking-tight'>
                            sponsorships,
                        </span>
                        <br></br>
                        and team
                        <span className='text-purple-600 tracking-tight'>
                            admission requests
                        </span></h3>
                    <Button label='contact us' outlined />
                </div>
                <div className="flex flex-col lg:w-1/2">
                    <textarea className="bg-customBgInput text-gray-400 p-6 mb-2.5" placeholder='Write Message'></textarea>
                    <div className="flex flex-col mb-2.5 space-y-2 sm:space-y-0 sm:space-x-2 sm:flex-row">
                        <InputText placeholder='your name' />
                        <InputText placeholder='your mail' />
                    </div>
                    <Button className='w-full' label='submit message' outlined />
                </div>
            </div>
        </div>
    )
}

export default ContactUs