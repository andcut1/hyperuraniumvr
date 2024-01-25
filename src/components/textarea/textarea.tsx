type TextareaProp = {
    placeholder: string
    name?: string
    value?: string
    required?: boolean
    pattern?: string
    errorText?: string
    error?: boolean
    className?: string
    onChange?: React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>
}

function Textarea({ placeholder, className, name, required, onChange }: TextareaProp) {
    return (
        <textarea
            className={`bg-customBgInput text-gray-400 w-full p-6 capitalize mb-2.5 ${className}`}
            name={name || ''}
            placeholder={placeholder}
            required={required}
            onChange={onChange}
        />
    )
}

export default Textarea