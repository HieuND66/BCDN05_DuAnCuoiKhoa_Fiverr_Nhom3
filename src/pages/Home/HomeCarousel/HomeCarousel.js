import React from 'react'
import { Carousel } from 'antd';
import './HomeCarousel.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { useFormik } from 'formik';
import { layDSCVtheoTenAction } from '../../../redux/action/QuanLyJobAction';
import { useDispatch } from 'react-redux';
import { history } from '../../../App';

export default function HomeCarousel(props) {
  const contentStyle = {
    height: '90vh',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: 'url("https://fiverr-res.cloudinary.com/image/upload/q_auto,f_auto/v1/attachments/generic_asset/asset/bb5958e41c91bb37f4afe2a318b71599-1599344049961/bg-hero-5-900-x1.png")',
    backgroundSize: 'cover'
  };
  let dispatch = useDispatch()

  const formik = useFormik({
    initialValues: {
      name: "",
    },
    onSubmit: values => {
      dispatch(layDSCVtheoTenAction(values.name))
      if(values.name == ""){

        history.push(`/joblist`)
      } else {
        history.push(`/search/${values.name}`)
      }
    } ,

  })
  return (
    <div >
      <Carousel >
        <div >
          <div style={contentStyle} className='carousel '>
            <div className="container">
              <div className='carousel-content '>
                <h1>Find the perfect freelance services for your business</h1>
                <form onSubmit={formik.handleSubmit}>
                  <FontAwesomeIcon icon={faSearch} />
                  <input name='name' type="text" placeholder='Try building mobile app'  onChange={formik.handleChange} />
                  <button type='submit'>Search</button>
                </form>
                <div className='carousel-popular'>
                  <p>Popular:</p>
                  <ul>
                    <li>
                      <a href="#">Website Design</a>
                    </li>
                    <li>
                      <a href="#">Wordpress</a>
                    </li>
                    <li>
                      <a href="#">Logo Design</a>
                    </li>
                    <li>
                      <a href="#">NFT Art</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

          </div>
        </div>


      </Carousel>
    </div>
  )
}
