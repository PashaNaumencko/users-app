import React from 'react';
import { connect } from 'react-redux';
import validator from 'validator';
import { Segment, Header, Form, Message, Button } from 'semantic-ui-react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import TextField from '../TextField';
import { loginRequest } from './actions';

import styles from './styles.module.scss';

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
      passwordError = 'Minimum length - 8 characters';
    }
    this.setState((prevState) => ({ passwordError, touched: { ...prevState.touched, password: true } }));
    return passwordError;
  };

  onEmailChange = (event, { value: email }) => this.setState({ email });

  onPasswordChange = (event, { value: password }) => this.setState({ password });

  validateForm = () => [!this.validateEmail(), !this.validatePassword()].every(Boolean);

  onSubmit = () => {
    if (this.validateForm()) {
      const { email, password } = this.state;
      this.props.loginRequest({ email, password });
    }
  };

  render() {
    const { emailError, passwordError, touched } = this.state;
    const { loading, loginError, isAuthorized } = this.props;

    return isAuthorized ? <Redirect to="/" /> : (
      <Segment basic padded className={styles.loginFormContainer}>
        <Header as="h3" content="Login" textAlign="center" />
        <Form size="big" error={loginError} onSubmit={this.onSubmit} className={styles.formBlock}>
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

LoginPage.propTypes = {
  loading: PropTypes.bool,
  loginRequest: PropTypes.func,
  loginError: PropTypes.object,
  isAuthorized: PropTypes.bool
};

const mapStateToProps = ({ authData: { loading, error, isAuthorized } }) => ({
  loginError: error,
  loading,
  isAuthorized
});

const mapDispatchToProps = {
  loginRequest
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginPage);
