import {Link} from 'react-router-dom'
import {IoMdHome, IoMdMenu} from 'react-icons/io'
import {FaFire} from 'react-icons/fa'
import {SiYoutubegaming} from 'react-icons/si'
import './index.css'
import ActiveContext from '../../context/ActiveContext'

const SideHeader = () => (
  <ActiveContext.Consumer>
    {value => {
      const {isActive} = value

      const backColor = isActive ? 'change-back' : ''

      return (
        <div className={`side-header-container ${backColor}`}>
          <ul className="list-container">
            <Link to="/">
              <li className="item-container">
                <IoMdHome size={25} />
                <p className="side-para">Home</p>
              </li>
            </Link>
            <Link to="/trending">
              <li className="item-container">
                <FaFire size={25} />
                <p className="side-para">Trending</p>
              </li>
            </Link>
            <Link to="/gaming">
              <li className="item-container">
                <SiYoutubegaming size={25} />
                <p className="side-para">Gaming</p>
              </li>
            </Link>
            <Link to="/saved">
              <li className="item-container">
                <IoMdMenu size={25} />
                <p className="side-para">Saved Videos</p>
              </li>
            </Link>
          </ul>

          <div className="media-logo-container">
            <h1 className="logo-heading">CONTACT US</h1>
            <div className="media-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
                alt="facebook logo"
                className="media-logo"
              />
              <img
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png"
                alt="twitter logo"
                className="media-logo"
              />
              <img
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png "
                alt="linked in logo"
                className="media-logo"
              />
            </div>
            <p className="media-text">
              {' '}
              Enjoy!Now to see your Channels and recommendations
            </p>
          </div>
        </div>
      )
    }}
  </ActiveContext.Consumer>
)
export default SideHeader
