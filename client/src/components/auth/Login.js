import React, { useState, useContext, useEffect } from 'react'
import { Card, Form, Button, Alert, Container } from 'react-bootstrap'
import AlertContext from '../../context/alert/alertContext'
import AuthContext from '../../context/auth/authContext'


const Login = (props) => {
    const alertContext = useContext(AlertContext)
    const authContext = useContext(AuthContext)

    const { setAlert } = alertContext
    const { login, error, clearErrors, isAuthenticated } = authContext

    useEffect(() => {
        if (isAuthenticated) {
            props.history.push('/')
        }

        if (error === 'Invalid Credentials') {
            setAlert(error, 'danger')
            clearErrors()
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [error, isAuthenticated, props.history])

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
        login({
            email,
            password
        })
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


export default Login
