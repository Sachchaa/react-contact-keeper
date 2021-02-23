import React from 'react'
import Contacts from '../contacts/Contacts'
import ContactForm from '../contacts/contactForm'
import ContactFilter from '../contacts/ContactFilter'

const Home = () => {
    return (
        <div className='grid-2 m-3'>
            <div>
                <ContactForm />
            </div>
            <div>
                <ContactFilter />
                <Contacts />
            </div>
        </div >
    )
}

export default Home
