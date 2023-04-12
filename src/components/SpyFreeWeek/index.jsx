import React, { useState, useEffect } from "react";

import Link from '../Link'

import spyFreeWeek from '../../assets/images/spyFreeWeek.png'
import protection from '../../assets/icons/protection.svg'
import antySpy from '../../assets/icons/antySpy.svg'
import unlimited from '../../assets/icons/unlimited.svg'
import conversation from '../../assets/icons/conversation.svg'
import moneyback from '../../assets/icons/moneyback.svg'
import download from '../../assets/icons/download.svg'

import './index.css'

const SpyFreeWeek = () => {
    const [timeLeft, setTimeLeft] = useState(1800);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setTimeLeft(prevTimeLeft => prevTimeLeft - 1);
        }, 1000);

        return () => clearInterval(intervalId);
    }, []);

    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;


    return (
        <section className="spyFreeWeek" id="price">
            <img
                className="spyFreeWeek-img"
                src={spyFreeWeek}
                alt="Spu free"
            />
            <div className="spyFreeWeek__container" >
                <h2 className="spyFreeWeek-title">
                    Start your spy-free week for as low as
                </h2>
                <div className="spyFreeWeek__card" >
                    <div className="spyFreeWeek__card-timer">
                        <span>Special offer valid for</span>
                        <div>{minutes}:{seconds < 10 ? `0${seconds}` : seconds}<span>min</span></div>
                    </div>
                    <div className="spyFreeWeek__card-price">
                        <div className="card-price">
                            <span className="card-price__currency">$</span>
                            <span className="card-price__num">2</span>
                            <span className="card-price__rest">99</span>
                        </div>
                        <span className="card-price__week">/7 days</span>
                    </div>
                    <h2 className="antiSpyApp__advantages-title">What you get:</h2>
                    <ul className="clarioHelpInfo__list spyFreeWeek__list">
                        <li className="clarioHelpInfo__list-li">
                            <img src={protection} alt="protection" />
                            Protection for 3 devices
                        </li>
                        <li className="clarioHelpInfo__list-li">
                            <img src={antySpy} alt="antySpy" />
                            Anti-spy checkup
                        </li>
                        <li className="clarioHelpInfo__list-li">
                            <img src={unlimited} alt="unlimited" />
                            Unlimited access to anti-spying tools
                        </li>
                        <li className="clarioHelpInfo__list-li">
                            <img src={conversation} alt="conversation" />
                            24/7 help from security experts
                        </li>
                    </ul>
                    <Link
                        title='Try for $2.99'
                        path='price'
                        classBtn='spyFreeWeek__link'
                    />
                    <div className="spyFreeWeek__info">
                        By clicking above, you agree to try 7 days of Clario for 
                        $2.99 as a special offer. Your subscription will renew for $39.9/month every 2 months. 
                        Cancel anytime or manage your subscription in your Clario account.
                    </div>
                    <ul className="clarioHelpInfo__list features__list">
                        <li className="clarioHelpInfo__list-li">
                            <img src={moneyback} alt="moneyback" />
                            30-day money-back guarantee
                        </li>
                        <li className="clarioHelpInfo__list-li">
                            <img src={download} alt="download" />
                            Anti-spy checkup
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default SpyFreeWeek;