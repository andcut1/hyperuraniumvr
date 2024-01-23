import './input-text.css'

type InputTextProp = {
    placeholder: string
    name?: string
    value?: string
    required?: boolean
    pattern?: string
    errorText?: string
    error?: boolean
    className?: string
    onChange?: () => void
}

function InputText({ className, placeholder }: InputTextProp) {
    return (
        <input type="text" className={`bg-customBgInput text-gray-400 w-full p-6 capitalize ${className}`} placeholder={placeholder} />
    )
}

export default InputText