import React from 'react'

type AncorHoverProp = {
    label: string
    href?: string
}

function AncorHover({ label, href }: AncorHoverProp) {
    return (
        <a href={href} className="bg-transparent uppercase p-3 text-white relative transition-all duration-300 before:content-[''] before:absolute before:bottom-1 before:left-0 before:w-0 before:h-1 before:opacity-0 before:transition-all before:duration-300 before:bg-purple-600 hover:before:w-full hover:before:opacity-100">{label}</a>
    )
}

export default AncorHover