import React, { useReducer } from 'react'
import { v4 as uuidv4 } from 'uuid';
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
        ],
        current: null,
        filtered: null
    }

    const [state, dispatch] = useReducer(contactReducer, initialState)

    //Add contact
    const addContact = (contact) => {
        contact.id = uuidv4()
        dispatch({ type: ADD_CONTACT, payload: contact })
    }

    //Delete contact
    const deleteContact = (id) => {
        dispatch({ type: DELETE_CONTACT, payload: id })
    }

    //Set current contact
    const setCurrentContact = (contact) => {
        dispatch({ type: SET_CURRENT, payload: contact })
    }

    //Clear currenr contact
    const clearCurrentContact = () => {
        dispatch({ type: CLEAR_CURRENT })
    }

    //Update contact
    const updateContact = (contact) => {
        dispatch({ type: UPDATE_CONTACT, payload: contact })
    }

    //Filter contact
    const filterContacts = (text) => {
        dispatch({ type: FILTER_CONTACTS, payload: text })
    }

    //Clear filter
    const clearFilter = () => {
        dispatch({ type: CLEAR_FILTER })
    }


    return (
        <ContactContext.Provider
            value={{
                contacts: state.contacts,
                current: state.current,
                filtered: state.filtered,
                addContact,
                deleteContact,
                setCurrentContact,
                clearCurrentContact,
                updateContact,
                filterContacts,
                clearFilter
            }}>
            {props.children}
        </ContactContext.Provider>
    )
}

export default ContactState