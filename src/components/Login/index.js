import Cookies from 'js-cookie'

import ThemeContext from '../../context/ThemeContext'
import {BGContainer} from '../StyledComponents/StyledComponents'

const Login = props => {
  if (Cookies.get('jwtToken') !== undefined) {
    const {history} = props
    history.replace('/')
  }

  const onClickLogin = () => {
    Cookies.set('jwtToken', 'dafaf', {expires: 30})
    const {history} = props
    history.replace('/')
  }

  return (
    <ThemeContext.Consumer>
      {value => (
        <BGContainer isDark={value.isDark}>
          <button onClick={onClickLogin} type="button">
            Login
          </button>
        </BGContainer>
      )}
    </ThemeContext.Consumer>
  )
}

export default Login
