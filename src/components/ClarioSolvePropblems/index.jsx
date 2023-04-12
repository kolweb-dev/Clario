import React from "react";
import message from '../../assets/images/message.png'
import Link from './../Link'

import './index.css'

const ClarioSolvePropblems = () => {


    return (
        <section className="clarioSolvePropblems">
            <h2 className="clarioSolvePropblems__title">
                Not sure that the app can solve your problem?
            </h2>
            <p className="clarioSolvePropblems__text">
                You'll have Clario experts ready to jump in and help you, 24/7, just when you need them.
            </p>
            <img src={message} alt="Message" />
            <Link
                title='Protect me now'
                path='price'
                classBtn='clarioSolvePropblems__link'
            />
        </section>
    )
}

export default ClarioSolvePropblems