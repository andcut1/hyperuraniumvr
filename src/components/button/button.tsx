import './button.css'

type ButtonProps = {
    label: string
    outlined?: boolean
    className?: string
}

function Button({ label, outlined, className }: ButtonProps) {
    const filledClass = `text-white relative py-5 w-48 bg-customPrimary overflow-hidden px-3 transition-all before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full before:w-0 before:bg-customSecondary before:transition-all before:duration-200 hover:text-white hover:before:left-0 hover:before:bg-customSecondary hover:before:w-full clipPath ${className}`
    const outlinedClass = `text-white relative py-5 w-48 border-2 border-customPrimary bg-transparent overflow-hidden px-3 transition-all before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full before:w-0 before:bg-customPrimary before:transition-all before:duration-200 hover:text-white hover:before:left-0 hover:before:bg-customPrimary hover:before:w-full clipPath ${className}`
    return (
        <>
            <button className={outlined ? outlinedClass : filledClass}>
                <span className='relative z-10'>
                    {label}
                </span>
            </button>
            {outlined ? <span className="squareAngle"></span> : null}
        </>
    )
}

export default Button