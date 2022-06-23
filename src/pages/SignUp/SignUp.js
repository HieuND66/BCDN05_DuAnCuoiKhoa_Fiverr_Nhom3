import React from 'react'
import { Form, Input, Select } from 'antd';
import { MailOutlined, LockOutlined, UserOutlined, PhoneOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import * as Yup from 'yup';
import { useFormik } from 'formik';
import { useDispatch } from 'react-redux';
import { signUp } from '../../redux/action/QuanLyUserAction';
import { history } from '../../App';

export default function SignUp() {
    let dispatch = useDispatch()

    const formik = useFormik({
        initialValues: {
            email: "",
            password: "",
            name: "",
            phone: "",
        },
        validationSchema: Yup.object({
            name: Yup.string().required('Please enter your name').min(3, 'Name should be between 3 and 6 characters').max(12, 'Name should be between 3 and 12 characters'),
            password: Yup.string().required('Please enter your password').min(6, 'Account should be between 6 and 12 characters').max(12, 'password should be between 6 and 12 characters'),
            email: Yup.string().required('Please enter your email').email('Please enter a valid email address'),
            phone: Yup.string().required('Please enter your phone number').matches(/^[0-9]+$/, 'phone should be number'),
        }),
        onSubmit: values => {
            // dang ki thanh cong
            dispatch(signUp(values))
        },

    })
    return (
        <div className='flex'>
            <div className='w-1/2 hidden lg:block' style={{ 
                background: 'url("https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/attachments/generic_asset/asset/5c837aac7c42de1f9f125cff37ab2c70-1612076004546/fiverr-og-logo.png")',
                backgroundPosition:'center',
              
         }}></div>
            <div className='w-full lg:w-1/2 signUp flex justify-center items-center h-screen' style={{ background: '#1dbf73' }}>
                <form action="#" onSubmit={formik.handleSubmit} className='w-2/3 text-center'>
                    <h2 className='text-3xl'>Join Fiverr</h2>
                    <Input name='name' size="large" placeholder="name" prefix={<UserOutlined />} className='mt-5' onChange={formik.handleChange} />
                    {formik.touched.name && formik.errors.name ? (
                        <div className='text-red-700 mb-4'>{formik.errors.name}</div>
                    ) : <div className='mb-4'></div>}
                    <Input name='email' size="large" placeholder="email" prefix={<MailOutlined />} className='mt-5' onChange={formik.handleChange} />
                    {formik.touched.email && formik.errors.email ? (
                        <div className='text-red-700 mb-4'>{formik.errors.email}</div>
                    ) : <div className='mb-4'></div>}
                    <Input name='phone' size="large" placeholder="phone number" prefix={<PhoneOutlined />} className='mt-5' onChange={formik.handleChange} />
                    {formik.touched.phone && formik.errors.phone ? (
                        <div className='text-red-700 mb-4'>{formik.errors.phone}</div>
                    ) : <div className='mb-4'></div>}
                    <Input name='password' size="large" placeholder="password" prefix={<LockOutlined />} className='mt-5' onChange={formik.handleChange} />
                    {formik.touched.password && formik.errors.password ? (
                        <div className='text-red-700 mb-4'>{formik.errors.password}</div>
                    ) : <div className='mb-4'></div>}

                    <Button htmlType="submit" className='mt-5 w-full' style={{ background: '#6b62ff', color: 'white' }}>Register</Button>
                    <p className='mt-5'>Already have an account ? <a onClick={() => { history.push('./login') }}>Login now</a></p>
                </form>
            </div>
        </div>

    )
}
