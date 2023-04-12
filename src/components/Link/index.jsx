import React from "react";

import scrollToElement from '../../utils/scrollToElement'

import './index.css'


const Link = ({title, path, classBtn}) => {


    return (
        // eslint-disable-next-line jsx-a11y/anchor-is-valid
        <a href={`#${path}`}
        className={`btn ${classBtn}`}
        // onClick={handleClick}
        onClick={(event) => scrollToElement(event, path)}
        >{title}</a>
    )
}


export default Link