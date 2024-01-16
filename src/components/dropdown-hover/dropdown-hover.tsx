import { Fade } from "react-awesome-reveal";

type DropdownHoverProps = {
    name: string
    items: string[]
}

function DropdownHover({ items, name }: DropdownHoverProps) {
    return (
        <div className="group relative dropdown cursor-pointer">
            <div tabIndex={0} className="m-1 text-white p-5 pb-8 rounded-none relative transition-all duration-300 before:content-[''] before:absolute before:bottom-4 before:left-0 before:w-0 before:h-1 before:opacity-0 before:transition-all before:duration-300 before:bg-purple-600 hover:before:w-full hover:before:opacity-100">
                {name}
            </div>
            <div className="group-hover:block dropdown-menu absolute hidden h-auto z-[1] menu p-5 shadow bg-black bg-opacity-80 text-white w-52">
                <Fade cascade>
                    <ul tabIndex={0} className="top-0">
                        {items.map(item => <li className="transition-transform transform hover:translate-x-4"><a className="hover:text-purple-600">{item}</a></li>)}
                    </ul>
                </Fade>
            </div>
        </div>
    )
}

export default DropdownHover