type ButtonProps = {
    label: string
    outlined?: boolean
}

function Button({ label, outlined}: ButtonProps) {
    const filledClass = "bg-customPrimary border-2 border-customPrimary px-20 py-5 transition-all delay-100 hover:bg-customSecondary hover:border-customSecondary"
    const outlinedClass = "bg-transparent border-2 border-customPrimary px-20 py-5 transition-all delay-100 hover:bg-customPrimary"
    return (
        <button className={outlined ? outlinedClass : filledClass}>
            <span className='text-white'>
                {label}
            </span>
        </button>
    )
}

export default Button