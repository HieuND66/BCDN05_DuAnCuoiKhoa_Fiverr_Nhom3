import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { AiOutlineClockCircle, AiOutlineArrowRight } from "react-icons/ai";
import { BsCheckLg } from "react-icons/bs";
import { layThongTinDatCongViecAction } from '../../redux/action/QuanLyDatCongViecAction';
import { TOKEN } from '../../utils/setting/setting';
import { history } from '../../App';

export default function Checkout(props) {
  
  const dispatch = useDispatch();
  const { chiTietDatCongViec } = useSelector(state => state.QuanLyDatCongViecReducer)
  // console.log(chiTietDatCongViec);
  let { id, jobDetail } = props;
  // useEffect(() => {
  //   const action = layThongTinDatCongViecAction(id)
  //   dispatch(action)
  // }, [])
//  console.log(jobDetail);

  return (
    <div className="detail-pay-wrap">
      <div className="detail-pay mt-5">
        <div className="detail-pay__header">
          <h3 className="detail-pay-money pb-4">{jobDetail.price}$</h3>
          <p className='detail-pay-des py-5'>SharePoint Designing I can Create Custom Design in SharePoint 2010, 2013, Office 365, Modern View</p>
          <div className="detail-pay-info">
            <div className="detail-pay-info__time">
              <AiOutlineClockCircle />
              <p className='ml-2 py-2'>10 Days Delivery</p>
            </div>
            <div className="detail-payinfo__check pb-8">
              <BsCheckLg className='text-green-600 ' />
              <p className='ml-2'>Include Source Code</p>
            </div>
            <div 
              className="btn btn-green text-white flex items-center justify-center w-11/12 m-auto"
              onClick={() =>{
                if(localStorage.getItem(TOKEN)){
                  console.log(`/detaicheckout/${id}`)
                  history.push(`/detaicheckout/${id}`)
                } else{
                  history.push('/login')
                }
              }}
            >Continue  <AiOutlineArrowRight className=' text-white text-xl' /></div>
          </div>
        </div>
        <div className="detail-pay__footer mt-8">

          <button  className='btn-contact w-11/12' >Contact Seller</button>
        </div>
      </div>
    </div>
  )
}
