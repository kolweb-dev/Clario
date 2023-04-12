import React from "react"
import Link from '../Link'
import apple from '../../assets/icons/Apple.svg'
import sutract from '../../assets/icons/Subtract.svg'
import radar from '../../assets/videos/Radar_2x.mp4'

import './index.css'

const AntiSpyApp = () => (
    <section className="antiSpyApp">
        <h1 className="antiSpyApp__title">
            Stop your <span>phone from being spied on</span>
        </h1>
        <p className="antiSpyApp__clario">Try Clario, a smart anti-spy app that effectively protects your privacy. </p>
        <Link title='Protect me now' path='price' classBtn='antiSpyApp__link' />
        <div className="antiSpyApp__devices">
        <div><img src={apple} alt="apple" /> IOS</div>
        <div><img src={sutract} alt="apple" /> macOS,</div>
        <div>Windows</div>
        </div>
        <video className="antiSpyApp__spyware" playsInline autoPlay muted loop>
            <source src={radar} type="video/mp4" />
            <p>Your browser does not support HTML5 video.</p>
        </video>
        <div className="antiSpyApp__advantages">
        <h2 className="antiSpyApp__advantages-title">The anti-spy Clario app can:</h2>
        <ul className="advantages__list">
            <li className="advantages__list-li">reveal hidden spying apps</li>
            <li className="advantages__list-li">stop silent location tracking</li>
            <li className="advantages__list-li">avoid social media hacks</li>
            <li className="advantages__list-li">provide 24/7 expert security help</li>
        </ul>
        </div>
    </section>
)

export default AntiSpyApp;