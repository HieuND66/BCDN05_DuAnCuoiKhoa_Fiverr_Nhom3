import React from 'react'
import { RightOutlined } from '@ant-design/icons';
import { useFormik } from 'formik';
import { DangNhapAction } from '../../redux/action/QuanLyUserAction';
import { useDispatch, useSelector } from 'react-redux';
export default function Register() {
  const dispatch = useDispatch();
  const {userLogin} = useSelector(state => state.QuanLyUserReducer)
  
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    onSubmit: values => {
      const action = DangNhapAction(JSON.stringify(values))
      dispatch(action)
      // console.log((response.data))
    },
  });
  return (
    <div className="container-login login-wrap ">

    <div className="screen mt-8 ">
      <div className="screen__content ">
        <h2 className='text-black text-4xl font-bold text-center mt-16'>Login</h2>
        <form className="login" onSubmit={formik.handleSubmit}>
          <div className="login__field">
            <i className="login__icon fas fa-user" />
            <input type="text" className="login__input" placeholder="Email" name='email' onChange={formik.handleChange} />
          </div>
          <div className="login__field">
            <i className="login__icon fas fa-lock" />
            <input type="password" className="login__input" placeholder="Password" name='password' onChange={formik.handleChange} />
          </div>
          <button className="button login__submit" type='submit'>
            <span className="button__text text-xl">Log In Now</span>
            <span className='button__icon'> <RightOutlined /> </span>
            {/* Log In Now */}
          </button>
        </form>
      </div>
      <div className="screen__background">
        <span className="screen__background__shape screen__background__shape4" />
        <span className="screen__background__shape screen__background__shape3" />
        <span className="screen__background__shape screen__background__shape2" />
        <span className="screen__background__shape screen__background__shape1" />
      </div>
    </div>
  </div>
  )
}
