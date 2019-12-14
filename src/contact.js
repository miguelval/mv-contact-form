import './contact.css'
import React from 'react';
import sendEmail from './sendEmail'
import Button from '@material-ui/core/Button';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';

export default class Contact extends React.Component {
    state = {
        formData: {
            name: '',
            email: '',
            message: '',
        },
        submitted: false,
    }

    handleChange = (event) => {
        const { formData } = this.state;
        formData[event.target.name] = event.target.value;
        this.setState({ formData });
    }

    handleSubmit = () => {
        this.setState({ submitted: true }, () => {
            setTimeout(() => this.setState({ submitted: false }), 5000);
        });
       // const { formData } = this.state;
       // alert(this.state.formData.name);
        sendEmail(this.state.formData.email, this.state.formData.name, this.state.formData.message);
    }

    render() {
        const { formData, submitted } = this.state;
        return (
          <div
            style={{
              display: "flex",
              margin: 20,
            }}
          >
            <ValidatorForm
                ref="form"
                onSubmit={this.handleSubmit}
            >
                <h2>Contact form</h2>
                <TextValidator
                    label="Name"
                    onChange={this.handleChange}
                    name="name"
                    value={formData.name}
                    validators={['required']}
                    errorMessages={['this field is required']}
                    fullWidth
                />
                <br />
                <TextValidator
                    label="Email"
                    onChange={this.handleChange}
                    name="email"
                    value={formData.email}
                    validators={['required', 'isEmail']}
                    errorMessages={['this field is required', 'email is not valid']}
                    fullWidth 
                />
                <br />
                <TextValidator
                    multiline
                    id="message"
                    label="Message"
                    onChange={this.handleChange}
                    name="message"
                    value={formData.message}
                    validators={['required']}
                    errorMessages={['this field is required']}
                    fullWidth
                />
                <br />
                <br />
                <Button
                    color="primary"
                    variant="contained"
                    type="submit"
                    disabled={submitted}
                >
                    {
                        (submitted && 'Your message has been sent!')
                        || (!submitted && 'Submit')
                    }
                </Button>
            </ValidatorForm>
            </div>
        );
    }
}