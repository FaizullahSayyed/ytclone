import {Switch, Route, Redirect} from 'react-router-dom'
import {Component} from 'react'

import ProtectedRoute from './components/ProtectedRoute'
import Home from './components/Home'
import Login from './components/Login'
import NotFound from './components/NotFound'

import ThemeContext from './context/ThemeContext'

import './App.css'

class App extends Component {
  state = {isDark: true}

  onChangeTheme = () =>
    this.setState(prevState => ({isDark: !prevState.isDark}))

  render() {
    const {isDark} = this.state
    return (
      <ThemeContext.Provider
        value={{isDark, onChangeTheme: this.onChangeTheme}}
      >
        <Switch>
          <Route exact path="/login" component={Login} />
          <ProtectedRoute path="/" component={Home} />
          <Route path="/not-found" component={NotFound} />
          <Redirect to="not-found" />
        </Switch>
      </ThemeContext.Provider>
    )
  }
}

export default App
