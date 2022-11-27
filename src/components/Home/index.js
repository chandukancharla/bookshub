import {Component} from 'react'
import Slider from 'react-slick'
import Cookies from 'js-cookie'
import Header from '../Header'
import './index.css'

class Home extends Component {
  state = {topBooks: []}

  componentDidMount = () => {
    this.getTopBooks()
  }

  getTopBooks = async () => {
    const jwtToken = Cookies.get('jwt_token')
    const url = 'https://apis.ccbp.in/book-hub/top-rated-books'
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }
    const response = await fetch(url, options)
    const data = await response.json()
    this.setState({topBooks: data.books})
  }

  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3,
    }
    const {topBooks} = this.state

    return (
      <div className="home-container">
        <Header />
        <div className="new-container">
          <div className="top-text-container">
            <h1 className="heading">Find Your Next Favorite Books?</h1>
            <p className="description">
              You are in the right place. Tell us what titles or genres you have
              enjoyed in the past, and we will give you surprisingly insightful
              recommendations.
            </p>
          </div>
          <div className="carousel-container">
            <div className="carousel-header">
              <h1 className="carousel-heading">Top Rated Books</h1>
              <button type="button" className="find-books-btn">
                Find Books
              </button>
            </div>
            <Slider {...settings}>
              {topBooks.map(each => (
                <div className="carousel-item">
                  <img
                    src={each.cover_pic}
                    className="carousel-image"
                    alt="carousel"
                  />
                  <h1 className="carousel-title">{each.title}</h1>
                  <p className="carousel-author">{each.author_name}</p>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    )
  }
}

export default Home
