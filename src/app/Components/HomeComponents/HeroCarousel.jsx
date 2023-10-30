"use client"

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import Image from "next/image";

const heroImages = [
    { imgUrl: 'https://i.ibb.co/g61zTFJ/37192.png', alt: 'Books 01 ' },
    { imgUrl: 'https://i.ibb.co/Gxb8Xp8/4060996-1161.jpg', alt: 'bag' },
    { imgUrl: 'https://i.ibb.co/Gxb8Xp8/4060996-1161.jpg', alt: 'lamp' },
    { imgUrl: 'https://i.ibb.co/Gxb8Xp8/4060996-1161.jpg', alt: 'air fryer' },
    { imgUrl: 'https://i.ibb.co/Gxb8Xp8/4060996-1161.jpg', alt: 'chair' },
]

const HeroCarousel = () => {
    return (
        <div className="hero-carousel max-h-[530px]">
            <Carousel
                showThumbs={false}
                autoPlay
                infiniteLoop
                interval={4000}
                showArrows={false}
                showStatus={false}
            >
                {heroImages.map((image) => (
                    <Image
                        src={image.imgUrl}
                        alt={image.alt}
                        width={484}
                        height={484}
                        className="object-contain max-h-96 p-4"
                        key={image.alt}
                    />
                ))}
            </Carousel>

            <Image
                src="assets/icons/hand-drawn-arrow.svg"
                alt="arrow"
                width={175}
                height={175}
                className="max-xl:hidden absolute -left-[15%] bottom-0 z-0"
            />
        </div>
    )
}

export default HeroCarousel