import React, { useState } from 'react'

type AccordionItemProp = {
    label: string
    items: string[]
}

function AccordionItem({ label, items }: AccordionItemProp) {
    const [openAccordion, setOpenAccordion] = useState(false)

    const ACCORDION_HEIGHT = 'h-20'

    return (
        <div>
            <button className="bg-transparent w-full pl-10 py-3 uppercase text-white text-left" onClick={() => setOpenAccordion(!openAccordion)}>{label}</button>
            <div className={`${openAccordion ? ACCORDION_HEIGHT : 'h-0'} overflow-scroll transition-all duration-500 ease pl-14 bg-black w-full`} >
                <ul>
                    {items.map((item) => <li className="transition-transform transform cursor-pointer pb-4 hover:translate-x-4"><a className=" text-white uppercase hover:text-purple-600">{item}</a></li>)}
                </ul>
            </div>
        </div>
    )
}

export default AccordionItem