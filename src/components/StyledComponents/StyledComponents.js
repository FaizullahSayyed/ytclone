import styled from 'styled-components'

export const BGContainer = styled.div`
  background-color: ${props => (props.isDark ? '#000000' : '#ffffff')};
  height: 100dvh;
  color: ${props => (props.isDark ? '#ffffff' : '#000000')};
`

export const ChangeTheme = styled.button`
  background-color: ${props => (props.isDark ? '#ffffff' : '#000000')};
  color: ${props => (props.isDark ? '#000000' : '#ffffff')};
`

export const LogoutButton = styled.button`
  background-color: ${props => (props.isDark ? '#ffffff' : '#000000')};
  color: ${props => (props.isDark ? '#000000' : '#ffffff')};
`
