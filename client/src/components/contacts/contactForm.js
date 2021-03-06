import React, { useState, useContext, useEffect } from 'react'
import { Form, Col, Row, Button } from 'react-bootstrap'
import ContactContext from '../../context/contact/contactContext'
import AlertContext from '../../context/alert/alertContext'

const ContactForm = () => {

    const contactContext = useContext(ContactContext)
    const alertContext = useContext(AlertContext)

    const { addContact, updateContact, current, clearCurrentContact } = contactContext
    const { setAlert } = alertContext

    useEffect(() => {
        if (current !== null) {
            setContact(current)
        } else {
            setContact({
                name: '',
                email: '',
                phone: '',
                type: 'personal'
            })
        }
    }, [contactContext, current])

    const [contact, setContact] = useState({
        name: '',
        email: '',
        phone: '',
        type: 'personal'
    })

    const { name, email, phone, type } = contact

    const onChange = (e) => {
        setContact({
            ...contact, [e.target.name]: e.target.value
        })
    }

    const onSubmit = (e) => {
        e.preventDefault()
        if (current == null) {
            addContact(contact)
            setAlert('Contact Added', 'success')
        } else {
            updateContact(contact)
            setAlert('Contact Updated', 'success')
        }
        clearAll()
    }

    const clearAll = () => {
        clearCurrentContact()
    }

    return (

        <>
            <Form onSubmit={onSubmit}>
                <h2 className='text-left mb-4'>{current ? 'Update Contact' : 'Add Contact'}</h2>
                <Form.Group as={Row}>
                    <Col sm={10}>
                        <Form.Control
                            type="text"
                            placeholder="Name"
                            name='name'
                            value={name}
                            onChange={onChange}
                            required
                        />
                    </Col>
                </Form.Group>
                <Form.Group as={Row}>
                    <Col sm={10}>
                        <Form.Control
                            type="email"
                            placeholder="Email"
                            name='email'
                            value={email}
                            onChange={onChange}
                        />
                    </Col>
                </Form.Group>
                <Form.Group as={Row}>
                    <Col sm={10}>
                        <Form.Control
                            ype="text"
                            placeholder="Phone"
                            name='phone'
                            value={phone}
                            onChange={onChange}
                        />
                    </Col>
                </Form.Group>
                <fieldset>
                    <Form.Group as={Row}>
                        <Form.Label as="legend" column sm={3}>
                            Contact Type
                        </Form.Label>
                        <Col sm={10}>
                            <Form.Check
                                type="radio"
                                label="Personal"
                                name="type"
                                value='personal'
                                checked={type === 'personal'}
                                onChange={onChange}
                            />
                            <Form.Check
                                type="radio"
                                label="Professional"
                                name="type"
                                value='professional'
                                checked={type === 'professional'}
                                onChange={onChange}
                            />
                        </Col>
                    </Form.Group>
                </fieldset>
                <Form.Group as={Row}>
                    <Col sm={{ span: 10 }}>
                        <Button type="submit" variant="info" block>{current ? 'Update Contact' : 'Add Contact'}</Button>
                    </Col>
                </Form.Group>
                {current &&
                    <Form.Group as={Row}>
                        <Col sm={{ span: 10 }}>
                            <Button type="submit" variant="info" block onClick={clearAll}>Clear</Button>
                        </Col>
                    </Form.Group>}
            </Form>
        </>

    )
}

export default ContactForm
