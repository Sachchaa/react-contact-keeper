import React, { useContext } from 'react'
import ContactContext from '../../context/contact/contactContext'
import Contact from './Contact'

const Contacts = () => {
    const contactContext = useContext(ContactContext)

    const { contacts, filtered } = contactContext

    if (contacts.length === 0) {
        return <h4>You can add contacts</h4>
    }

    return (
        <>
            {filtered !== null ?
                filtered.map(contact => (
                    <Contact key={contact.id} contact={contact} />
                )) : contacts.map(contact => (
                    <Contact key={contact.id} contact={contact} />
                ))

            }
        </>
    )
}

export default Contacts
