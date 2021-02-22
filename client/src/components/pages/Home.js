import React from 'react'
import Contacts from '../contacts/Contacts'

const Home = () => {
    return (
        <div className='grid-2 m-3'>
            <div>
                <h1>Welcome to Home page</h1>
            </div>
            <div className='contact-align'>
                <Contacts />
            </div>
        </div>
    )
}

export default Home
