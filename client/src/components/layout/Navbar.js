import React from 'react'
import PropTypes from 'prop-types'
import { FaAlignCenter } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const NavbarComponent = ({ title }) => {
    return (
        <>
            <nav className='nav-bar navbar-expand-lg'>
                <div className='nav-center'>
                    <div className='nav-header'>
                        <h3>
                            {title}
                        </h3>
                        <button type='button' className='toggle-btn'>
                            <FaAlignCenter />
                        </button>
                    </div>
                    <ul className='nav-links'>
                        <li>
                            <Link to='/'>Home</Link>
                        </li>
                        <li>
                            <Link to='/about'>About</Link>
                        </li>
                    </ul>
                </div>
            </nav>

        </>
    )
}

NavbarComponent.propTypes = {
    title: PropTypes.string.isRequired,
}

NavbarComponent.defaultProps = {
    title: 'CONTACT KEEPER'
}

export default NavbarComponent
