import React from 'react'
import './header.scss'
import '../../scss/_button.scss'
import { NavLink } from 'react-router-dom'
import { history } from '../../App'


import { TOKEN, USER_LOGIN } from '../../utils/setting/setting'

export default function Header() {


  return (
    <div id="herader">
      <div className="header-package fiverr-header">
        <div className="header-row-wrapper">
          <div className="header-row max-width-container row-main container">

            <a href="/?source=top_nav" className="site-logo">
              <svg width={89} height={27} viewBox="0 0 89 27" fill="none" xmlns="http://www.w3.org/2000/svg"><g fill="rgb(255, 255, 255)"><path d="m81.6 13.1h-3.1c-2 0-3.1 1.5-3.1 4.1v9.3h-6v-13.4h-2.5c-2 0-3.1 1.5-3.1 4.1v9.3h-6v-18.4h6v2.8c1-2.2 2.3-2.8 4.3-2.8h7.3v2.8c1-2.2 2.3-2.8 4.3-2.8h2zm-25.2 5.6h-12.4c.3 2.1 1.6 3.2 3.7 3.2 1.6 0 2.7-.7 3.1-1.8l5.3 1.5c-1.3 3.2-4.5 5.1-8.4 5.1-6.5 0-9.5-5.1-9.5-9.5 0-4.3 2.6-9.4 9.1-9.4 6.9 0 9.2 5.2 9.2 9.1 0 .9 0 1.4-.1 1.8zm-5.7-3.5c-.1-1.6-1.3-3-3.3-3-1.9 0-3 .8-3.4 3zm-22.9 11.3h5.2l6.6-18.3h-6l-3.2 10.7-3.2-10.8h-6zm-24.4 0h5.9v-13.4h5.7v13.4h5.9v-18.4h-11.6v-1.1c0-1.2.9-2 2.2-2h3.5v-5h-4.4c-4.3 0-7.2 2.7-7.2 6.6v1.5h-3.4v5h3.4z" /></g><g fill="#1dbf73"><path d="m85.3 27c2 0 3.7-1.7 3.7-3.7s-1.7-3.7-3.7-3.7-3.7 1.7-3.7 3.7 1.7 3.7 3.7 3.7z" /></g></svg>
            </a>
            <div className="fiverr-header-search">
              <div className="search-bar-package search_bar-package">
                <form >
                  <span className="lFICM06 search-bar-icon"  ><svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="M15.8906 14.6531L12.0969 10.8594C12.025 10.7875 11.9313 10.75 11.8313 10.75H11.4187C12.4031 9.60938 13 8.125 13 6.5C13 2.90937 10.0906 0 6.5 0C2.90937 0 0 2.90937 0 6.5C0 10.0906 2.90937 13 6.5 13C8.125 13 9.60938 12.4031 10.75 11.4187V11.8313C10.75 11.9313 10.7906 12.025 10.8594 12.0969L14.6531 15.8906C14.8 16.0375 15.0375 16.0375 15.1844 15.8906L15.8906 15.1844C16.0375 15.0375 16.0375 14.8 15.8906 14.6531ZM6.5 11.5C3.7375 11.5 1.5 9.2625 1.5 6.5C1.5 3.7375 3.7375 1.5 6.5 1.5C9.2625 1.5 11.5 3.7375 11.5 6.5C11.5 9.2625 9.2625 11.5 6.5 11.5Z" /></svg>
                  </span>
                  <input placeholder="Find services" />
                  <button className="ORLWF8p _0MkXbqi co-white submit-button bg-co-green-700">Search</button>
                </form>

              </div>
            </div>
            <nav className='fiverr-nav fiverr-nav-right'>
              <ul>
                <li className="display-from-md">
                  <a href="/" className="business-nav-link nav-link" target="_blank">Business Tools</a>
                </li>

                <li className="display-from-md">

                  {
                    localStorage.getItem(TOKEN) ? <NavLink to='/user/6198b098aef344001ced09ea'>
                      <span className="lFICM06" style={{ width: 32, height: 32, fill: 'white' }} aria-hidden="true">
                        <svg width={32} height={32} viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                          <g clipPath="url(#clip0_4205_206620)"><path fillRule="evenodd" clipRule="evenodd" d="M26.8609 25.6069C29.1252 23.0488 30.4998 19.6849 30.4998 16C30.4998 7.99187 24.0079 1.5 15.9998 1.5C7.99169 1.5 1.49982 7.99187 1.49982 16C1.49982 19.6849 2.87438 23.0488 5.13873 25.6068C6.13439 23.5441 7.6093 21.7918 9.42688 20.5334C10.4185 19.847 11.4911 19.3222 12.6106 18.971C10.8313 17.8459 9.64966 15.8609 9.64966 13.6C9.64966 10.093 12.4926 7.25 15.9997 7.25C19.5067 7.25 22.3497 10.093 22.3497 13.6C22.3497 15.8609 21.1681 17.8458 19.3888 18.9709C20.5084 19.3221 21.5811 19.8469 22.5727 20.5334C24.3903 21.7918 25.8652 23.5441 26.8609 25.6069ZM25.7346 26.7465C25.7266 26.7312 25.7192 26.7155 25.7122 26.6995C24.826 24.6648 23.4385 22.9572 21.7189 21.7667C20.0002 20.5769 18.0176 19.95 15.9998 19.95C13.9819 19.95 11.9994 20.5769 10.2807 21.7667C8.56106 22.9572 7.1736 24.6648 6.28741 26.6995C6.28043 26.7155 6.27295 26.7312 6.26501 26.7465C8.83834 29.079 12.2531 30.5 15.9998 30.5C19.7465 30.5 23.1613 29.079 25.7346 26.7465ZM31.9998 16C31.9998 24.8365 24.8364 32 15.9998 32C7.16326 32 -0.000183105 24.8365 -0.000183105 16C-0.000183105 7.16344 7.16326 0 15.9998 0C24.8364 0 31.9998 7.16344 31.9998 16ZM15.9997 8.75C13.3211 8.75 11.1497 10.9214 11.1497 13.6C11.1497 16.2786 13.3211 18.45 15.9997 18.45C18.6782 18.45 20.8497 16.2786 20.8497 13.6C20.8497 10.9214 18.6782 8.75 15.9997 8.75Z" />
                          </g>
                        </svg>
                      </span>
                    </NavLink>
                      : <>
                        <NavLink to='/login' className=" link-item self-center py-3 rounded text-base font-bold uppercase" activeClassName='border-b-2   border-active'>Sing in</NavLink>
                        <NavLink to='/register' className="btn first mx-8 font-bold" activeClassName='border-b-2  border-active'>SING UP</NavLink>

                      </>
                  }


                  {/* 
                  <NavLink to='/login'>
                  <span className="business-nav-link nav-link" target="_blank">Log In</span>
                   
                  </NavLink> */}
                </li>
                <li className="display-from-md">

                </li>
                <li className="display-from-md">
                  <a className="btn-white" href="/">Join</a>
                </li>

              </ul>
            </nav>
          </div>
        </div>
      </div>
      <div className="CategoriesMenu">
        <ul className='categories max-width-container container'>
          <li className='menu-tiem'>Graphics & Design</li>
          <li className='menu-tiem'>Digital Marketing</li>
          <li className='menu-tiem'>Writing & Translation </li>
          <li className='menu-tiem'>Video & Animation</li>
          <li className='menu-tiem'>Music & Audio</li>
          <li className='menu-tiem'>Programming & Tech</li>
          <li className='menu-tiem'>Business</li>
          <li className='menu-tiem'>Lifestyle</li>
          <li className='menu-tiem'>Trending</li>
        </ul>
      </div>
    </div>


  )
}
