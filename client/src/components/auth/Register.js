import React, { useContext, useState, useEffect } from 'react'
import { Card, Form, Button, Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import AlertContext from '../../context/alert/alertContext'
import AuthContext from '../../context/auth/authContext'

const Register = (props) => {
    const alertContext = useContext(AlertContext)
    const authContext = useContext(AuthContext)

    const { setAlert } = alertContext
    const { register, error, clearErrors, isAuthenticated } = authContext

    useEffect(() => {
        if (isAuthenticated) {
            props.history.push('/')
        }

        if (error === 'User already exists') {
            setAlert(error, 'danger')
            clearErrors()
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [error, isAuthenticated, props.history])

    const [user, setUser] = useState({
        name: '',
        email: '',
        password: '',
        password2: ''
    })

    const { name, email, password, password2 } = user

    const onChnage = (e) => setUser({
        ...user, [e.target.name]: e.target.value
    })

    const onSubmit = (e) => {
        e.preventDefault()
        if (password !== password2) {
            setAlert('Passwords do not match!', 'danger')
        }
        else {
            register({
                name,
                email,
                password
            })
        }

    }

    return (
        <>
            <Container className='w-100 mt-3' style={{ maxWidth: '400px' }}>
                <Card>
                    <Card.Body>
                        <h2 className='text-center mb-4'>Sign Up</h2>
                        <Form onSubmit={onSubmit}>
                            <Form.Group id='name'>
                                <Form.Label>Name</Form.Label>
                                <Form.Control type='text' name='name' value={name} onChange={onChnage} required></Form.Control>
                            </Form.Group>
                            <Form.Group id='email'>
                                <Form.Label>Email</Form.Label>
                                <Form.Control type='email' name='email' value={email} onChange={onChnage} required></Form.Control>
                            </Form.Group>
                            <Form.Group id='password'>
                                <Form.Label>Password</Form.Label>
                                <Form.Control type='password' name='password' value={password} onChange={onChnage} minLength='6' required></Form.Control>
                            </Form.Group>
                            <Form.Group id='password-confirm'>
                                <Form.Label>Password Confirmation</Form.Label>
                                <Form.Control type='password' name='password2' value={password2} onChange={onChnage} minLength='6' required></Form.Control>
                            </Form.Group>
                            <Button className='w-100' type='submit'>Sign Up</Button>
                        </Form>
                    </Card.Body>
                </Card>
                <div className='w-100 text-center mt-2'>
                    Already have an account? <Link to='/login'>Log In</Link>
                </div>
            </Container>
        </>
    )
}

export default Register
