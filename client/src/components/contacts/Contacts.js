import React, { useContext, useEffect } from 'react'
import ContactContext from '../../context/contact/contactContext'
import Contact from './Contact'
import SpinnerComponent from '../layout/Spinner'

const Contacts = () => {
    const contactContext = useContext(ContactContext)

    const { contacts, filtered, getContacts, loading } = contactContext

    useEffect(() => {
        getContacts()
        // eslint-disable-next-line
    }, [])

    if (contacts !== null && contacts.length === 0 && !loading) {
        return <p>Please add contacts...</p>
    }

    return (
        <>
            {contacts !== null && !loading ? (
                filtered !== null ?
                    filtered.map(contact => (
                        <Contact key={contact._id} contact={contact} />
                    )) : contacts.map(contact => (
                        <Contact key={contact._id} contact={contact} />
                    ))
            ) : <SpinnerComponent />
            }

        </>
    )
}

export default Contacts
