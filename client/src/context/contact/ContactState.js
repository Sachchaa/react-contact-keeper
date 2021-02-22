import React, { useReducer } from 'react'
import uuid from 'uuid'
import ContactContext from './contactContext'
import contactReducer from './contactReducer'
import {
    ADD_CONTACT,
    DELETE_CONTACT,
    SET_CURRENT,
    CLEAR_CURRENT,
    UPDATE_CONTACT,
    FILTER_CONTACTS,
    CLEAR_FILTER
} from '../types'

const ContactState = (props) => {
    const initialState = {
        contacts: [
            {
                id: 1,
                name: 'testUser1',
                email: 'test1@test.com',
                phone: '1111111111',
                type: 'personal'
            },
            {
                id: 2,
                name: 'testUser2',
                email: 'test2@test.com',
                phone: '2222222222',
                type: 'personal'
            },
            {
                id: 3,
                name: 'testUser3',
                email: 'test3@test.com',
                phone: '3333333333',
                type: 'professional'
            }
        ]
    }

    const [state, dispatch] = useReducer(contactReducer, initialState)

    //Add contact

    //Delete contact

    //Set current contact

    //Clear currenr contact

    //Update contact

    //Filter contact

    //Clear filter


    return (
        <ContactContext.Provider
            value={{
                contacts: state.contacts
            }}>
            {props.children}
        </ContactContext.Provider>
    )
}

export default ContactState