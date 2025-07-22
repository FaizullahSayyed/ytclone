import Cookies from 'js-cookie'
import {Redirect} from 'react-router-dom'
import {
  BGContainer,
  ChangeTheme,
  LogoutButton,
} from '../StyledComponents/StyledComponents'
import ThemeContext from '../../context/ThemeContext'
import Header from '../Header'

const Home = props => {
  if (Cookies.get('jwt_token') === undefined) {
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
          Cookies.remove('jwt_token')
          const {history} = props
          history.replace('/login')
        }

        return (
          <BGContainer isDark={isDark} home>
            <Header />
            <div>Home</div>
          </BGContainer>
        )
      }}
    </ThemeContext.Consumer>
  )
}
export default Home
