import React, { useContext } from 'react'
import { Card, Button } from 'react-bootstrap'
import { FaEnvelopeOpen, FaPhone } from 'react-icons/fa'
import PropTypes from 'prop-types'
import ContactContext from '../../context/contact/contactContext'

const Contact = ({ contact }) => {

    const contactContext = useContext(ContactContext)

    const { deleteContact, setCurrentContact, clearCurrentContact } = contactContext

    const { _id, name, email, phone, type } = contact

    const onDelete = () => {
        deleteContact(_id)
        clearCurrentContact()
    }

    return (
        <Card
            bg='Light'
            style={{ width: '30rem' }}
            className="mb-2"
            border={type === 'professional' ? 'success' : 'info'}
        >
            <Card.Header><h4 className='text-left mb-4'>{name}</h4> {' - '} {type.charAt(0).toUpperCase() + type.slice(1)}</Card.Header>
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
                            <Button variant="outline-dark" onClick={() => setCurrentContact(contact)}>Edit</Button> {' '}
                            <Button variant="outline-danger" onClick={onDelete}>Delete</Button>
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
