import React from "react";
import Link from '../Link'


import './index.css'

const PhoneSpyProtection = () => (
    <section className="phoneSpyProtection">
        <h2 className="phoneSpyProtection__title">Stop your <span>phone from being spied on</span>.</h2>
        <Link
          title='Protect me now'
          classBtn='clarioSolvePropblems__link phoneSpyProtection-btn'
          path='price'
       />
    </section>
)

export default PhoneSpyProtection;