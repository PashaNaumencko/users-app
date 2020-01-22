import React from 'react';
import { connect } from 'react-redux';
import validator from 'validator';
import { Segment, Header, Form, Message, Button } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import TextField from '../TextField';

import { loginRequest } from './actions';

class LoginPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
      emailError: null,
      passwordError: null,
      touched: {
        email: false,
        password: false
      }
    };
  }

  validateEmail = () => {
    const { email } = this.state;
    let emailError = null;
    if (validator.isEmpty(email)) {
      emailError = 'Required';
    } else if (!validator.isEmail(email)) {
      emailError = 'Incorrect email format';
    }
    this.setState((prevState) => ({ emailError, touched: { ...prevState.touched, email: true } }));
    return emailError;
  };

  validatePassword = () => {
    const { password } = this.state;
    let passwordError = null;
    if (validator.isEmpty(password)) {
      passwordError = 'Required';
    } else if (password.length < 8) {
      passwordError = 'Minimum length - 7 characters';
    }
    this.setState((prevState) => ({ passwordError, touched: { ...prevState.touched, password: true } }));
    return passwordError;
  };

  onEmailChange = (event, { value: email }) => this.setState({ email, emailError: null });

  onPasswordChange = (event, { value: password }) => this.setState({ password, passwordError: null });

  validateForm = () => [!this.validateEmail(), !this.validatePassword()].every(Boolean);

  onSubmit = () => {
    if (this.validateForm()) {
      const { username, password } = this.state;
      this.props.loginRequest({ username, password });
    }
  };

  render() {
    const { emailError, passwordError, touched } = this.state;
    const { loading, loginError } = this.props;

    return (
      <Segment padded style={{ minWidth: 450 }}>
        <Header as="h3" content="Login" textAlign="center" />
        <Form size="big" error={loginError} onSubmit={this.onSubmit}>
          <TextField
            label="Email"
            placeholder="Email"
            error={emailError}
            onBlur={this.validateEmail}
            onChange={this.onEmailChange}
            disabled={loading}
            touched={touched.email}
          />
          <TextField
            label="Password"
            placeholder="Password"
            type="password"
            error={passwordError}
            onBlur={this.validatePassword}
            onChange={this.onPasswordChange}
            disabled={loading}
            touched={touched.password}
          />
          <Message
            error
            header="Login Failed"
            content={loginError}
          />
          <Button type="submit" content="Login" loading={loading} />
        </Form>
      </Segment>
    );
  }
}

// LoginForm.propTypes = {
//   loading: PropTypes.bool,
//   loginRequest: PropTypes.func,
//   history: PropTypes.object
// };

const mapStateToProps = ({ authData: { loading, error } }) => ({
  loginError: error,
  loading
});

const mapDispatchToProps = {
  loginRequest
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginPage);