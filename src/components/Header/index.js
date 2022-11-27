import {Link} from 'react-router-dom'
import './index.css'

const Header = () => {
  const a = 'sample'
  return (
    <div className="header-container">
      <div className="logo-container">
        <img
          className="book-logo"
          src="https://res.cloudinary.com/dfbqrhoxt/image/upload/v1669528023/Group_7730_fv97n3.png"
          alt="book logo"
        />
        <h1 className="logo-text">OOK HUB</h1>
      </div>
      <div className="header-links-container">
        <ul className="header-links">
          <li className="header-link-item">
            <Link className="link" to="/">
              Home
            </Link>{' '}
          </li>
          <li className="header-link-item">
            <Link className="link" to="/bookshelves">
              Bookshelves
            </Link>{' '}
          </li>
          <li className="header-link-item">
            {' '}
            <button className="logout-btn" type="button">
              Logout
            </button>{' '}
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Header
