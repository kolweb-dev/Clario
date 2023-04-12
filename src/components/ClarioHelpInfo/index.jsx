import React from "react";

import ClarioFeature from "./ClarioFeature";



import trusted from '../../assets/images/trusted.png'
import identity from '../../assets/icons/Identity.svg'
import notification from '../../assets/icons/notification.svg'
import Network from '../../assets/icons/Network.svg'
import Spyware from '../../assets/icons/Spyware.svg'
import location from '../../assets/icons/location.svg'
import Safari from '../../assets/icons/Safari.svg'
import Antivirus from '../../assets/icons/Antivirus.svg'
import Instagram from '../../assets/icons/Instagram.svg'
import Widget from '../../assets/icons/Widget.svg'
import immediately from '../../assets/icons/immediately.svg'
import findout from '../../assets/icons/findout.svg'
import Device from '../../assets/icons/Device.svg'
import Alert from '../../assets/icons/Alert.svg'
import hideLocation from '../../assets/images/HideLocation.png'
import Protect from '../../assets/images/Protect.png'
import checkMedia from '../../assets/images/CheckMedia.png'
import StopSecret from '../../assets/images/StopSecret.png'

import './index.css'

const ClarioHelpInfo = () => {
    const clarioFeatures = [
        {
            imageSrc: trusted,
            title: 'Spyware detector',
            description: 'Find apps secretly spying on you and your data.',
            features: [
                {
                    title: 'Full background anti-spyware scan',
                    iconSRC: identity,
                },
                {
                    title: 'Instant spyware detection alerts',
                    iconSRC: notification,
                },
                {
                    title: 'Immediate threat quarantining',
                    iconSRC: Network,
                },
            ]
        },
        {
            imageSrc: hideLocation,
            title: 'Tracker detector',
            description: 'Discover who tracks your location to spy on you.',
            features: [
                {
                    title: 'Stop being secretly tracked',
                    iconSRC: Spyware,
                },
                {
                    title: 'Protect your real location',
                    iconSRC: location,
                },
                {
                    title: 'Control who sees your location',
                    iconSRC: Safari,
                },
            ]
        },
        {
            imageSrc: checkMedia,
            title: 'Social media protection',
            description: 'Easily prevent social media account hacks.',
            features: [
                {
                    title: 'See who uses your accounts',
                    iconSRC: Instagram,
                },
                {
                    title: 'Revoke access for other users',
                    iconSRC: Antivirus,
                },
                {
                    title: 'Get unauthorized login alerts',
                    iconSRC: notification,
                },
            ]
        },
        {
            imageSrc: Protect,
            title: 'Call recorder blocker',
            description: 'Discover if someone records your calls and chats.',
            features: [
                {
                    title: 'Hide your call history and records',
                    iconSRC: Device,
                },
                {
                    title: 'Revoke sharing your contact list',
                    iconSRC: Widget,
                },
                {
                    title: 'Help secret texts remain secret',
                    iconSRC: Alert,
                },
            ]
        },
        {
            imageSrc: StopSecret,
            title: 'Screen recording detector',
            description: 'Don’t let anyone access your phone screen.',
            features: [
                {
                    title: 'Find out if your screen is being recorded',
                    iconSRC: findout,
                },
                {
                    title: 'Immediately stop silent recordings',
                    iconSRC: immediately,
                },
                {
                    title: 'Get alerts if your camera is in use',
                    iconSRC: notification,
                },
            ]
        }
    ]

    return (
        <section className="clarioHelpInfo">
            <h2 className="clarioHelpInfo__title">
                Clario helps you easily avoid spying.
            </h2>
            {
                clarioFeatures.map((clarioFeature, index) => (
                    <ClarioFeature
                        key={index}
                        title={clarioFeature.title}
                        image={clarioFeature.imageSrc}
                        description={clarioFeature.description}
                        features={clarioFeature.features}
                    />
                ))
            }
        </section>
    )
}

export default ClarioHelpInfo;