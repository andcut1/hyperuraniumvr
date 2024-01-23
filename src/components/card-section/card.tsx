type CardProps = {
    title: string
    image: string
    description?: string
    href?: string
}

function Card({ description, title, image, href }: CardProps) {
    return (
        <div className="w-full aspect-square relative transition-all transform hover:-translate-y-5">
            <a href={href || '#'} target="_blank">
                <div className="w-full h-full relative">
                    <img src={image} alt="bg-image" className="w-full h-full absolute cover" />
                    <div className="absolute bottom-5 left-5">
                        <h3 className="text-white uppercase text-2xl">{title}</h3>
                        <p className="text-customPrimary uppercase">{description}</p>
                    </div>
                </div>
            </a>
        </div>
    )
}

export default Card