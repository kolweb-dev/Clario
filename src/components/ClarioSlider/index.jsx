import React from 'react'
import Slider from "react-slick"


import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import trustpilotLogo from '../../assets/icons/TrustpilotLogo.svg'
import GooglePlayLogo from '../../assets/icons/GooglePlayLogo.svg'

import './index.css'
const ClarioSlider = () => {

    const settings = {
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        className: 'sample',
        variableWidth: true,
        centerMode: true,
        centerPadding: '0',
        // cssEase: 'linear',
        speed: 500,
    };


    return (
        <section className='clarioSlider'>
            <h2 className='clarioSlider__title'>
                Let’s hear what real Clario users say.
            </h2>
            <Slider {...settings}>
                <div className='slider-card'>
                    <img className='slider-card__logo' src={trustpilotLogo} alt='Logo' />
                    <p className='slider-card__text'>
                        Great service! They were an amazing help with making sure my device is secure.
                    </p>
                    <h4 className='slider-card__author'>
                        Megan_N
                    </h4>
                </div>
                <div className='slider-card slide-blue'>
                    <img className='slider-card__logo' src={trustpilotLogo} alt='Logo' />
                    <p className='slider-card__text'>
                        It is a great application to protect yourself from hackers.
                    </p>
                    <h4 className='slider-card__author'>
                        Manweet
                    </h4>
                </div>
                <div className='slider-card slide-blue'>
                    <img className='slider-card__logo' src={trustpilotLogo} alt='Logo' />
                    <p className='slider-card__text'>
                        Great service! They were an amazing help with making sure my device is secure.
                    </p>
                    <h4 className='slider-card__author'>
                        Megan_N
                    </h4>
                </div>
                <div className='slider-card'>
                    <img className='slider-card__logo' src={trustpilotLogo} alt='Logo' />
                    <p className='slider-card__text'>
                        Great service! They were an amazing help with making sure my device is secure.
                    </p>
                    <h4 className='slider-card__author'>
                        Megan_N
                    </h4>
                </div>
                <div className='slider-card slide-green'>
                    <img className='slider-card__logo' src={GooglePlayLogo} alt='Logo' />
                    <p className='slider-card__text'>
                        The best app you could find!
                        I had a problem of malware which added unknown accounts to my device.
                        The "Talk to experts" feature saved the day! I was helped in all possible ways.
                    </p>
                    <h4 className='slider-card__author'>
                        Shahu Sardar
                    </h4>
                </div>
            </Slider>
        </section>
    )
}

export default ClarioSlider