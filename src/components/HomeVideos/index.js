import HomeVideosCard from '../HomeVideosCard'
import './index.css'
import ActiveContext from '../../context/ActiveContext'

const HomeVideos = props => {
  const {homeVideos, onRetry} = props
  const videoCount = homeVideos.length

  return (
    <ActiveContext.Consumer>
      {value => {
        const {isActive} = value

        const onClickRetry = () => {
          onRetry()
        }
        const textColor = isActive ? 'dark-text' : 'white-text'

        return videoCount > 0 ? (
          <ul className="homeVideos-List">
            {homeVideos.map(eachItem => (
              <HomeVideosCard key={eachItem.id} homeDetails={eachItem} />
            ))}
          </ul>
        ) : (
          <div className={`failure-container ${textColor}`}>
            <img
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png"
              alt="no videos"
              className="failure-image"
            />
            <h1 className="failure-heading">No Search Result Found</h1>
            <p className="failure-description">
              Try different key word or remove the search filter
            </p>
            <button
              type="button"
              onClick={onClickRetry}
              className="retry-button"
            >
              Retry
            </button>
          </div>
        )
      }}
    </ActiveContext.Consumer>
  )
}
export default HomeVideos
