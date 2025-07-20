import Cookies from 'js-cookie'
import {Redirect} from 'react-router-dom'
import {
  BGContainer,
  ChangeTheme,
  LogoutButton,
} from '../StyledComponents/StyledComponents'
import ThemeContext from '../../context/ThemeContext'

const Home = props => {
  if (Cookies.get('jwtToken') === undefined) {
    return <Redirect to="/login" />
  }

  return (
    <ThemeContext.Consumer>
      {value => {
        const {isDark, onChangeTheme} = value

        const changeTheme = () => {
          onChangeTheme()
        }

        const onClickLogout = () => {
          Cookies.remove('jwtToken')
          const {history} = props
          history.replace('/login')
        }

        return (
          <BGContainer isDark={isDark}>
            Home{' '}
            <ChangeTheme onClick={changeTheme} isDark={isDark}>
              Change Theme
            </ChangeTheme>
            <LogoutButton onClick={onClickLogout} isDark={isDark}>
              Logout
            </LogoutButton>
          </BGContainer>
        )
      }}
    </ThemeContext.Consumer>
  )
}
export default Home
