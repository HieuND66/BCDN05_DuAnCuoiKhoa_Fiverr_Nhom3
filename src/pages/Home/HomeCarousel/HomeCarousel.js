import React from 'react'
import { Carousel } from 'antd';
import './HomeCarousel.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

export default function HomeCarousel(props) {
  const contentStyle = {
    height: '90vh',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: 'url("https://fiverr-res.cloudinary.com/image/upload/q_auto,f_auto/v1/attachments/generic_asset/asset/bb5958e41c91bb37f4afe2a318b71599-1599344049961/bg-hero-5-900-x1.png")',
    backgroundSize: 'cover'
  };
  return (
    <div >
      <Carousel >
        <div >
          <div style={contentStyle} className='carousel '>
            <div className="container">
              <div className='carousel-content '>
                <h1>Find the perfect freelance services for your business</h1>
                <form >
                  <FontAwesomeIcon icon={faSearch} />
                  <input type="text" placeholder='Try building mobile app' />
                  <button type='button'>Search</button>
                </form>
                <div className='carousel-popular'>
                  <p>Popular:</p>
                  <ul>
                    <li>
                      <a href="#">Website Design</a>
                    </li>
                    <li>
                      <a href="#">Website Design</a>
                    </li>
                    <li>
                      <a href="#">Website Design</a>
                    </li>
                    <li>
                      <a href="#">Website Design</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

          </div>
        </div>
        <div>
          <h3 style={contentStyle}>2</h3>
        </div>
        <div>
          <h3 style={contentStyle}>3</h3>
        </div>

      </Carousel>
    </div>
  )
}
