type DropdownHoverProps = {
    name: string
    items: string[]
}

function DropdownHover({ items, name }: DropdownHoverProps) {
    return (
        <div className="dropdown dropdown-hover">
            <div tabIndex={0} role="button" className="btn btn-ghost m-1 text-white border-0 border-b-4 rounded-none hover:bg-transparent hover:border-b-purple-600">{name}</div>
            <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-black bg-opacity-70 text-white w-52">
                {items.map(item => <li><a className="hover:text-purple-600">{item}</a></li>)}
            </ul>
        </div>
    )
}

export default DropdownHover