import {Link} from 'react-router-dom'
// Write your JS code here
import './index.css'

const Header = () => (
  <nav className="nav-bar">
    <div className="wave-container">
      <img
        className="wave"
        alt="wave"
        src="https://assets.ccbp.in/frontend/react-js/wave-logo-img.png"
      />
      <h1 className="title">Wave</h1>
    </div>
    <ul className="menu">
      <li className="item">
        <Link className="route-link" to="/">
          Home
        </Link>
      </li>
      <li className="item">
        <Link className="route-link" to="/about">
          About
        </Link>
      </li>
      <li className="item">
        <Link className="route-link" to="/contact">
          Contact
        </Link>
      </li>
    </ul>
  </nav>
)

export default Header
