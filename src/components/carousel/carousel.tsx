import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3,
        slidesToSlide: 3 // optional, default to 1.
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2,
        slidesToSlide: 2 // optional, default to 1.
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
        slidesToSlide: 1 // optional, default to 1.
    }
}

function MultiCarousel() {
    return (
        <Carousel
            swipeable={false}
            draggable={false}
            showDots={false}
            responsive={responsive}
            infinite={true}
            autoPlay={true}
            autoPlaySpeed={2000}
            keyBoardControl={true}
            customTransition="all 1000ms"
            transitionDuration={1000}
            containerClass="carousel-container"
            removeArrowOnDeviceType={["tablet", "mobile"]}
            dotListClass="custom-dot-list-style"
            itemClass="carousel-item-padding-40-px"
        >
            <img src="https://overworld.qodeinteractive.com/wp-content/uploads/2019/10/rooster-img-5.jpg" className="h-full w-full" />
            <img src="https://overworld.qodeinteractive.com/wp-content/uploads/2019/10/rooster-img-2.jpg" className="h-full w-full" />
            <img src="https://overworld.qodeinteractive.com/wp-content/uploads/2019/10/rooster-img-3.jpg" className="h-full w-full" />
            <img src="https://overworld.qodeinteractive.com/wp-content/uploads/2019/10/rooster-img-1.jpg" className="h-full w-full" />
        </Carousel>
    )
}

export default MultiCarousel