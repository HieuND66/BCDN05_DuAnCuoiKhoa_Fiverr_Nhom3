import React, { Fragment } from 'react'
import { useSelector } from 'react-redux'
import './Loading.css'
import './Loading.scss'
export default function Loading() {
    const { isLoading } = useSelector(state => state.LoadingReducer)

    return (
        <Fragment>
            {isLoading ? <div className='loading'>
                <div className="wrap">
                    <div className="">
                      <div className="bounceball"></div>
                        <div className="text">NOW LOADING</div>
                    </div>  
                </div>
            </div> : ''}
        </Fragment>

    )
}
