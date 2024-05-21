/*eslint-disable*/
import React from "react";
// reactstrap components
import {Container} from "reactstrap";
import {Carousel, CarouselItem, CarouselIndicators} from "reactstrap";
import "./KarsilamaSlayti.css"

// images
import {
    imgKarsilama1,
    imgKarsilama2,
    imgKarsilama3,
    imgKarsilama4,
    imgKarsilama5
} from "../assets/img/Gorseller"

// data
const headerPictures = [
    {
        src: imgKarsilama1,
        altText: "Cimri - Molière - 2021",
        caption: "Cimri - Molière - 2021"
    },
    {
        src: imgKarsilama2,
        altText: "Kibarlık Budalaası - Molière - 2019",
        caption: "Kibarlık Budalaası - Molière - 2019"
    },
    {
        src: imgKarsilama3,
        altText: "Çevre Temizliği Etkinliği - 2022",
        caption: "Çevre Temizliği Etkinliği - 2022"
    },
    {
        src: imgKarsilama4,
        altText: "Bilim ve Teknoloji Oyuncuları",
        caption: "Bilim ve Teknoloji Oyuncuları"
    },
    {
        src: imgKarsilama5,
        altText: "2.Kuşak Bilim ve Teknoloji Oyuncuları - 2020",
        caption: "2.Kuşak Bilim ve Teknoloji Oyuncuları - 2020"
    }
];

function KarsilamaSlayti() {
    let pageHeader = React.createRef();

    React.useEffect(() => {
        if (window.innerWidth > 991) {
            const updateScroll = () => {
                let windowScrollTop = window.pageYOffset / 3;
                pageHeader.current.style.transform =
                    "translate3d(0," + windowScrollTop + "px,0)";
            };
            window.addEventListener("scroll", updateScroll);
            return function cleanup() {
                window.removeEventListener("scroll", updateScroll);
            };
        }
    });

    const [activeIndex, setActiveIndex] = React.useState(0);
    const [animating, setAnimating] = React.useState(false);
    const onExiting = () => {
        setAnimating(true);
    };
    const onExited = () => {
        setAnimating(false);
    };
    const next = () => {
        if (animating) return;
        const nextIndex = activeIndex === headerPictures.length - 1 ? 0 : activeIndex + 1;
        setActiveIndex(nextIndex);
    };
    const previous = () => {
        if (animating) return;
        const nextIndex = activeIndex === 0 ? headerPictures.length - 1 : activeIndex - 1;
        setActiveIndex(nextIndex);
    };
    const goToIndex = newIndex => {
        if (animating) return;
        setActiveIndex(newIndex);
    };

    return (
        <>
            <div
                className="page-header-image" data-parallax="false"
                ref={pageHeader}
            >
                <>
                    <Carousel activeIndex={activeIndex} next={next} previous={previous}>
                        <CarouselIndicators
                            items={headerPictures}
                            activeIndex={activeIndex}
                            onClickHandler={goToIndex}
                        />
                        {headerPictures.map(item => {
                            return (
                                <CarouselItem
                                    onExiting={onExiting}
                                    onExited={onExited}
                                    key={item.src}
                                >
                                    <img src={item.src} loading="lazy" alt={item.altText}/>
                                    <div className="carousel-caption d-none d-md-block">
                                        <h5>{item.caption}</h5>
                                    </div>
                                </CarouselItem>
                            );
                        })}
                        <a
                            className="carousel-control-prev"
                            data-slide="prev"
                            href="#pablo"
                            onClick={e => {
                                e.preventDefault();
                                previous();
                            }}
                            role="button"
                        >
                            <i className="now-ui-icons arrows-1_minimal-left"></i>
                        </a>
                        <a
                            className="carousel-control-next"
                            data-slide="next"
                            href="#pablo"
                            onClick={e => {
                                e.preventDefault();
                                next();
                            }}
                            role="button"
                        >
                            <i className="now-ui-icons arrows-1_minimal-right"></i>
                        </a>
                    </Carousel>
                </>
            </div>
        </>
    );
}

export default KarsilamaSlayti;
