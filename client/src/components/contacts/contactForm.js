import React, { useState, useContext } from 'react'
import { Form, Col, Row, Button } from 'react-bootstrap'
import ContactContext from '../../context/contact/contactContext'

const ContactForm = () => {

    const contactContex = useContext(ContactContext)

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
        contactContex.addContact(contact)
        setContact({
            name: '',
            email: '',
            phone: '',
            type: 'personal'
        })
    }

    return (

        <>
            <Form onSubmit={onSubmit}>
                <h4>Add Contact</h4>
                <Form.Group as={Row}>
                    <Col sm={10}>
                        <Form.Control
                            type="text"
                            placeholder="Name"
                            name='name'
                            value={name}
                            onChange={onChange}
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
                                checked={type === 'personal'}
                                onChange={onChange}
                            />
                            <Form.Check
                                type="radio"
                                label="Professional"
                                name="type"
                                checked={type === 'professional'}
                                onChange={onChange}
                            />
                        </Col>
                    </Form.Group>
                </fieldset>
                <Form.Group as={Row}>
                    <Col sm={{ span: 10 }}>
                        <Button type="submit" variant="info" block>Add Contact</Button>
                    </Col>
                </Form.Group>
            </Form>
        </>

    )
}

export default ContactForm
