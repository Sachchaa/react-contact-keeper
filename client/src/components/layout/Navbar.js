import React, { useContext, useEffect } from 'react'
import PropTypes from 'prop-types'
import { FaAlignCenter, FaSignOutAlt, FaRegUserCircle } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import AuthContext from '../../context/auth/authContext'
import ContactContext from '../../context/contact/contactContext'

const NavbarComponent = ({ title }) => {
    const authContext = useContext(AuthContext)
    const contactContext = useContext(ContactContext)

    const { isAuthenticated, logout, user, loadUser } = authContext
    const { clearContacts } = contactContext

    useEffect(() => {
        loadUser()
        clearContacts()
        // eslint-disable-next-line
    }, [])

    const onLogout = () => {
        logout()
    }

    const authLinks = (
        <>
            <li><FaRegUserCircle /> {' '} Hello {user && user.name}</li>
            <li>
                <a onClick={onLogout} href='#!'>
                    <FaSignOutAlt />
                </a>
            </li>
        </>
    )

    const guestLinks = (
        <>
            <li>
                <Link to='/login'>Login</Link>
            </li>
            <li>
                <Link to='/register'>Register</Link>
            </li>
        </>
    )
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
                        {isAuthenticated ? authLinks : guestLinks}
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
