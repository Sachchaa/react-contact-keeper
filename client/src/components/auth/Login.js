import React, { useState } from 'react'
import { Card, Form, Button, Alert, Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'


const Login = (props) => {
    const [user, setUser] = useState({
        email: '',
        password: ''
    })

    const { email, password } = user

    const onChnage = (e) => setUser({
        ...user, [e.target.name]: e.target.value
    })

    const onSubmit = (e) => {
        e.preventDefault()
        console.log('User Login')
    }

    return (
        <>
            <Container className='w-100 mt-3' style={{ maxWidth: '400px' }}>
                <Card>
                    <Card.Body>
                        <h2 className='text-center mb-4'>Log In</h2>
                        <Form onSubmit={onSubmit}>
                            <Form.Group id='email'>
                                <Form.Label>Email</Form.Label>
                                <Form.Control type='email' name='email' value={email} onChange={onChnage} required></Form.Control>
                            </Form.Group>
                            <Form.Group id='password'>
                                <Form.Label>Password</Form.Label>
                                <Form.Control type='password' name='password' value={password} onChange={onChnage} required></Form.Control>
                            </Form.Group>
                            <Button className='w-100' type='submit'>Log In</Button>
                        </Form>
                    </Card.Body>
                </Card>
            </Container>
        </>
    )
}

Login.propTypes = {

}

export default Login
