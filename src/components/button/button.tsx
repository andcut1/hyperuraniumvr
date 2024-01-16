type ButtonProps = {
    label: string
    outlined?: boolean
    className?: string
}

function Button({ label, outlined, className }: ButtonProps) {
    const filledClass = `bg-customPrimary border-2 border-customPrimary w-48 py-5 transition-all delay-100 hover:bg-customSecondary hover:border-customSecondary ${className}`
    const outlinedClass = `bg-transparent border-2 border-customPrimary w-48 py-5 transition-all delay-100 hover:bg-customPrimary  ${className}`
    return (
        <button className={outlined ? outlinedClass : filledClass}>
            <span className='text-white'>
                {label}
            </span>
        </button>
    )
}

export default Button