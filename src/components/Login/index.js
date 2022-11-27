import {Component} from 'react'
import Cookies from 'js-cookie'
import './index.css'

class Login extends Component {
  state = {username: '', password: '', showError: ''}

  onChangeUsername = event => {
    this.setState({username: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  onSubmit = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const userDetails = {username, password}
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(url, options)
    const data = await response.json()
    if (response.ok === true) {
      Cookies.set('jwt_token', data.jwt_token, 30)
      const {history} = this.props
      history.replace('/')
      this.setState({showError: ''})
    } else {
      this.setState({showError: data.error_msg})
    }
  }

  render() {
    const {showError} = this.state

    return (
      <div className="login-page-container">
        <div className="image-container">
          <br />
        </div>
        <div className="login-form-container">
          <form className="login-form" onSubmit={this.onSubmit}>
            <div className="logo-container">
              <img
                className="book-logo"
                src="https://res.cloudinary.com/dfbqrhoxt/image/upload/v1669528023/Group_7730_fv97n3.png"
                alt="book logo"
              />
              <h1 className="logo-text">OOK HUB</h1>
            </div>
            <div className="fields-container">
              <label className="label" htmlFor="username">
                Username*
              </label>
              <input
                onChange={this.onChangeUsername}
                id="username"
                className="input-container"
                type="text"
              />
            </div>
            <div className="fields-container">
              <label className="label" htmlFor="password">
                Password*
              </label>
              <input
                id="password"
                className="input-container"
                type="password"
                onChange={this.onChangePassword}
              />
            </div>
            <div className="error-msg-container">
              <p className="error-msg">{showError}</p>
            </div>
            <div className="btn-container">
              <button type="submit" className="login-btn">
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    )
  }
}

export default Login
