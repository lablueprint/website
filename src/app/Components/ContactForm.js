import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from 'react';
// import toastr from 'toastr';
import emailjs from 'emailjs-com';
// import 'jquery';
import {Button, Form} from 'react-bootstrap';
import '../../App.css';

class ContactForm extends Component {
    constructor (props) {
        super(props)

        this.state = {
            name: '',
            email: '',
            npo: '',
            subject: '',
            message: '',
            errors: {
                name: '',
                email: '',
                npo: '',
                subject: '',
                message: '' 
            }
        }
        this.onChange = this.handleInputChange.bind(this);
    }

    handleInputChange (event) {
        event.preventDefault()
        const target = event.target
        const name = target.name
        const value = target.value

        this.setState({[name]: value})
    }

    validateMail () {
        let errors = {}
        let formIsValid = true

        if (!this.state.name || this.state.name.length < 3) {
            errors.name = 'Minimum 3 symbols'
            formIsValid = false
        }

        if (!this.state.subject || this.state.subject.length < 3) {
            errors.name = 'Minimum 3 symbols'
            formIsValid = false
        }

        if (!this.state.message || this.state.message.length < 10) {
            errors.name = 'Minimum 10 symbols'
            formIsValid = false
        }

        if (!this.state.email || this.state.email.length < 3) {
            errors.name = 'Minimum 3 symbols'
            formIsValid = false
        }

        this.setState({
            errors: errors
        })
        
        return formIsValid
    }

    sentMessage (event) {
        event.preventDefault()

        if (!this.validateMail()) {
            return
        }

        var templateParams = {
            contact_name: this.state.name,
            email_addr: this.state.email,
            npo_name: this.state.npo,
            subject_header: this.state.subject,
            body_content: this.state.message
        }

        emailjs.send('default_service', 'contact-to-blueprint', templateParams, 
            'user_xGEMn1TRXSR1KTm9PzqDW').then(function (response) {
                // toastr.success('Message sent successful')
                console.log('SUCCESS', response.status, response.text)
            }, function (err) {
                // toastr.error(err)
                console.log(err)
            })
        
        this.setState({
            name: '',
            email: '',
            npo: '',
            subject: '',
            message: ''
        })
    }

    render () {
        return (
            <div class="container-fluid py-5" style={formStyle}>
                <h1>Contact Us</h1> <br/>
                <Form onSubmit={this.sentMessage.bind(this)}>
                    <Form.Group controlId="formBasicName">
                        <Form.Label style={headerStyle}>Name</Form.Label>
                        <Form.Control
                            style={inputStyle}
                            name="name"
                            value={this.state.name}
                            error={this.state.errors.name} 
                            required='required'
                            onChange={this.onChange}  
                            placeholder="Joe Bruin" />
                    </Form.Group>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label style={headerStyle}>Email address</Form.Label>
                        <Form.Control 
                            style={inputStyle}
                            type="email" 
                            name="email"
                            value={this.state.email}
                            error={this.state.errors.email}
                            required='required'
                            onChange={this.onChange} 
                            placeholder="jbruin@ucla.edu" />
                    </Form.Group>
                    <Form.Group controlId="formBasicNPO">
                        <Form.Label style={headerStyle}>Organization (Optional)</Form.Label>
                        <Form.Control 
                            style={inputStyle}
                            name="npo"
                            value={this.state.npo}
                            error={this.state.errors.npo} 
                            onChange={this.onChange} 
                            defaultValue="General"
                            placeholder="UCLA" />
                    </Form.Group>
                    <Form.Group controlId="formBasicSubject">
                        <Form.Label style={headerStyle}>Subject</Form.Label>
                        <Form.Control
                            style={inputStyle}
                            name="subject"
                            value={this.state.subject}
                            error={this.state.errors.subject} 
                            required='required'
                            onChange={this.onChange} 
                            placeholder="What's your question?" />
                    </Form.Group>
                    <Form.Group controlId="formBasicMessage">
                        <Form.Label style={headerStyle}>Message</Form.Label>
                        <Form.Control 
                            as="textarea" 
                            rows="5" 
                            name="message"
                            value={this.state.message}
                            error={this.state.errors.message} 
                            required='required'
                            onChange={this.onChange} 
                            placeholder="Enter message..." />
                    </Form.Group>
                    <Button variant="light" style={buttonStyle} type="submit">
                        Submit
                    </Button>
                </Form>
            </div>
        )
    }
}

const inputStyle = {
    maxWidth: 300
}
const formStyle = {
    maxWidth: 600,
    fontFamily: 'Roboto'
}

const buttonStyle = {
    color: 'white',
    backgroundColor: '#0078e8'
}

const headerStyle = {
    fontWeight: 'bold'
}

export default ContactForm