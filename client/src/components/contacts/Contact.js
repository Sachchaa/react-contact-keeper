import React from 'react'
import { Card, Button } from 'react-bootstrap'
import { FaEnvelopeOpen, FaPhone } from 'react-icons/fa'
import PropTypes from 'prop-types'

const Contact = ({ contact }) => {
    const { id, name, email, phone, type } = contact

    return (
        <Card
            bg='Light'
            style={{ width: '18rem' }}
            className="mb-2"
            border={type === 'professional' ? 'success' : 'info'}
        >
            <Card.Header><h4>{name}</h4> {' - '} {type.charAt(0).toUpperCase() + type.slice(1)}</Card.Header>
            <Card.Body>
                <Card.Text>
                    <ul className='list'>
                        {email && (
                            <li>
                                <FaEnvelopeOpen /> {' '} {email}
                            </li>
                        )}
                        {phone && (
                            <li>
                                <FaPhone /> {' '} {phone}
                            </li>
                        )}
                        <p>
                            <Button variant="outline-dark">Edit</Button> {' '}
                            <Button variant="outline-danger">Delete</Button>
                        </p>
                    </ul>
                </Card.Text>
            </Card.Body>
        </Card >
    )
}

Contact.propTypes = {
    contact: PropTypes.object.isRequired,
}

export default Contact
