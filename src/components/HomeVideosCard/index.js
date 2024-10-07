import {Link} from 'react-router-dom'
import './index.css'
import ActiveContext from '../../context/ActiveContext'

const HomeVideosCard = props => {
  const {homeDetails} = props
  const {
    id,
    title,
    publishedAt,
    channelName,
    viewCount,
    thumbnailUrl,
    profileImageUrl,
  } = homeDetails

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

              <div className="profile-image-container">
                <img
                  src={profileImageUrl}
                  alt="profile"
                  className="profile-image-url"
                />

                <div className="title-container">
                  <p className="title-text">{title}</p>
                  <p className="title-text">{channelName}</p>
                  <p className="title-text">
                    {viewCount} views * {publishedAt}
                  </p>
                </div>
              </div>
            </li>
          </Link>
        )
      }}
    </ActiveContext.Consumer>
  )
}
export default HomeVideosCard
