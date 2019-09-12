import React from 'react'
import LoginForm from '../Components/loginForm'

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    }
    this.usernameOnchange = this.usernameOnchange.bind(this)
    this.passwordOnchange = this.passwordOnchange.bind(this)
    this.submit = this.submit.bind(this)
  }

  usernameOnchange(e) {
    this.setState({
      username: e.target.value
    })
  }
  
  passwordOnchange(e) {
    this.setState({
      password: e.target.value
    })
  }

  submit() {
    if (this.state.username === 'admin' && this.state.password === '1') {
      alert('login successfully')
      this.setState({
        username: '',
        password: ''
      })
    } else {
      alert('login failed')
    }
  }

  render() {
    return (
      <div>
      <LoginForm 
        username = {this.state.username}
        password = {this.state.password}
        usernameOnchange = {this.usernameOnchange}
        passwordOnchange = {this.passwordOnchange} 
        submit = {this.submit}
      />
      </div>
    )
  }
}

export default Login