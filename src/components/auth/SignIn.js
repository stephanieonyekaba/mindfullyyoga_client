import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { signIn } from '../../api/auth'
import messages from '../shared/AutoDismissAlert/messages'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import './Signin.css'


const SignIn = (props) => {
	// constructor(props) {
	// 	super(props)

	// 	this.state = {
	// 		email: '',
	// 		password: '',
	// 	}
	// }
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const navigate = useNavigate()

	// handleChange = (event) =>
	// 	this.setState({
	// 		[event.target.name]: event.target.value,
	// 	})

	const onSignIn = (event) => {
		event.preventDefault()
        console.log('the props', props)
		const { msgAlert, setUser } = props

        const credentials = {email, password}

		signIn(credentials)
			.then((res) => setUser(res.data.user))
			.then(() =>
				console.log("signed in")
			)
			.then(() => navigate('/home'))
			.catch((error) => {
                setEmail('')
                setPassword('')
				msgAlert({
					heading: 'Sign In Failed with error: ' + error.message,
					message: messages.signInFailure,
					variant: 'danger',
				})
			})
	}

    return (
        <> 
<div className='signin'> 
<div className='signin_wrapper'> 
    <div class='row'>
        <div class='column'>
            <div className='signin_image'>
            <span className='signin_slogan'>
                <h1>Mindful</h1>
                <p>Breath in.. Breath out</p>
            </span>
                
                <img src="https://i.ibb.co/W22BsYP/Screen-Shot-2022-09-05-at-9-40-55-PM.png"></img>
            </div>
        </div>

        {/* //THIS HOLDS LOGIN INFO // */}
    <div class='column'>
        <div className='signin_container'>
            <div className='col-lg-10 col-md-20 mx-auto mt-5'>
                <h1>Sign In</h1>
                <Form onSubmit={onSignIn}>
                    <Form.Group controlId='email'>
                      
                    <Form.Control
                            required
                            type='email'
                            name='email'
                            value={email}
                            placeholder='Enter email'
                            onChange={e => setEmail(e.target.value)}
                        />
                    </Form.Group>
                    <Form.Group controlId='password'>
                        <Form.Control
                            required
                            name='password'
                            value={password}
                            type='password'
                            placeholder='Password'
                            onChange={e => setPassword(e.target.value)}
                        />
                    </Form.Group>
                    <br></br>
                <div className='signin_button_container'>
                    <Button variant='dark' type='submit'>
                        Submit
                    </Button>

                </div>
                </Form>
            </div>
        </div>
        </div>


    </div>
</div> 
</div>

 
        </>
    )
}

export default SignIn



