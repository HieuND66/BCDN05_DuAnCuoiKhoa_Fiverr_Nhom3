import React from 'react'
import '../../pages/Home/Home.scss'
export default function Footer() {
  return (
    <footer>
                    <div className="container">
                         <div className="footer-content">
                              <div className="footer-top flex-wrap">
                                   <div className="footer-item w-1/2 sm:w-1/3 md:w-1/5">
                                        <h6>Categories</h6>
                                        <ul>
                                             <li><a href="#">Graphics & Design</a></li>
                                             <li><a href="#">Digital Marketing</a></li>
                                             <li><a href="#">Writing & Translation</a></li>
                                             <li><a href="#">Video & Animation</a></li>
                                             <li><a href="#">Music & Audio</a></li>
                                             <li><a href="#">Programming & Tech</a></li>
                                        </ul>
                                   </div>
                                   <div className="footer-item w-1/2 sm:w-1/3 md:w-1/5">
                                        <h6>About</h6>
                                        <ul>
                                             <li><a href="#">Careers</a></li>
                                             <li><a href="#">Press & News</a></li>
                                             <li><a href="#">Partnerships</a></li>
                                             <li><a href="#">Privacy Policy</a></li>
                                             <li><a href="#">Terms of Service</a></li>
                                             <li><a href="#">Intellectual Property Claims</a></li>
                                        </ul>
                                   </div>
                                   <div className="footer-item w-1/2 sm:w-1/3 md:w-1/5">
                                        <h6>Support</h6>
                                        <ul>
                                             <li><a href="#">Help & Support</a></li>
                                             <li><a href="#">Trust & Safety</a></li>
                                             <li><a href="#">Selling on Fiverr</a></li>
                                             <li><a href="#">Buying on Fiverr</a></li>
                                        </ul>
                                   </div>
                                   <div className="footer-item w-1/2 sm:w-1/3 md:w-1/5">
                                        <h6>Community</h6>
                                        <ul>
                                             <li><a href="#">Events</a></li>
                                             <li><a href="#">Blog</a></li>
                                             <li><a href="#">Forum</a></li>
                                             <li><a href="#">Community Standards</a></li>
                                             <li><a href="#">Podcast</a></li>
                                             <li><a href="#">Affiliates</a></li>
                                        </ul>
                                   </div>
                                   <div className="footer-item w-1/2 sm:w-1/3 md:w-1/5">
                                        <h6>More From Fiverr</h6>
                                        <ul>
                                             <li><a href="#">Fiverr Business</a></li>
                                             <li><a href="#">Fiverr Pro</a></li>
                                             <li><a href="#">Fiverr Studios</a></li>
                                             <li><a href="#">Fiverr Logo Maker</a></li>
                                             <li><a href="#">Fiverr Guides</a></li>
                                             <li><a href="#">Get Inspired</a></li>
                                        </ul>
                                   </div>
                              </div>
                              <div className="footer-bottom flex-wrap ">
                                   <div className="footer-left flex items-center w-full sm:w-1/2">
                                        <a href="/?source=top_nav" className="site-logo">
                                        <svg width="91" height="27" viewBox="0 0 91 27" fill="none" xmlns="http://www.w3.org/2000/svg"><g fill="#7A7D85"><path d="m82.9 13.1h-3.2c-2.1 0-3.2 1.5-3.2 4.1v9.3h-6.1v-13.4h-2.6c-2.1 0-3.2 1.5-3.2 4.1v9.3h-6.1v-18.4h6.1v2.8c1-2.2 2.4-2.8 4.4-2.8h7.4v2.8c1-2.2 2.4-2.8 4.4-2.8h2v5zm-25.6 5.6h-12.6c.3 2.1 1.6 3.2 3.8 3.2 1.6 0 2.8-.7 3.1-1.8l5.4 1.5c-1.3 3.2-4.6 5.1-8.5 5.1-6.6 0-9.6-5.1-9.6-9.5 0-4.3 2.6-9.4 9.2-9.4 7 0 9.3 5.2 9.3 9.1 0 .9 0 1.4-.1 1.8zm-5.9-3.5c-.1-1.6-1.3-3-3.3-3-1.9 0-3.1.8-3.4 3zm-23.1 11.3h5.3l6.7-18.3h-6.1l-3.2 10.7-3.4-10.8h-6.1zm-24.9 0h6v-13.4h5.7v13.4h6v-18.4h-11.6v-1.1c0-1.2.9-2 2.3-2h3.5v-5h-4.4c-4.5 0-7.5 2.7-7.5 6.6v1.5h-3.4v5h3.4z"></path></g><g fill="#7A7D85"><path d="m90.4 23.3c0 2.1-1.6 3.7-3.8 3.7s-3.8-1.6-3.8-3.7 1.6-3.7 3.8-3.7c2.2-.1 3.8 1.5 3.8 3.7zm-.7 0c0-1.8-1.3-3.1-3.1-3.1s-3.1 1.3-3.1 3.1 1.3 3.1 3.1 3.1 3.1-1.4 3.1-3.1zm-1.7.8.1.9h-.7l-.1-.9c0-.3-.2-.5-.5-.5h-.8v1.4h-.7v-3.5h1.4c.7 0 1.2.4 1.2 1.1 0 .4-.2.6-.5.8.4.1.5.3.6.7zm-1.9-1h.7c.4 0 .5-.3.5-.5 0-.3-.2-.5-.5-.5h-.7z"></path></g></svg>
                                        </a>
                                        <span className='block px-3'>Fiverr International Ltd. 2022</span>
                                   </div>
                                   <div className="footer-right md:justify-end  w-full sm:w-1/2">
                                        <ul>
                                             <li><a href="#" className='social-icon'>
                                             <svg width="20" height="25" viewBox="0 0 20 17" xmlns="http://www.w3.org/2000/svg"><path d="M20 1.875C19.25 2.25 18.5 2.375 17.625 2.5C18.5 2 19.125 1.25 19.375 0.25C18.625 0.75 17.75 1 16.75 1.25C16 0.5 14.875 0 13.75 0C11.625 0 9.75 1.875 9.75 4.125C9.75 4.5 9.75 4.75 9.875 5C6.5 4.875 3.375 3.25 1.375 0.75C1 1.375 0.875 2 0.875 2.875C0.875 4.25 1.625 5.5 2.75 6.25C2.125 6.25 1.5 6 0.875 5.75C0.875 7.75 2.25 9.375 4.125 9.75C3.75 9.875 3.375 9.875 3 9.875C2.75 9.875 2.5 9.875 2.25 9.75C2.75 11.375 4.25 12.625 6.125 12.625C4.75 13.75 3 14.375 1 14.375C0.625 14.375 0.375 14.375 0 14.375C1.875 15.5 4 16.25 6.25 16.25C13.75 16.25 17.875 10 17.875 4.625C17.875 4.5 17.875 4.25 17.875 4.125C18.75 3.5 19.5 2.75 20 1.875Z"></path></svg>
                                             </a></li>
                                             <li><a href="#" className='social-icon'>
                                             <svg width="20" height="25" viewBox="0 0 20 17" xmlns="http://www.w3.org/2000/svg"><path d="M20 10.0022C20.0004 8.09104 19.4532 6.2198 18.4231 4.61003C17.393 3.00026 15.9232 1.71938 14.1877 0.919062C12.4522 0.118741 10.5237 -0.167503 8.63053 0.0942223C6.73739 0.355948 4.9589 1.15468 3.50564 2.39585C2.05237 3.63701 0.985206 5.26863 0.430495 7.0975C-0.124217 8.92636 -0.143239 10.8759 0.37568 12.7152C0.894599 14.5546 1.92973 16.2067 3.35849 17.476C4.78726 18.7453 6.54983 19.5786 8.4375 19.8772V12.8922H5.89875V10.0022H8.4375V7.79843C8.38284 7.28399 8.44199 6.76382 8.61078 6.2748C8.77957 5.78577 9.05386 5.33986 9.4142 4.96866C9.77455 4.59746 10.2121 4.31007 10.6959 4.12684C11.1797 3.94362 11.6979 3.86905 12.2137 3.90843C12.9638 3.91828 13.7121 3.98346 14.4525 4.10343V6.56718H13.1925C12.9779 6.53911 12.7597 6.55967 12.554 6.62733C12.3484 6.69498 12.1607 6.80801 12.0046 6.95804C11.8486 7.10807 11.7283 7.29127 11.6526 7.49408C11.577 7.69689 11.5479 7.91411 11.5675 8.12968V10.0047H14.3412L13.8975 12.8947H11.5625V19.8834C13.9153 19.5112 16.058 18.3114 17.6048 16.4999C19.1516 14.6884 20.001 12.3842 20 10.0022Z"></path></svg>
                                             </a></li>
                                             <li><a href="#" className='social-icon'>
                                             <svg width="20" height="25" viewBox="0 0 20 17" xmlns="http://www.w3.org/2000/svg"><path d="M19.125 0H0.875C0.375 0 0 0.375 0 0.875V19.25C0 19.625 0.375 20 0.875 20H19.25C19.75 20 20.125 19.625 20.125 19.125V0.875C20 0.375 19.625 0 19.125 0ZM5.875 17H3V7.5H6V17H5.875ZM4.5 6.25C3.5 6.25 2.75 5.375 2.75 4.5C2.75 3.5 3.5 2.75 4.5 2.75C5.5 2.75 6.25 3.5 6.25 4.5C6.125 5.375 5.375 6.25 4.5 6.25ZM17 17H14V12.375C14 11.25 14 9.875 12.5 9.875C11 9.875 10.75 11.125 10.75 12.375V17.125H7.75V7.5H10.625V8.75C11 8 12 7.25 13.375 7.25C16.375 7.25 16.875 9.25 16.875 11.75V17H17Z"></path></svg>
                                             </a></li>
                                             <li><a href="#" className='social-icon'>
                                             <svg width="20" height="25" viewBox="0 0 20 17" xmlns="http://www.w3.org/2000/svg"><path d="M10 0C4.5 0 0 4.5 0 10C0 14.25 2.625 17.875 6.375 19.25C6.25 18.5 6.25 17.25 6.375 16.375C6.5 15.625 7.5 11.375 7.5 11.375C7.5 11.375 7.25 10.875 7.25 10C7.25 8.625 8.125 7.5 9.125 7.5C10 7.5 10.375 8.125 10.375 8.875C10.375 9.75 9.875 11 9.5 12.25C9.25 13.25 10 14 11 14C12.75 14 14.125 12.125 14.125 9.375C14.125 7 12.375 5.25 10 5.25C7.125 5.25 5.5 7.375 5.5 9.625C5.5 10.5 5.875 11.375 6.25 11.875C6.25 12.125 6.25 12.25 6.25 12.375C6.125 12.75 6 13.375 6 13.5C6 13.625 5.875 13.75 5.625 13.625C4.375 13 3.625 11.25 3.625 9.75C3.625 6.625 5.875 3.75 10.25 3.75C13.75 3.75 16.375 6.25 16.375 9.5C16.375 13 14.25 15.75 11.125 15.75C10.125 15.75 9.125 15.25 8.875 14.625C8.875 14.625 8.375 16.5 8.25 17C8 17.875 7.375 19 7 19.625C8 19.875 9 20 10 20C15.5 20 20 15.5 20 10C20 4.5 15.5 0 10 0Z"></path></svg>
                                             </a></li>


                                        </ul>

                                   </div>
                              </div>
                         </div>
                    </div>
               </footer>
  )
}
