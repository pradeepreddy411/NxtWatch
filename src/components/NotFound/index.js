import './index.css'

const NotFound = () => (
  <div className="failure-container">
    <img
      src="https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-dark-theme-img.png"
      alt="not found"
      className="failure-image"
    />
    <h1 className="failure-heading">Page Not Found</h1>
    <p className="failure-description">
      We are Sorry the page you requested could not be found
    </p>
  </div>
)
export default NotFound
