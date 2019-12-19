import React, { Component } from 'react';
import { Button, Form } from 'react-bootstrap';
import EmailJS from 'emailjs-com';

export default class ContactForm extends Component {
  constructor(props) {
    super(props);

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
        message: '',
      },
    };

    this.onSubmit = this.onSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  onSubmit(event) {
    event.preventDefault();
    // eslint-disable-next-line object-curly-newline
    const { name, email, npo, subject, message } = this.state;

    if (!this.validateMail()) {
      return;
    }

    const templateParams = {
      contact_name: name,
      email_addr: email,
      npo_name: (npo.length !== 0) ? npo : 'General',
      subject_header: subject,
      body_content: message,
    };

    EmailJS.send(
      'default_service',
      'contact-to-blueprint',
      templateParams,
      'user_xGEMn1TRXSR1KTm9PzqDW',
    ).then(
      (response) => {
        console.log('SUCCESS', response.status, response.text);
      },
      (err) => {
        console.err(err);
      },
    );

    this.setState({
      name: '',
      email: '',
      npo: '',
      subject: '',
      message: '',
    });
  }

  onChange(event) {
    event.preventDefault();
    const { name, value } = event.target;

    this.setState({ [name]: value });
  }

  validateMail() {
    const errors = {};
    // eslint-disable-next-line object-curly-newline
    const { name, subject, message, email } = this.state;
    let formIsValid = true;

    if (!name || name.length < 3) {
      errors.name = 'Minimum 3 symbols';
      formIsValid = false;
    }

    if (!subject || subject.length < 3) {
      errors.name = 'Minimum 3 symbols';
      formIsValid = false;
    }

    if (!message || message.length < 10) {
      errors.name = 'Minimum 10 symbols';
      formIsValid = false;
    }

    if (!email || email.length < 3) {
      errors.name = 'Minimum 3 symbols';
      formIsValid = false;
    }

    this.setState({ errors });

    return formIsValid;
  }

  render() {
    // eslint-disable-next-line object-curly-newline
    const { name, email, npo, subject, message, errors } = this.state;

    return (
      <div className="container-fluid py-5 contact-form">
        <h1>Contact Us</h1>
        <br />
        <Form onSubmit={this.onSubmit}>
          <Form.Group controlId="formBasicName">
            <Form.Label>Name</Form.Label>
            <Form.Control
              name="name"
              value={name}
              error={errors.name}
              required="required"
              onChange={this.onChange}
              placeholder="Joe Bruin"
            />
          </Form.Group>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              name="email"
              value={email}
              error={errors.email}
              required="required"
              onChange={this.onChange}
              placeholder="jbruin@ucla.edu"
            />
          </Form.Group>
          <Form.Group controlId="formBasicNPO">
            <Form.Label>Organization (Optional)</Form.Label>
            <Form.Control
              name="npo"
              value={npo}
              error={errors.npo}
              onChange={this.onChange}
              placeholder="UCLA"
            />
          </Form.Group>
          <Form.Group controlId="formBasicSubject">
            <Form.Label>Subject</Form.Label>
            <Form.Control
              name="subject"
              value={subject}
              error={errors.subject}
              required="required"
              onChange={this.onChange}
              placeholder="What's your question?"
            />
          </Form.Group>
          <Form.Group controlId="formBasicMessage">
            <Form.Label>Message</Form.Label>
            <Form.Control
              as="textarea"
              rows="5"
              name="message"
              value={message}
              error={errors.message}
              required="required"
              onChange={this.onChange}
              placeholder="Enter message..."
              className="textarea"
            />
          </Form.Group>
          <Button variant="light" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    );
  }
}
