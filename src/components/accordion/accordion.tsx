import AccordionItem from "./accordion-item"

type AccordionProp = {
    open: boolean
}

const ACCORDION_HEIGHT = 'h-56'

function Accordion({ open }: AccordionProp) {
    return (
        <div className={`${open ? ACCORDION_HEIGHT : 'h-0'} overflow-scroll transition-all duration-500 ease absolute bg-black w-full`} >
            <AccordionItem label="Home" items={['item1', 'item2']} />
            <AccordionItem label="pages" items={['item1', 'item2']} />
            <AccordionItem label="tournament" items={['item1', 'item2']} />
            <AccordionItem label="blog" items={['item1', 'item2']} />
            <AccordionItem label="shop" items={['item1', 'item2']} />
            <AccordionItem label="landing" items={['item1', 'item2']} />
        </div>
    )
}

export default Accordion