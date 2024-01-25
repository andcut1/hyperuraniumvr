import React, { useState } from 'react'
import Button from '../button/button'
import InputText from '../input-text/input-text'
import Textarea from '../textarea/textarea'

function ContactUs() {
    const [formValue, setFormValue] = useState({
        textarea: '',
        name: '',
        mail: ''
    })

    const handleChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        setFormValue({
            ...formValue,
            [name]: value
        })
    }

    const handleSubmit: React.FormEventHandler<HTMLFormElement> = (event) => {
        event.preventDefault()
        console.log('submit bro', formValue)
    }

    return (
        <div className="container mx-auto w-5/6 sm:my-44">
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
                        <br />
                        and team
                        <span className='text-purple-600 tracking-tight'>
                            {' admission requests'}
                        </span>
                    </h3>
                    <Button label='contact us' outlined />
                </div>
                <div className="flex flex-col lg:w-1/2">
                    <form className='group' onSubmit={handleSubmit}>
                        <Textarea
                            placeholder='write message'
                            name='textarea'
                            onChange={handleChange}
                        />
                        <div className="flex flex-col mb-2.5 space-y-2 sm:space-y-0 sm:space-x-2 sm:flex-row">
                            <InputText
                                placeholder='write message'
                                name='name'
                                type='text'
                                pattern="^[A-Za-z0-9]{3,16}$"
                                errorText='deve contenere almeno 3 lettere'
                                value={formValue.name}
                                onChange={handleChange}
                            />
                            <InputText
                                required
                                placeholder='your mail'
                                name='mail'
                                type='email'
                                pattern="^[a-zA-Z0-9]+(?:\.[a-zA-Z0-9]+)*@[a-zA-Z0-9]+(?:\.[a-zA-Z0-9]+)*$"
                                errorText='inserisci una mail valida'
                                value={formValue.mail}
                                onChange={handleChange}
                            />
                        </div>
                        <Button
                            type='submit'
                            className='w-full group-invalid:pointer-events-none group-invalid:opacity-30'
                            label='submit message'
                            outlined
                        />
                    </form>
                </div>
            </div>
        </div>
    )
}

export default ContactUs