import styled from 'styled-components'

export const BGContainer = styled.div`
  background-color: ${props => (props.isDark ? '#231f20' : '#ffffff')};
  height: 100dvh;
  color: ${props => (props.isDark ? '#ffffff' : '#000000')};
  display: flex;
  justify-content: center;
  align-items: center;
`

export const ChangeTheme = styled.button`
  background-color: ${props => (props.isDark ? '#ffffff' : '#000000')};
  color: ${props => (props.isDark ? '#000000' : '#ffffff')};
`

export const LoginCard = styled.div`
  box-shadow: 0px 0px 20px ${props => (props.isDark ? '#000000' : '#ffffff')};
  padding: 20px;
  border-radius: 5px;
  width: 400px;
  height: 450px;
  background-color: ${props => (props.isDark ? '#000000' : '#ffffff')};
`

export const LogoutButton = styled.button`
  background-color: ${props => (props.isDark ? '#ffffff' : '#000000')};
  color: ${props => (props.isDark ? '#000000' : '#ffffff')};
`
export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`

export const InputField = styled.input`
  height: 40px;
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #94a3b8;
`

export const Label = styled.label`
  //   color: #94a3b8;
  font-weight: bold;
  font-size: 14px;
  margin-bottom: 10px;
  margin-top: 13px;
  color: ${props => (props.isDark ? '#000000' : '#94a3b8')};
`
