import React from 'react';

import apple from '../../assets/icons/Apple.svg'
import sutract from '../../assets/icons/Subtract.svg'

import './index.css'

const ProtectAll = () => (
    <section className='protectAll'>
        <h2 className='protectAll__title'>
        Protect all your devices. 
        </h2>
        <p className='protectAll__text'>
        Are you working from a Windows laptop and browsing 
        from your home Mac? Use Clario to enjoy total privacy
         on every platform and device. 
        </p>
        <div className="antiSpyApp__devices">
        <div><img src={apple} alt="apple" /> IOS</div>
        <div><img src={sutract} alt="apple" /> macOS,</div>
        <div>Windows</div>
        </div>
    </section>
)


export default ProtectAll;