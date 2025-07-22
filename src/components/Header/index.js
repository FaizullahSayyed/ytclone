import {FaMoon, FaSun} from 'react-icons/fa'

import ChangeTheme from '../../context/ThemeContext'
import {
  HeaderContainer,
  ChangeThemeButton,
} from '../StyledComponents/StyledComponents'

const Header = () => (
  <ChangeTheme.Consumer>
    {value => {
      const {isDark, onChangeTheme} = value

      const onClickChangeTheme = () => onChangeTheme()

      return (
        <HeaderContainer isDark={isDark}>
          <div className="logo-container">
            <img
              src={
                value.isDark
                  ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
                  : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
              }
              alt="website logo"
            />
          </div>
          <nav>
            <ul className="nav-container">
              <li className="change-theme-button">
                <ChangeThemeButton type="button" onClick={onClickChangeTheme}>
                  {isDark ? (
                    <FaSun size={24} color="#f1c40f" />
                  ) : (
                    <FaMoon size={24} color="#2c3e50" />
                  )}
                </ChangeThemeButton>
              </li>
            </ul>
          </nav>
        </HeaderContainer>
      )
    }}
  </ChangeTheme.Consumer>
)

export default Header
