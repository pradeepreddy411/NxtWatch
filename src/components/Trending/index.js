import {Component} from 'react'
import {Redirect} from 'react-router-dom'
import Cookies from 'js-cookie'
import {FaSearch} from 'react-icons/fa'
import Loader from 'react-loader-spinner'
import Header from '../Header'
import SideHeader from '../SideHeader'
import HomeVideos from '../HomeVideos'

import './index.css'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class Trending extends Component {
  state = {
    apiStatus: apiStatusConstants.initial,
    searchInput: '',
    Videos: [],
  }

  componentDidMount() {
    this.getVideos()
  }

  onChangeSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  getVideos = async () => {
    this.setState({
      apiStatus: apiStatusConstants.inProgress,
    })
    const apiUrl = 'https://apis.ccbp.in/videos/trending'
    const jwtToken = Cookies.get('jwt_token')
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }
    const response = await fetch(apiUrl, options)
    const data = await response.json()
    if (response.ok === true) {
      const updatedData = data.videos.map(eachVideo => ({
        id: eachVideo.id,
        publishedAt: eachVideo.published_at,
        thumbnailUrl: eachVideo.thumbnail_url,
        title: eachVideo.title,
        viewCount: eachVideo.view_count,
        channelName: eachVideo.channel.name,
        profileImageUrl: eachVideo.channel.profile_image_url,
      }))
      this.setState({
        Videos: updatedData,
        apiStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({
        apiStatus: apiStatusConstants.failure,
      })
    }
  }

  onRetry = () => {
    this.setState({searchInput: ''}, this.getVideos)
  }

  renderStatusSuccess = () => {
    const {Videos} = this.state

    return <HomeVideos homeVideos={Videos} onRetry={this.onRetry} />
  }

  renderStatusLoading = () => (
    <div data-testid="loader" className="loader">
      <Loader type="ThreeDots" color="#007BFF" height={30} width={30} />
    </div>
  )

  renderStatusFailure = () => (
    <div className="failure-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png"
        alt="failure view"
        className="failure-image"
      />
      <h1 className="failure-heading">Oops! Something Went Wrong</h1>
      <p className="failure-description">
        We are having some trouble shoots to complete request
      </p>
      <p className="failure-description">Please try Again</p>
      <button className="retry-button" type="button" onClick={this.onRetry}>
        Retry
      </button>
    </div>
  )

  renderGetDisplay = () => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case apiStatusConstants.success:
        return this.renderStatusSuccess()
      case apiStatusConstants.failure:
        return this.renderStatusFailure()
      case apiStatusConstants.inProgress:
        return this.renderStatusLoading()
      default:
        return null
    }
  }

  render() {
    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken === undefined) {
      return <Redirect to="/login" />
    }

    const {searchInput} = this.state

    return (
      <div className="home-container">
        <Header />
        <div className="side-container">
          <SideHeader />
          <div className="success-container">
            <div className="search-container">
              <div className="card-container">
                <input
                  type="search"
                  placeholder="Search"
                  value={searchInput}
                  onChange={this.onChangeSearchInput}
                  className="search-element"
                />
                <button className="search-button" type="button">
                  <FaSearch />
                </button>
              </div>
            </div>
            {this.renderGetDisplay()}
          </div>
        </div>
      </div>
    )
  }
}

export default Trending
