import React from "react";
import Link from "../Link";
import logo from '../../assets/images/Logo.png'

import './index.css'

const HeaderSticky = () => (
    <header className='header-sticky'>
        <img src={logo}  alt='logo'/>
        <Link
          title='Protect me now'
          classBtn='header-sticky_ref'
          path='price'
       />
      </header>
)

export default HeaderSticky;