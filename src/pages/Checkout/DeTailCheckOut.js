import React, { useState, useEffect } from 'react'
import './checkoutdetail.scss'
import { useDispatch, useSelector } from 'react-redux';
import { AiFillStar } from "react-icons/ai";
import { layThongTinChiTietCongViecAction } from '../../redux/action/QuanLyJobAction';
import { CaretUpOutlined, CaretDownOutlined } from '@ant-design/icons';

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
  console.log(id);
  useEffect(() => {
    dispatch(layThongTinChiTietCongViecAction(id))
  }, [])



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

              <p className="point text-yellow-500 px-1">{jobDetail.rating}</p>
              <p className="bought">(150)</p>
            </div>
            <p className="py-6">
              If you're fan of caramel cake, then you'll love our Caramel Cake Pancakes.
              We Complete these over-the-top pancakes with Caramel Syrup.
            </p>

            <div className="block_quantity clearfix flex  items-center text-lg">
              <span className="text_specification ">Quantity:</span>
              <div className="block_quantity__chooseBlock  flex items-center justify-center">
            
                <input className="block_quantity__number mx-2 w-28" name="quantityNumber" type="text" value={products.count} onChange={handleChange} />
                <div className="flex flex-col items-center text-sm ">

                <button className="block_quantity__button block_quantity__up"
                  onClick={() => setProducts({ count: products.count + 1 })}
                ><CaretUpOutlined /></button>
                <button className="block_quantity__button block_quantity__down "
                  onClick={decrease}
                ><CaretDownOutlined /></button>
                </div>
              </div>
            </div>
            <button className="btn btn-green text-white flex items-center justify-center">Confrim &amp; Pay <i className="fa fa-arrow-right" /></button>
          </div>
        </div>

      </div>
    </div >
  )
}
