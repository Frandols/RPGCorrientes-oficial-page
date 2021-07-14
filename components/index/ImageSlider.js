import React, { useState } from 'react';

export default function ImageSlider() {
    const [current, setCurrent] = useState(0);
    const sliderData = [{url: 'img1.jpeg', isVideo: false}, {url: 'gif1.mp4', isVideo: true}];
    
    const slideNext = () => {
        current === sliderData.length - 1 ? setCurrent(0) : setCurrent(current + 1);
    }
    const slideBack = () => {
        current === 0 ? setCurrent(sliderData.length - 1) : setCurrent(current - 1);
    }
    return (
        <div className="slider d-flex justify-content-between align-items-center">
            <i className="fas fa-2x fa-chevron-left" onClick={() => slideBack()} />
            <div className="media-wrapper d-flex justify-content-center align-items-center">
                { sliderData[current].isVideo ? <video src={sliderData[current].url} className="slider-media animate__animated animate__fadeIn" autoPlay loop /> : <img src={sliderData[current].url} className="slider-media animate__animated animate__fadeIn" /> }
            </div>
            <i className="fas fa-2x fa-chevron-right" onClick={() => slideNext()} />
        </div>
    )
}
