import React, { useEffect } from 'react'

import { useInView } from 'react-intersection-observer';

const ClarioFeature = ({ image, title, description, features }) => {
    const [ref, inView] = useInView({
        threshold: 0.5,
    });

    useEffect(() => {
        if (inView) {
            console.log(title,'feature');
        }
    }, [inView]);

    return (
        <div className="clarioHelpInfo__feature">
            <img className="clarioHelpInfo__feature-img" src={image} alt="Clario feature" />
            <h4 ref={ref}>{title}</h4>
            <p>{description}</p>
            <ul className="clarioHelpInfo__list">

                {
                    features?.map((feature, index) => (
                        <li className="clarioHelpInfo__list-li" key={index}>
                            <img src={feature?.iconSRC} alt={feature.title} />
                            {feature.title}
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default ClarioFeature;