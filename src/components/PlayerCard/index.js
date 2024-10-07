import ReactPlayer from 'react-player'
import {AiOutlineDislike, AiOutlineLike} from 'react-icons/ai'
import './index.css'

const PlayerCard = props => {
  const {itemVideos, isLiked, isDisliked, onClickLike, onClickDislike} = props
  const {
    videoUrl,
    description,
    viewCount,
    publishedAt,
    profileImageUrl,
    subscriberCount,
    title,
    channelName,
  } = itemVideos

  const onLike = () => {
    onClickLike()
  }
  const onDislike = () => {
    onClickDislike()
  }

  const isTick = isLiked ? '#64748b' : '#2563eb'
  const isNotTick = isDisliked ? '#64748b' : '#2563eb'
  console.log(isTick)
  return (
    <div>
      <ReactPlayer url={videoUrl} />
      <p>{title}</p>
      <div>
        <p>
          {viewCount} views * {publishedAt}
        </p>

        <div className="icon-container">
          <button
            type="button"
            className="icon-button"
            onClick={onLike}
            background-color={`${isTick}`}
          >
            <AiOutlineLike /> Like
          </button>
          <button
            type="button"
            className="icon-button"
            onClick={onDislike}
            background-color={`${isNotTick}`}
          >
            <AiOutlineDislike />
            Dislike
          </button>
          <button type="button" className="icon-button">
            Saved
          </button>
        </div>
      </div>
      <hr horizontal-line />
      <div>
        <img src={profileImageUrl} alt="channel logo" />
        <div>
          <p>{channelName}</p>
          <p>{subscriberCount}</p>
        </div>
      </div>
      <p>{description}</p>
    </div>
  )
}
export default PlayerCard
