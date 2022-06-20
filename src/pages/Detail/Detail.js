import React, { useEffect } from 'react'
import './detail.scss'
import { AiFillStar} from "react-icons/ai";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { useDispatch, useSelector } from 'react-redux';
import { layThongTinChiTietCongViecAction } from '../../redux/action/QuanLyJobAction';
import Checkout from '../Checkout/Checkout';
import Comments from '../Comments/Comments';


export default function Detail(props) {
  const dispatch = useDispatch();
  const jobDetail = useSelector(state => state.QuanLyJobReducer.jobDetail)

  let sliceImg = ''
  if(jobDetail.subType){
    sliceImg = jobDetail.subType.image
  } else {
    sliceImg = jobDetail.image
  }

  // console.log(sliceImg);
  const fadeImages = [
    {
      url: sliceImg,
      caption: 'First Slide'
    },
  ];
  
  let { id } = props.match.params;
  useEffect(() => {
    dispatch(layThongTinChiTietCongViecAction(id))
  }, [])



  return (
    <div className='detail-page container pt-8'>

      <div className=" grid grid-cols-3 gap-4 flex justify-between">
        <div className="detail-content col-span-2 ">
          <div className="detail-content__info">

            <div className="detail-content__header my-8">
              <h3 className="title-header">{jobDetail.name}</h3>
              <div className="info-header">
              {jobDetail ? <img src={jobDetail.image} alt="" className='img-author mr-4' />: <img src={jobDetail.image} alt="" className='img-author mr-4' />}
                
                {/* <img src={jobDetail.image} alt="" className='img-author mr-4' /> */}
                {jobDetail.subType != null ? <p className="name-author ">{jobDetail.subType.name}</p> : <p className="name-author ">parthbhuta</p>}
                {/* <p className="name-author ">{jobDetail.subType.name}</p> */}
                {/* <p className="name-author ">{jobDetail.name}</p> */}
                {/* <p className="name-author ">parthbhuta</p> */}
                <p className="text-author">Level 2 Seller</p>
                <div className="stars ">
                  <AiFillStar className='text-yellow-400' />
                  <AiFillStar className='text-yellow-400' />
                  <AiFillStar className='text-yellow-400' />
                  <AiFillStar className='text-yellow-400' />
                  <AiFillStar className='text-yellow-400' />
                  <p className='point text-yellow-500'>{jobDetail.rating}</p>
                  <p className='bought'>(150)</p>
                </div>
                <p className='text-oder'>2 Orders in Queue</p>
              </div>
            </div>
            <div className="slide-container">
              <Carousel>
                <div>
                  <img src={fadeImages[0].url} />
                </div>
              </Carousel>
            </div>
          </div>
          <div className="detail-content__about">
            <h3 className="detail-content__about-header">About This Gig</h3>
            <p className="detail__about-mess">Hello, <br /> We are Designing Champ and our Expertise & Services in SharePoint</p>
            <div className="detail__about-list pl-5">

              <p>1. Migration</p>
              <p>2. PowerShell</p>
              <p>3. Workflows</p>
              <p>4. SPFx</p>
              <p>5. PNP</p>
              <p>6. Branding</p>
              <p>7. Infopath Forms</p>
              <p>8. Add-in(Apps)</p>
              <p>9. Corporate Intranet</p>
              <p>10. Client-Side Scripting </p>
              <p>11. Public-facing</p>
              <p>12. Issues Solving in SharePoint</p>
            </div>
            <p className='py-4'>Please Discuss first before placing the order. </p>
          </div>
          <div className="detail-content__other pt-4">
            <div className="language">
              <h3>Programming language</h3>
              <p>Other</p>
            </div>
            <div className="expertise">
              <h3>Expertise</h3>
              <p>Cross browser,</p>
              <p>Compatibility,</p>
              <p>PSD to HTML,</p>
              <p>W3C validation</p>
            </div>
          </div>
          <div className="detail-content__seller">
            <h2 className='detail-content-seller-title'>About The Seller</h2>
            <div className="detail-content-seller-info py-8">
            {/* {jobDetail.image ? <img src={jobDetail.image.replace('s', '')} alt="" className='img-author' /> : <img src={jobDetail.image} alt="" className='img-author' />} */}
              {/* <img src={jobDetail.image.replace('s', '')} alt="" className='img-author' /> */}
              <img src={jobDetail.image} alt="" className='img-author' />
              <div className="detail-content-seller-infor-seller">
              {jobDetail.subType ? <h3>{jobDetail.subType.name}</h3> : <h3 className="name-author ">parthbhuta</h3>}
                {/* <h3>{jobDetail.subType.name}</h3> */}
                {/* <h3>{jobDetail.name}</h3> */}
                <p>SharePoint Developer, UI UX Designer</p>
                <div className="stars py-3">
                  <AiFillStar className='text-yellow-400' />
                  <AiFillStar className='text-yellow-400' />
                  <AiFillStar className='text-yellow-400' />
                  <AiFillStar className='text-yellow-400' />
                  <AiFillStar className='text-yellow-400' />
                  <p className='point text-yellow-500 px-1'>{jobDetail.rating}</p>
                  <p className='bought'>(150)</p>
                </div>
                <button className='btn-contact'>Contact me</button>
              </div>
            </div>
          </div>
          <div className="detail-content__reviews">
            <div className="detail-content__reviews-header">
              <div className="detail-content__reviews-header-left">
                <h3>10 Reviews</h3>
                <div className="stars">
                  <AiFillStar className='text-yellow-400' />
                  <AiFillStar className='text-yellow-400' />
                  <AiFillStar className='text-yellow-400' />
                  <AiFillStar className='text-yellow-400' />
                  <AiFillStar className='text-yellow-400' />
                  <p className='point text-yellow-500 px-1'>4.9</p>
                </div>
              </div>
              <div className="detail-content__reviews-header-right">
                <h3>Sort By</h3>
                <h3 className='detail-sort'>Most Relevent</h3>
              </div>
            </div>
            <div className="detail-content__reviews-table">
              <table className="stars-counters">
                <tbody>
                  <tr >
                    <td >
                      <span className="stars-filter-wrapper ">
                        <button className="stars-filter w-" data-impression-collected="true">5 Stars
                        </button>
                      </span>
                    </td>
                    <td className="progress-bar-container">
                      <div className="star-progress-bar">
                        <div className="progress">
                          <div className="star-progress-shape">
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="star-num">(7)
                    </td>
                  </tr>
                  <tr >
                    <td>
                      <span className="stars-filter-wrapper">
                        <button className="stars-filter w-14" data-impression-collected="true">4 Stars
                        </button>
                      </span>
                    </td>
                    <td className="progress-bar-container pr-4">
                      <div className="star-progress-bar">
                        <div className="progress">
                          <div className="star-progress-shape w-1/3">
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="star-num">(2)
                    </td>
                  </tr>
                  <tr >
                    <td>
                      <span className="stars-filter-wrapper">
                        <button className="stars-filter w-14" data-impression-collected="true">3 Stars
                        </button>
                      </span>
                    </td>
                    <td className="progress-bar-container pr-4">
                      <div className="star-progress-bar">
                        <div className="progress">
                          <div className="star-progress-shape w-0">
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="star-num">(0)
                    </td>
                  </tr>
                  <tr >
                    <td>
                      <span className="stars-filter-wrapper">
                        <button className="stars-filter w-14" data-impression-collected="true">2 Stars
                        </button>
                      </span>
                    </td>
                    <td className="progress-bar-container pr-4">
                      <div className="star-progress-bar">
                        <div className="progress">
                          <div className="star-progress-shape w-1/12">
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="star-num">(1)
                    </td>
                  </tr>
                  <tr >
                    <td>
                      <span className="stars-filter-wrapper">
                        <button className="stars-filter w-14" data-impression-collected="true">1 Stars
                        </button>
                      </span>
                    </td>
                    <td className="progress-bar-container pr-4">
                      <div className="star-progress-bar">
                        <div className="progress">
                          <div className="star-progress-shape w-0">
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="star-num">(0)
                    </td>
                  </tr>

                </tbody>
              </table>
              <div className='detail-rating'>
                <h6 className="detail-rating-text">Rating Breakdown</h6>
                <ul>
                  <li>
                    Seller communication level
                    <span>
                      <AiFillStar className='text-yellow-400' />5
                    </span>
                  </li>
                  <li>
                    Recommend to a friend
                    <span>
                      <AiFillStar className='text-yellow-400' />4.8
                    </span>
                  </li>
                  <li>
                    Service as described
                    <span>
                      <AiFillStar className='text-yellow-400' />4.9
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="detail-filter my-6">
            <h3 className='text-xl font-semibold'>Filter</h3>
            <p>Industry All Industry</p>
          </div>
          <Comments id = {id}/>
        </div>
        {console.log(id)} 
        <Checkout id = {id} jobDetail = {jobDetail}/>
      </div>
    </div>
  )
}