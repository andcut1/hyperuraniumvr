import Card from './card'

function CardSection() {
    return (
        <div id='card-section' className="container w-5/6 mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10 relative mt-20 my-10">
            <Card title='titolo' image='https://overworld.qodeinteractive.com/wp-content/uploads/2019/10/rooster-img-4.jpg' description='description' />
            <Card title='titolo' image='https://overworld.qodeinteractive.com/wp-content/uploads/2019/10/rooster-img-4.jpg' description='description' />
            <Card title='titolo' image='https://overworld.qodeinteractive.com/wp-content/uploads/2019/10/rooster-img-4.jpg' description='description' />
        </div>
    )
}

export default CardSection