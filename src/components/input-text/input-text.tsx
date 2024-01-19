import './input-text.css'

type InputTextProp = {
    placeholder: string
    className?: string
}

function InputText({ className, placeholder }: InputTextProp) {
    return (
        <input type="text" className={`bg-customBgInput text-gray-400 w-full p-6 capitalize ${className}`} placeholder={placeholder} />
    )
}

export default InputText