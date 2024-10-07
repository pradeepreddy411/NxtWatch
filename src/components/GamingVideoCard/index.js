import {Link} from 'react-router-dom'
import './index.css'
import ActiveContext from '../../context/ActiveContext'

const GamingVideoCard = props => {
  const {gamingDetails} = props
  const {id, title, viewCount, thumbnailUrl} = gamingDetails

  return (
    <ActiveContext.Consumer>
      {value => {
        const {isActive} = value
        const textColor = isActive ? 'dark-text' : 'white-text'

        return (
          <Link to={`/videos/${id}`} className="link">
            <li className={`home-videos-item ${textColor}`}>
              <img
                src={thumbnailUrl}
                alt="video thumbnail"
                className="thumb-image"
              />

              <p className="title-text">{title}</p>

              <p className="title-text">{viewCount} views</p>
            </li>
          </Link>
        )
      }}
    </ActiveContext.Consumer>
  )
}
export default GamingVideoCard
