import React from 'react'
import Logo from '../../components/Logo/Logo'
import {Link} from 'react-router-dom'

const Nav = () => {
  return (
    <header>
        <nav>
            <div>
                <Logo />
            </div>
            <ul>
                <Link></Link>
                <Link></Link>
                <Link></Link>
                <Link></Link>
            </ul>
        </nav>
    </header>
  )
}

export default Nav