import React from 'react'
import Contacts from '../contacts/Contacts'
import ContactForm from '../contacts/contactForm'

const Home = () => {
    return (
        <div className='grid-2 m-3'>
            <div>
                <ContactForm />
            </div>
            <div>
                <Contacts />
            </div>
        </div >
    )
}

export default Home
