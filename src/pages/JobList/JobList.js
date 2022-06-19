import React from 'react';  

import { NavLink } from 'react-router-dom'
import './joblist.scss'
export default function JobList() {


  return (
  
      <div className='card-container'>
        
        <NavLink to='/job/618d3a5895d99f001c0c0ce8' className="card">
          <div className="card-header">
            <img src="https://c0.wallpaperflare.com/preview/483/210/436/car-green-4x4-jeep.jpg" alt="rover" />
          </div>
          <div className="card-body">
            <span className="tag tag-teal">Technology</span>
            <h4>
              Why is the Tesla Cybertruck designed the way it?
            </h4>
            <p>
              An exploration into the truck's polarising design
            </p>
            <div className="user">
              <img src="https://yt3.ggpht.com/a/AGF-l7-0J1G0Ue0mcZMw-99kMeVuBmRxiPjyvIYONg=s900-c-k-c0xffffffff-no-rj-mo" alt="user" />
              <div className="user-info">
                <h5>July Dec</h5>
                <small>2h ago</small>
              </div>
            </div>
          </div>
        </NavLink>
        <NavLink to='/job/618d3abc95d99f001c0c0cf7' className="card">
          <div className="card-header">
            <img src="https://www.newsbtc.com/wp-content/uploads/2020/06/mesut-kaya-LcCdl__-kO0-unsplash-scaled.jpg" alt="ballons" />
          </div>
          <div className="card-body">
            <span className="tag tag-purple">Popular</span>
            <h4>
              How to Keep Going When You Don’t Know What’s Next
            </h4>
            <p>
              The future can be scary, but there are ways to deal with that fear.
            </p>
            <div className="user">
              <img src="https://i.pravatar.cc/300" alt="user" />
              <div className="user-info">
                <h5>Eyup Ucmaz</h5>
                <small>Yesterday</small>
              </div>
            </div>
          </div>
        </NavLink>
        <NavLink to='/job/618d3b6495d99f001c0c0d0d' className="card">
          <div className="card-header">
            <img src="https://images6.alphacoders.com/312/thumb-1920-312773.jpg" alt="city" />
          </div>
          <div className="card-body">
            <span className="tag tag-pink">Design</span>
            <h4>
              10 Rules of Dashboard Design
            </h4>
            <p>
              Dashboard Design Guidelines
            </p>
            <div className="user">
              <img src="https://studyinbaltics.ee/wp-content/uploads/2020/03/3799Ffxy.jpg" alt="user" />
              <div className="user-info">
                <h5>Carrie Brewer</h5>
                <small>1w ago</small>
              </div>
            </div>
          </div>
        </NavLink>
      </div>

  )
}
