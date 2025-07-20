import Cookies from 'js-cookie'
import {Component} from 'react'

import ThemeContext from '../../context/ThemeContext'
import {
  BGContainer,
  InputField,
  InputContainer,
  Label,
} from '../StyledComponents/StyledComponents'

import './index.css'

class Login extends Component {
  state = {username: '', password: '', showPass: false}

  onChangeUsername = event => this.setState({username: event.target.value})

  onChangePassword = event => this.setState({password: event.target.value})

  onClickCheckbox = () =>
    this.setState(prevState => ({showPass: !prevState.showPass}))

  onClickLogin = () => {
    Cookies.set('jwtToken', 'dafaf', {expires: 30})
    const {history} = this.props
    history.replace('/')
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
    const {password} = this.state

    return (
      <InputContainer>
        <Label>PASSWORD</Label>
        <InputField
          type="password"
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
        <div>
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
    if (Cookies.get('jwtToken') !== undefined) {
      const {history} = this.props
      history.replace('/')
    }

    return (
      <ThemeContext.Consumer>
        {value => (
          <BGContainer isDark={value.isDark}>
            <div className="login-card">
              <div className="logo-container">
                <img
                  src={
                    value.isDark
                      ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
                      : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
                  }
                  alt="next watch"
                  className="logo"
                />
              </div>
              <div className="form-container">
                <form>
                  {this.renderUsernameInputField()}
                  {this.renderPasswordInputField()}
                  {this.renderCheckbox()}
                  <button type="submit">Login</button>
                </form>
              </div>
            </div>
          </BGContainer>
        )}
      </ThemeContext.Consumer>
    )
  }
}

export default Login
