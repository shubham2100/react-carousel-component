import React, { useState } from 'react'
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";
import { sliderData } from './sliderData';

interface ImageData {
    image: string;
}
type props = {
    slides: ImageData[];
}

const ImageSlider: React.FC<props> = ({ slides }) => {
    const [current, setCurrent] = useState(0);
    const length = slides.length;
    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1);
    }
    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1);
    }
    return (
        <section className='slider'>
            <FaArrowAltCircleLeft className='left-arrow' onClick={prevSlide} />
            <FaArrowAltCircleRight className='right-arrow' onClick={nextSlide} />
            {
                sliderData.map((slide: any, index: number) => {
                    return (
                        <div className={index === current ? "slide active" : "slide"} key={index}>
                            {
                                index === current && <img src={slide.image} alt="not found" className='image' />
                            }
                        </div>

                    )
                })
            }
        </section>
    )
}

export default ImageSlider;