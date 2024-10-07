import {Link, withRouter} from 'react-router-dom'
import Cookies from 'js-cookie'
import {BsSun} from 'react-icons/bs'
import {FaMoon} from 'react-icons/fa'
import ActiveContext from '../../context/ActiveContext'

import './index.css'

const Header = props => (
  <ActiveContext.Consumer>
    {value => {
      const {isActive, getActiveId} = value
      const bgColor = isActive && 'bg-content'

      const onClickIcon = () => {
        getActiveId()
      }

      const onClickLogout = () => {
        const {history} = props
        Cookies.remove('jwt_token')
        history.replace('./login')
      }
      console.log(isActive)
      console.log(bgColor)
      return (
        <div className={`header-container ${bgColor}`}>
          <Link to="/">
            <img
              src={
                isActive
                  ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
                  : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
              }
              alt="website logo"
              className="nxt-watch-logo"
            />
          </Link>
          <div className="icon-profile-container">
            <button
              className="moon-sun-button"
              type="button"
              onClick={onClickIcon}
            >
              {isActive ? (
                <FaMoon className="icon" />
              ) : (
                <BsSun className="icon" />
              )}
            </button>
            <img
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png "
              alt="profile"
              className="profile-image"
            />
            <button
              className="logout-button"
              type="button"
              onClick={onClickLogout}
            >
              Logout
            </button>
          </div>
        </div>
      )
    }}
  </ActiveContext.Consumer>
)

export default withRouter(Header)
