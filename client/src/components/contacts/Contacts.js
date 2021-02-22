import React, { useContext } from 'react'
import ContactContext from '../../context/contact/contactContext'
import Contact from './Contact'

const Contacts = () => {
    const contactContext = useContext(ContactContext)

    const { contacts } = contactContext

    return (
        <>
            {contacts.map(contact => (
                <Contact contact={contact} />
            ))}
        </>
    )
}

export default Contacts
