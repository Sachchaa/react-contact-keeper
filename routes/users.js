const express = require('express')
const router = express.Router()
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const User = require('../models/User')
const config = require('config')

const { validationResult, check } = require('express-validator');

// @route       POST    api/users
// @desc        Register a user
// @access      Public

router.post(
    '/',
    [
        check('name', 'Please add a name').not().isEmpty(),
        check('email', 'Please add a valid email').isEmail(),
        check('password', 'Please enter a password with 6 or more characters').isLength({ min: 6 })

    ],
    async (req, res) => {
        const errors = validationResult(req)
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() })
        }

        const { name, email, password } = req.body

        try {
            let user = await User.findOne({ email })

            //Check whether user already exists
            if (user) {
                return res.status(400).json({ msg: 'User already exists' })
            }
            //Create the user using namne, email and password
            user = new User({
                name,
                email,
                password
            })
            //Encrypt the password using bcrypt
            const salt = await bcrypt.genSalt(10)
            user.password = await bcrypt.hash(password, salt)

            //Save data in the database
            await user.save()

            //Create token using JWT and return it
            const payload = {
                user: {
                    id: user.id
                }
            }
            jwt.sign(payload, config.get('jwtSecret'), {
                expiresIn: 360000
            }, (err, token) => {
                if (err) throw err
                res.json({ token })
            })

        } catch (err) {
            console.error(err.message)
            res.status(500).send('Server error')
        }
    })

module.exports = router