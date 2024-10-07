import {Component} from 'react'
import {Redirect} from 'react-router-dom'
import Cookies from 'js-cookie'
import './index.css'

class Login extends Component {
  state = {
    showPassword: false,
    showError: false,
    username: '',
    password: '',
    errorMsg: '',
  }

  getSubmittedSuccess = jwtToken => {
    const {history} = this.props
    Cookies.set('jwt_token', jwtToken, {expires: 8})
    history.replace('/')
  }

  getSubmitFailure = errorMsg => {
    this.setState(prevState => ({showError: !prevState.showError, errorMsg}))
  }

  onSubmitLoginForm = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const userDetails = {username, password}
    const url = 'https://apis.ccbp.in/login'

    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(url, options)
    console.log(response)
    const data = await response.json()
    if (response.ok === true) {
      this.getSubmittedSuccess(data.jwt_token)
    } else {
      this.getSubmitFailure(data.error_msg)
    }
  }

  onChangePassword = event => {
    this.setState({
      password: event.target.value,
    })
  }

  onChangeUserName = event => {
    this.setState({
      username: event.target.value,
    })
  }

  onChangeCheckBox = () => {
    this.state(prevState => ({
      showPassword: !prevState.showPassword,
    }))
  }

  render() {
    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }

    const {showPassword, errorMsg, showError, username, password} = this.state
    console.log(showPassword)
    const checkBox = showPassword ? 'text' : 'password'

    return (
      <div className="login-container">
        <div className="responsive-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
            alt="logo"
            className="nxt-logo"
          />
          <form className="form-container" onSubmit={this.onSubmitLoginForm}>
            <label className="label" htmlFor="username">
              USERNAME
            </label>
            <input
              id="username"
              type="text"
              placeholder="Username"
              className="input-element"
              value={username}
              onChange={this.onChangeUserName}
            />
            <label className="label" htmlFor="password">
              PASSWORD
            </label>
            <input
              id="password"
              type={checkBox}
              placeholder="Password"
              className="input-element"
              value={password}
              onChange={this.onChangePassword}
            />
            <div>
              <input
                id="showPassword"
                type="checkbox"
                value={showPassword}
                className="check-box-input"
                onChange={this.onChangeCheckBox}
              />
              <label className="label-check-box" htmlFor="showPassword">
                Show Password
              </label>
            </div>
            <button className="login-button" type="submit">
              Login
            </button>
            {showError && <p>{errorMsg}</p>}
          </form>
        </div>
      </div>
    )
  }
}
export default Login
