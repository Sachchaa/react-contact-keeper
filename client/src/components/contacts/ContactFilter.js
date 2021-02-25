import React, { useContext, useRef, useEffect } from 'react'
import ContactContext from '../../context/contact/contactContext'
import { Form } from 'react-bootstrap'

const ContactFilter = () => {
    const contactContext = useContext(ContactContext)
    const text = useRef('');

    const { filterContacts, clearFilter, filtered } = contactContext

    useEffect(() => {
        if (filtered == null) {
            text.current.value = ''
        }
    })

    const onChange = (e) => {
        if (text.current.value !== '') {
            filterContacts(e.target.value)
        } else {
            clearFilter()
        }
    }
    return (
        <Form style={{ width: '30rem' }}>
            <Form.Group>
                <Form.Control
                    type="text"
                    placeholder="Filter contacts..."
                    ref={text}
                    onChange={onChange}
                />
            </Form.Group>
        </Form>

    )
}

export default ContactFilter
