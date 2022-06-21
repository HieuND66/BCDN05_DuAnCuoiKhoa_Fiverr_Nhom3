import React, { useEffect } from 'react'
import { AiFillStar, AiOutlineDislike, AiOutlineLike } from "react-icons/ai";
import { useDispatch, useSelector } from 'react-redux';
import { layCommentsAction } from '../../redux/action/QuanlyCommentsAction';
export default function Comments(props) {
  let { id } = props;
  const dispatch = useDispatch();
  const comments = useSelector(state => state.QuanLyCommentsReducer)
  useEffect(() => {
    dispatch(layCommentsAction(id))
  }, [])
  // console.log(comments.comments[0].content);
  let userCommnet = comments.comments
  console.log(comments);


  const renderCommnets = () => {
    return userCommnet.map((comment, index) => {
      return <div className="detail-content__comment" key={index}>
        <div className="commnent-wapper py-8">
          <div className="comment-user">
            <div className="user-info">
              <img src="https://i.pravatar.cc/300" alt="" className='img-author' />
              <div className="user-info-name">
                <div className="user-info-wrap">
                  <h3>{comment ? comment.user ? comment.user.name : 'Mack zuck' : 'Mack zuck'}</h3>
                  <div className="stars pl-2">
                    <AiFillStar className='text-yellow-400' />
                    <AiFillStar className='text-yellow-400' />
                    <AiFillStar className='text-yellow-400' />
                    <AiFillStar className='text-yellow-400' />
                    <AiFillStar className='text-yellow-400' />
                    <p className='point text-yellow-500 px-1'>4.9</p>
                  </div>
                </div>
                <div className="user-info-country">
                  <h4 className="user-info-ensign">Germany</h4>
                </div>
                <div className="user-commnent pt-5 ">
                  <p className='commnent-content'>
                    {comment ? comment.content : 'Hay qua'}
                  </p>
                  <p className="commnet-time">Published 2 months ago</p>
                  <div className="comment-feedback flex items-center text-base">
                    <AiOutlineLike className='mr-2 cursor-pointer' /> Helpfull
                    <AiOutlineDislike className='ml-6 mr-2 cursor-pointer' /> Not Helpfull
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    })
  }

  return (
    <div>
      {renderCommnets()}
    </div>
  )
}
