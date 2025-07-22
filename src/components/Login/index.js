import Cookies from 'js-cookie'
import {Component} from 'react'

import ThemeContext from '../../context/ThemeContext'
import {
  BGContainer,
  InputField,
  InputContainer,
  Label,
  LoginCard,
} from '../StyledComponents/StyledComponents'

import './index.css'

class Login extends Component {
  state = {
    username: '',
    password: '',
    showPass: false,
    errorMsg: {message: '', showMsg: false},
  }

  onChangeUsername = event => this.setState({username: event.target.value})

  onChangePassword = event => this.setState({password: event.target.value})

  onClickCheckbox = () =>
    this.setState(prevState => ({showPass: !prevState.showPass}))

  onSuccess = jwtToken => {
    Cookies.set('jwt_token', jwtToken, {expires: 30})
    const {history} = this.props
    history.replace('/')
  }

  onFailure = errorMsg => {
    this.setState({errorMsg: {message: errorMsg, showMsg: true}})
  }

  onClickLogin = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const userDetails = {username, password}
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const url = 'https://apis.ccbp.in/login'

    const response = await fetch(url, options)
    const data = await response.json()
    console.log(response)
    if (response.ok === true) {
      this.onSuccess(data.jwt_token)
    } else {
      this.onFailure(data.error_msg)
    }
  }

  renderUsernameInputField = () => {
    const {username} = this.state

    return (
      <InputContainer>
        <Label> USERNAME</Label>
        <InputField
          type="text"
          value={username}
          onChange={this.onChangeUsername}
          placeholder="Username"
        />
      </InputContainer>
    )
  }

  renderPasswordInputField = () => {
    const {password, showPass} = this.state

    return (
      <InputContainer>
        <Label>PASSWORD</Label>
        <InputField
          type={showPass ? 'text' : 'password'}
          value={password}
          onChange={this.onChangePassword}
          placeholder="Password"
        />
      </InputContainer>
    )
  }

  renderCheckbox = () => {
    const {showPass} = this.state

    return (
      <InputContainer>
        <div className="checkbox-container">
          <InputField
            type="checkbox"
            onChange={this.onClickCheckbox}
            placeholder="Password"
            id="showPassword"
            checked={showPass}
          />{' '}
          <Label htmlFor="showPassword">Show Password</Label>
        </div>
      </InputContainer>
    )
  }

  render() {
    const {errorMsg} = this.state

    if (Cookies.get('jwt_token') !== undefined) {
      const {history} = this.props
      history.replace('/')
    }

    return (
      <ThemeContext.Consumer>
        {value => (
          <BGContainer isDark={value.isDark}>
            <LoginCard isDark={value.isDark}>
              <div className="logo-container">
                <img
                  src={
                    value.isDark
                      ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
                      : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
                  }
                  alt="website logo"
                  className="logo"
                />
              </div>
              <div className="form-container">
                <form>
                  {this.renderUsernameInputField()}
                  {this.renderPasswordInputField()}
                  {this.renderCheckbox()}

                  {errorMsg.showMsg ? (
                    <p className="error-message">*{errorMsg.message}</p>
                  ) : null}

                  <button
                    type="submit"
                    className="login-button"
                    onClick={this.onClickLogin}
                  >
                    Login
                  </button>
                </form>
              </div>
            </LoginCard>
          </BGContainer>
        )}
      </ThemeContext.Consumer>
    )
  }
}

export default Login
