import React, { useEffect } from 'react'
import HomeCarousel from './HomeCarousel/HomeCarousel'
import { useDispatch } from 'react-redux';
import { Button } from 'antd';
import ReactSlick from '../../components/RSlick/ReactSlick';
import './Home.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle,faFaceBook } from '@fortawesome/free-solid-svg-icons'
import { layThongTinChiTietCongViecAction } from '../../redux/action/QuanLyJobAction';

export default function Home(props) {
     const dispatch = useDispatch();
     // useEffect(() => {
     //      let {id} = props.match.params;
     //      dispatch(layThongTinChiTietCongViecAction(id))
     //      //lay thong tin url
     //      // let id  = '618d3a5895d99f001c0c0ce8'
     //      // dispatch(layThongTinCongViec(id))
     //    }, [])
     return (
          <div>
               <HomeCarousel />
               <ReactSlick />
               <div className='selling-proposition-wrapper'>
                    <div className="container">
                         <div className="flex items-center flex-col lg:flex-row  ">
                              <div className='w-full lg:w-7/12 pr-8 selling-text'>
                                   <h2 className=''>A whole world of freelance talent at your fingertips</h2>
                                   <ul>
                                        <li>
                                             <h6>
                                                  <FontAwesomeIcon icon={faCheckCircle} />
                                                  <span>"The best for every budget"</span>
                                             </h6>
                                             <p>Find high-quality services at every price point. No hourly rates, just project-based pricing.</p>
                                        </li>
                                        <li>
                                             <h6>
                                                  <FontAwesomeIcon icon={faCheckCircle} />
                                                  <span>"The best for every budget"</span>
                                             </h6>
                                             <p>Find high-quality services at every price point. No hourly rates, just project-based pricing.</p>
                                        </li>
                                        <li>
                                             <h6>
                                                  <FontAwesomeIcon icon={faCheckCircle} />
                                                  <span>"The best for every budget"</span>
                                             </h6>
                                             <p>Find high-quality services at every price point. No hourly rates, just project-based pricing.</p>
                                        </li>
                                        <li>
                                             <h6>
                                                  <FontAwesomeIcon icon={faCheckCircle} />
                                                  <span>"The best for every budget"</span>
                                             </h6>
                                             <p>Find high-quality services at every price point. No hourly rates, just project-based pricing.</p>
                                        </li>
                                   </ul>
                              </div>
                              <div className='w-full lg:w-5/12'>
                                   <div className="video-modal">
                                        <div className="picture-wrapper">
                                             <picture className='cursor-pointer'>
                                                  <img src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_700,dpr_1.0/v1/attachments/generic_asset/asset/089e3bb9352f90802ad07ad9f6a4a450-1599517407052/selling-proposition-still-1400-x1.png" alt="" />
                                             </picture>
                                        </div>
                                   </div>
                              </div>
                         </div>
                    </div>
               </div>
               <div className="main-categories">
                    <div className="container">
                         <h2>Explore the marketplace</h2>
                         <ul className='categories-list'>
                              <li className='w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/5'>
                                   <a href="#">
                                        <img src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/graphics-design.d32a2f8.svg" alt="Graphics &amp; Design" loading="lazy" />
                                        Graphics & Design
                                   </a>
                              </li>
                              <li className='w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/5'>
                                   <a href="#">
                                        <img src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/online-marketing.74e221b.svg" alt="Graphics &amp; Design" loading="lazy" />
                                        Digital Marketing
                                   </a>
                              </li>
                              <li className='w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/5'>
                                   <a href="#">
                                        <img src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/writing-translation.32ebe2e.svg" alt="Graphics &amp; Design" loading="lazy" />
                                        Writing & Translation
                                   </a>
                              </li>
                              <li className='w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/5'>
                                   <a href="#">
                                        <img src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/video-animation.f0d9d71.svg" alt="Graphics &amp; Design" loading="lazy" />
                                        Video & Animation
                                   </a>
                              </li>
                              <li className='w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/5'>
                                   <a href="#">
                                        <img src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/music-audio.320af20.svg" alt="Graphics &amp; Design" loading="lazy" />
                                        Music & Audio
                                   </a>
                              </li>
                              <li className='w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/5'>
                                   <a href="#">
                                        <img src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/programming.9362366.svg" alt="Graphics &amp; Design" loading="lazy" />
                                        Programing & Tech
                                   </a>
                              </li>
                              <li className='w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/5'>
                                   <a href="#">
                                        <img src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/business.bbdf319.svg" alt="Graphics &amp; Design" loading="lazy" />
                                        Graphics & Design
                                   </a>
                              </li>
                              <li className='w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/5'>
                                   <a href="#">
                                        <img src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/lifestyle.745b575.svg" alt="Graphics &amp; Design" loading="lazy" />
                                        Lifestyle
                                   </a>
                              </li>
                              <li className='w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/5'>
                                   <a href="#">
                                        <img src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/data.718910f.svg" alt="Graphics &amp; Design" loading="lazy" />
                                        Data
                                   </a>
                              </li>
                         </ul>
                    </div>

               </div>
               <div className="testimonial-wrapper">
                    <div className="container">
                         <div className="testimonial  flex-col lg:flex-row">
                              <div className="testimonial-modal w-full lg:w-6/12">
                                   <div className="picture-wrapper">
                                        <picture >
                                             <img src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_450,dpr_1.0/v1/attachments/generic_asset/asset/42a6fd208670a0361b38bd72b47b9317-1599519173399/testimonial-video-still-rooted.jpg" alt="" />
                                        </picture>
                                   </div>
                              </div>
                              <div className="testimonial-content w-full lg:w-6/12 text-center lg:text-left">
                                   <h5>Kay Kim, Co-Founder
                                        <span>
                                             <img className='m-auto lg:ml-2' src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/rooted-logo-x2.321d79d.png" alt="" />
                                        </span>
                                   </h5>
                                   <blockquote><i>"It's extremely exciting that Fiverr has freelancers from all over the world — it broadens the talent pool. One of the best things about Fiverr is that while we're sleeping, someone's working."</i></blockquote>
                              </div>
                         </div>
                    </div>
               </div>
               
          </div>
     )
}