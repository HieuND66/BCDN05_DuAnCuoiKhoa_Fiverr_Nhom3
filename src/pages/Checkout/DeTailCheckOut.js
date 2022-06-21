import React, { useState, useEffect } from 'react'
import './checkoutdetail.scss'
import { useDispatch, useSelector } from 'react-redux';
import { AiFillStar } from "react-icons/ai";
import { layThongTinChiTietCongViecAction } from '../../redux/action/QuanLyJobAction';
import { CaretUpOutlined, CaretDownOutlined } from '@ant-design/icons';
import { Modal } from 'antd';
import { BsCheck2Circle } from "react-icons/bs";
import { history } from '../../App';


export default function DeTailCheckOut(props) {

  const dispatch = useDispatch();
  const jobDetail = useSelector(state => state.QuanLyJobReducer.jobDetail)

  let sliceImg = ''
  if (jobDetail.subType) {
    sliceImg = jobDetail.subType.image
  } else {
    sliceImg = jobDetail.image
  }

  const [products, setProducts] = useState({ count: 1 })



  const handleChange = (e) => {

    setProducts({ count: parseInt(e.target.value) })
  }

  const decrease = () => {
    if (products.count <= 1) {
      return
    }
    setProducts({ count: products.count - 1 })
  }
  let { id } = props.match.params;
  // console.log(id);
  useEffect(() => {
    dispatch(layThongTinChiTietCongViecAction(id))
  }, [])

  const [isModalVisible, setIsModalVisible] = useState(false);
  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <div className="container my-16">

      <div>
        <div className="container-checkout ">
          <img src={sliceImg} alt="Pancake" />
          <div className="container__text leading-8">
            <h1>{jobDetail.name}</h1>
            <div className="stars text-2xl ">
              <AiFillStar className='text-yellow-400 pr-1' />
              <AiFillStar className='text-yellow-400 pr-1' />
              <AiFillStar className='text-yellow-400 pr-1' />
              <AiFillStar className='text-yellow-400 pr-1' />
              <AiFillStar className='text-yellow-400 pr-1' />

              <p className="point text-yellow-500 px-1 mb-0">{jobDetail.rating}</p>
              <p className="bought mb-0 pl-1">(150)</p>
            </div>
            <div className="money text-2xl font-bold">
              <h3>{jobDetail.price}$</h3>
            </div>
            <p className="py-2">
            Thank you for your interest in our service, and please confirm payment to own the service. Wish you have a good experience
            </p>
            <button className="btn btn-green text-white flex items-center justify-center"
                   onClick={() => {
              
                    // console.log(phim.trailer);
                    setIsModalVisible(true);
                    setTimeout(() => {
                      history.push("/joblist")
                    }, 1000);
                    
                  }}
            >Confrim &amp; Pay </button>
          </div>
        </div>

      </div>
      <Modal title="Basic Modal" visible={isModalVisible}  onCancel={handleCancel}>
                <BsCheck2Circle className='text-center'/>
      </Modal>
    </div >
  )
}
