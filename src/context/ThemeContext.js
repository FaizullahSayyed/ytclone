import React from 'react'

const ThemeContext = React.createContext({
  isDark: '',
  onChangeTheme: () => {},
})

export default ThemeContext
