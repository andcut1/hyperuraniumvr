import React, { useState } from 'react'
import InputText from '../input-text/input-text'
import Button from '../button/button'

function Newsletter() {
    const [email, setEmail] = useState('')

    const handleChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
        const value = event.target.value
        setEmail(value)
    }

    const handleSubmit: React.FormEventHandler<HTMLFormElement> = (event) => {
        event.preventDefault()
        console.log('submit bro', email)
    }

    return (
        <div className="container m-auto flex items-center justify-center h-[50vh]">
            <div className='w-5/6'>
                <h3 className="uppercase text-white text-center text-6xl tracking-tight mb-12">hyperuranium newsletter</h3>
                <form className="group" onSubmit={handleSubmit}>
                    <div className="flex flex-col space-y-2 md:space-y-0 md:flex-row md:space-x-2">
                        <InputText
                            placeholder='your email'
                            type='text'
                            value={email}
                            pattern="^[a-zA-Z0-9]+(?:\.[a-zA-Z0-9]+)*@[a-zA-Z0-9]+(?:\.[a-zA-Z0-9]+)*$"
                            errorText='inserisci una mail valida'
                            onChange={handleChange}
                        />
                        <Button
                            type='submit'
                            label='subscribe'
                            className='bg-customSecondary w-full clipPathPentagon group-invalid:pointer-events-none group-invalid:opacity-30 md:w-48'
                        />
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Newsletter