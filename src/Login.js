import './main.css'
import React from "react";
import Button from '@material-ui/core/Button';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import { Redirect } from 'react-router-dom'
import { Auth } from "aws-amplify";

export default class Login extends React.Component {

    state = {
        formData: {
            email: '',
            password: '',
        },
        submitted: false,
        redirect: false
    }

    renderRedirect = () => {
        if (this.state.redirect) {
          return <Redirect to='/' />
        }
    }

    handleChange = (event) => {
        const { formData } = this.state;
        formData[event.target.name] = event.target.value;
        this.setState({ formData });
    }

    handleSubmit = async event => {
        this.setState({ submitted: true }, () => {
          setTimeout(() => this.setState({ submitted: false }), 5000);
        });

        // attempt to log in with the user credentials
        try {
            await Auth.signIn(this.state.formData.email, this.state.formData.password);
            localStorage.setItem('user', this.state.formData.email);
            this.setState({
              redirect: true
            })
        } catch (e) {
            alert(e.message);
        }
    }


    render() {
        const { formData, submitted } = this.state;

        // send user to main page if already logged in
        if(localStorage.getItem('user')){
            return <Redirect to='/' />
        } 
        else{
            return (
                <div className="Login">
                <ValidatorForm
                ref="form"
                onSubmit={this.handleSubmit}
                >
                <h2>Login</h2>

                {this.renderRedirect()}

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
                label="Password"
                type="password"
                onChange={this.handleChange}
                name="password"
                value={formData.password}
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
                  (submitted && 'Logging In..')
                  || (!submitted && 'Submit')
                }
                </Button>


                </ValidatorForm>
                </div>
            );
        }
    }
}