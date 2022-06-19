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
     useEffect(() => {
          let {id} = props.match.params;
          dispatch(layThongTinChiTietCongViecAction(id))
          //lay thong tin url
          // let id  = '618d3a5895d99f001c0c0ce8'
          // dispatch(layThongTinCongViec(id))
        }, [])
     return (
          <div>
               <HomeCarousel />
               <ReactSlick />
               <div className='selling-proposition-wrapper'>
                    <div className="container">
                         <div className="flex items-center  ">
                              <div className='col-15-xs col-7-md selling-text'>
                                   <h2>A whole world of freelance talent at your fingertips</h2>
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
                              <div className='col-15-xs col-8-md'>
                                   <div className="video-modal">
                                        <div className="picture-wrapper">
                                             <picture >
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
                              <li>
                                   <a href="#">
                                        <img src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/graphics-design.d32a2f8.svg" alt="Graphics &amp; Design" loading="lazy" />
                                        Graphics & Design
                                   </a>
                              </li>
                              <li>
                                   <a href="#">
                                        <img src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/graphics-design.d32a2f8.svg" alt="Graphics &amp; Design" loading="lazy" />
                                        Graphics & Design
                                   </a>
                              </li>
                              <li>
                                   <a href="#">
                                        <img src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/graphics-design.d32a2f8.svg" alt="Graphics &amp; Design" loading="lazy" />
                                        Graphics & Design
                                   </a>
                              </li>
                              <li>
                                   <a href="#">
                                        <img src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/graphics-design.d32a2f8.svg" alt="Graphics &amp; Design" loading="lazy" />
                                        Graphics & Design
                                   </a>
                              </li>
                              <li>
                                   <a href="#">
                                        <img src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/graphics-design.d32a2f8.svg" alt="Graphics &amp; Design" loading="lazy" />
                                        Graphics & Design
                                   </a>
                              </li>
                              <li>
                                   <a href="#">
                                        <img src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/graphics-design.d32a2f8.svg" alt="Graphics &amp; Design" loading="lazy" />
                                        Graphics & Design
                                   </a>
                              </li>
                              <li>
                                   <a href="#">
                                        <img src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/graphics-design.d32a2f8.svg" alt="Graphics &amp; Design" loading="lazy" />
                                        Graphics & Design
                                   </a>
                              </li>
                         </ul>
                    </div>

               </div>
               <div className="testimonial-wrapper">
                    <div className="container">
                         <div className="testimonial">
                              <div className="testimonial-modal">
                                   <div className="picture-wrapper">
                                        <picture >
                                             <img src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_450,dpr_1.0/v1/attachments/generic_asset/asset/42a6fd208670a0361b38bd72b47b9317-1599519173399/testimonial-video-still-rooted.jpg" alt="" />
                                        </picture>
                                   </div>
                              </div>
                              <div className="testimonial-content ">
                                   <h5>Kay Kim, Co-Founder
                                        <span>
                                             <img src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/rooted-logo-x2.321d79d.png" alt="" />
                                        </span>
                                   </h5>
                                   <blockquote><i>"It's extremely exciting that Fiverr has freelancers from all over the world — it broadens the talent pool. One of the best things about Fiverr is that while we're sleeping, someone's working."</i></blockquote>
                              </div>
                         </div>
                    </div>
               </div>
               <footer>
                    <div className="container">
                         <div className="footer-content">
                              <div className="footer-top">
                                   <div className="footer-item">
                                        <h6>Categories</h6>
                                        <ul>
                                             <li><a href="#">Graphics & Design</a></li>
                                             <li><a href="#">Graphics & Design</a></li>
                                             <li><a href="#">Graphics & Design</a></li>
                                             <li><a href="#">Graphics & Design</a></li>
                                             <li><a href="#">Graphics & Design</a></li>
                                             <li><a href="#">Graphics & Design</a></li>
                                        </ul>
                                   </div>
                                   <div className="footer-item">
                                        <h6>Categories</h6>
                                        <ul>
                                             <li><a href="#">Graphics & Design</a></li>
                                             <li><a href="#">Graphics & Design</a></li>
                                             <li><a href="#">Graphics & Design</a></li>
                                             <li><a href="#">Graphics & Design</a></li>
                                             <li><a href="#">Graphics & Design</a></li>
                                             <li><a href="#">Graphics & Design</a></li>
                                        </ul>
                                   </div>
                                   <div className="footer-item">
                                        <h6>Categories</h6>
                                        <ul>
                                             <li><a href="#">Graphics & Design</a></li>
                                             <li><a href="#">Graphics & Design</a></li>
                                             <li><a href="#">Graphics & Design</a></li>
                                             <li><a href="#">Graphics & Design</a></li>
                                             <li><a href="#">Graphics & Design</a></li>
                                             <li><a href="#">Graphics & Design</a></li>
                                        </ul>
                                   </div>
                                   <div className="footer-item">
                                        <h6>Categories</h6>
                                        <ul>
                                             <li><a href="#">Graphics & Design</a></li>
                                             <li><a href="#">Graphics & Design</a></li>
                                             <li><a href="#">Graphics & Design</a></li>
                                             <li><a href="#">Graphics & Design</a></li>
                                             <li><a href="#">Graphics & Design</a></li>
                                             <li><a href="#">Graphics & Design</a></li>
                                        </ul>
                                   </div>
                                   <div className="footer-item">
                                        <h6>Categories</h6>
                                        <ul>
                                             <li><a href="#">Graphics & Design</a></li>
                                             <li><a href="#">Graphics & Design</a></li>
                                             <li><a href="#">Graphics & Design</a></li>
                                             <li><a href="#">Graphics & Design</a></li>
                                             <li><a href="#">Graphics & Design</a></li>
                                             <li><a href="#">Graphics & Design</a></li>
                                        </ul>
                                   </div>
                              </div>
                              <div className="footer-bottom">
                                   <div className="footer-left flex items-center">
                                        <a href="/?source=top_nav" className="site-logo">
                                        <svg width="91" height="27" viewBox="0 0 91 27" fill="none" xmlns="http://www.w3.org/2000/svg"><g fill="#7A7D85"><path d="m82.9 13.1h-3.2c-2.1 0-3.2 1.5-3.2 4.1v9.3h-6.1v-13.4h-2.6c-2.1 0-3.2 1.5-3.2 4.1v9.3h-6.1v-18.4h6.1v2.8c1-2.2 2.4-2.8 4.4-2.8h7.4v2.8c1-2.2 2.4-2.8 4.4-2.8h2v5zm-25.6 5.6h-12.6c.3 2.1 1.6 3.2 3.8 3.2 1.6 0 2.8-.7 3.1-1.8l5.4 1.5c-1.3 3.2-4.6 5.1-8.5 5.1-6.6 0-9.6-5.1-9.6-9.5 0-4.3 2.6-9.4 9.2-9.4 7 0 9.3 5.2 9.3 9.1 0 .9 0 1.4-.1 1.8zm-5.9-3.5c-.1-1.6-1.3-3-3.3-3-1.9 0-3.1.8-3.4 3zm-23.1 11.3h5.3l6.7-18.3h-6.1l-3.2 10.7-3.4-10.8h-6.1zm-24.9 0h6v-13.4h5.7v13.4h6v-18.4h-11.6v-1.1c0-1.2.9-2 2.3-2h3.5v-5h-4.4c-4.5 0-7.5 2.7-7.5 6.6v1.5h-3.4v5h3.4z"></path></g><g fill="#7A7D85"><path d="m90.4 23.3c0 2.1-1.6 3.7-3.8 3.7s-3.8-1.6-3.8-3.7 1.6-3.7 3.8-3.7c2.2-.1 3.8 1.5 3.8 3.7zm-.7 0c0-1.8-1.3-3.1-3.1-3.1s-3.1 1.3-3.1 3.1 1.3 3.1 3.1 3.1 3.1-1.4 3.1-3.1zm-1.7.8.1.9h-.7l-.1-.9c0-.3-.2-.5-.5-.5h-.8v1.4h-.7v-3.5h1.4c.7 0 1.2.4 1.2 1.1 0 .4-.2.6-.5.8.4.1.5.3.6.7zm-1.9-1h.7c.4 0 .5-.3.5-.5 0-.3-.2-.5-.5-.5h-.7z"></path></g></svg>
                                        </a>
                                        <span>Fiverr International Ltd. 2022</span>
                                   </div>
                                   <div className="footer-right">
                                        <ul>
                                             <li><a href="#" className='social-icon'>
                                             <svg width="20" height="17" viewBox="0 0 20 17" xmlns="http://www.w3.org/2000/svg"><path d="M20 1.875C19.25 2.25 18.5 2.375 17.625 2.5C18.5 2 19.125 1.25 19.375 0.25C18.625 0.75 17.75 1 16.75 1.25C16 0.5 14.875 0 13.75 0C11.625 0 9.75 1.875 9.75 4.125C9.75 4.5 9.75 4.75 9.875 5C6.5 4.875 3.375 3.25 1.375 0.75C1 1.375 0.875 2 0.875 2.875C0.875 4.25 1.625 5.5 2.75 6.25C2.125 6.25 1.5 6 0.875 5.75C0.875 7.75 2.25 9.375 4.125 9.75C3.75 9.875 3.375 9.875 3 9.875C2.75 9.875 2.5 9.875 2.25 9.75C2.75 11.375 4.25 12.625 6.125 12.625C4.75 13.75 3 14.375 1 14.375C0.625 14.375 0.375 14.375 0 14.375C1.875 15.5 4 16.25 6.25 16.25C13.75 16.25 17.875 10 17.875 4.625C17.875 4.5 17.875 4.25 17.875 4.125C18.75 3.5 19.5 2.75 20 1.875Z"></path></svg>
                                             </a></li>
                                             <li><a href="#" className='social-icon'>
                                             <svg width="20" height="17" viewBox="0 0 20 17" xmlns="http://www.w3.org/2000/svg"><path d="M20 1.875C19.25 2.25 18.5 2.375 17.625 2.5C18.5 2 19.125 1.25 19.375 0.25C18.625 0.75 17.75 1 16.75 1.25C16 0.5 14.875 0 13.75 0C11.625 0 9.75 1.875 9.75 4.125C9.75 4.5 9.75 4.75 9.875 5C6.5 4.875 3.375 3.25 1.375 0.75C1 1.375 0.875 2 0.875 2.875C0.875 4.25 1.625 5.5 2.75 6.25C2.125 6.25 1.5 6 0.875 5.75C0.875 7.75 2.25 9.375 4.125 9.75C3.75 9.875 3.375 9.875 3 9.875C2.75 9.875 2.5 9.875 2.25 9.75C2.75 11.375 4.25 12.625 6.125 12.625C4.75 13.75 3 14.375 1 14.375C0.625 14.375 0.375 14.375 0 14.375C1.875 15.5 4 16.25 6.25 16.25C13.75 16.25 17.875 10 17.875 4.625C17.875 4.5 17.875 4.25 17.875 4.125C18.75 3.5 19.5 2.75 20 1.875Z"></path></svg>
                                             </a></li>
                                             <li><a href="#" className='social-icon'>
                                             <svg width="20" height="17" viewBox="0 0 20 17" xmlns="http://www.w3.org/2000/svg"><path d="M20 1.875C19.25 2.25 18.5 2.375 17.625 2.5C18.5 2 19.125 1.25 19.375 0.25C18.625 0.75 17.75 1 16.75 1.25C16 0.5 14.875 0 13.75 0C11.625 0 9.75 1.875 9.75 4.125C9.75 4.5 9.75 4.75 9.875 5C6.5 4.875 3.375 3.25 1.375 0.75C1 1.375 0.875 2 0.875 2.875C0.875 4.25 1.625 5.5 2.75 6.25C2.125 6.25 1.5 6 0.875 5.75C0.875 7.75 2.25 9.375 4.125 9.75C3.75 9.875 3.375 9.875 3 9.875C2.75 9.875 2.5 9.875 2.25 9.75C2.75 11.375 4.25 12.625 6.125 12.625C4.75 13.75 3 14.375 1 14.375C0.625 14.375 0.375 14.375 0 14.375C1.875 15.5 4 16.25 6.25 16.25C13.75 16.25 17.875 10 17.875 4.625C17.875 4.5 17.875 4.25 17.875 4.125C18.75 3.5 19.5 2.75 20 1.875Z"></path></svg>
                                             </a></li>
                                             <li><a href="#" className='social-icon'>
                                             <svg width="20" height="17" viewBox="0 0 20 17" xmlns="http://www.w3.org/2000/svg"><path d="M20 1.875C19.25 2.25 18.5 2.375 17.625 2.5C18.5 2 19.125 1.25 19.375 0.25C18.625 0.75 17.75 1 16.75 1.25C16 0.5 14.875 0 13.75 0C11.625 0 9.75 1.875 9.75 4.125C9.75 4.5 9.75 4.75 9.875 5C6.5 4.875 3.375 3.25 1.375 0.75C1 1.375 0.875 2 0.875 2.875C0.875 4.25 1.625 5.5 2.75 6.25C2.125 6.25 1.5 6 0.875 5.75C0.875 7.75 2.25 9.375 4.125 9.75C3.75 9.875 3.375 9.875 3 9.875C2.75 9.875 2.5 9.875 2.25 9.75C2.75 11.375 4.25 12.625 6.125 12.625C4.75 13.75 3 14.375 1 14.375C0.625 14.375 0.375 14.375 0 14.375C1.875 15.5 4 16.25 6.25 16.25C13.75 16.25 17.875 10 17.875 4.625C17.875 4.5 17.875 4.25 17.875 4.125C18.75 3.5 19.5 2.75 20 1.875Z"></path></svg>
                                             </a></li>


                                        </ul>
                                        <div>
                                             <button>
                                                  <span>
                                                       English
                                                  </span>
                                             </button>
                                        </div>
                                   </div>
                              </div>
                         </div>
                    </div>
               </footer>
          </div>
     )
}