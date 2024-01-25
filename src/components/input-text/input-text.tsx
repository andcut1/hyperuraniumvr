import { useState } from 'react'
import './input-text.css'

type InputTextProp = {
    placeholder: string
    name?: string
    value?: string
    type: string
    required?: boolean
    errorText?: string
    pattern?: string
    className?: string
    onChange?: React.ChangeEventHandler<HTMLInputElement>
}

function InputText({ className, placeholder, name, type, errorText, pattern, onChange }: InputTextProp) {
    return (
        <div className='w-full'>
            <input
                type={type}
                name={name || ''}
                className={`bg-customBgInput text-gray-400 p-6 w-full capitalize peer ${className}`}
                placeholder={placeholder}
                pattern={pattern}
                onChange={onChange}
            />
            <span className={`mt-2 hidden text-sm text-red-500 peer-[&:not(:placeholder-shown):not(:focus):invalid]:block`}>{errorText}</span>
        </div>
    )
}

export default InputText