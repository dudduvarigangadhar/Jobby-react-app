import './index.css'

const Home = () => (
  <div className="Home-container">
    <div className="navbar-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/logo-img.png"
        alt="website logo"
        className="navbar-logo-img"
      />
      <div className="route-div-container">
        <p className="content">Home</p>
        <p className="content">Jobs</p>
      </div>
      <button className="logout-button" type="button">
        Logout
      </button>
    </div>
  </div>
)

export default Home
