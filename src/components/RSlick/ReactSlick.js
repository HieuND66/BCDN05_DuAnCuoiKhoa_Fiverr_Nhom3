import React, { Component } from "react";
import Slider from "react-slick";

export default class ReactSlick extends Component {
    render() {
        var settings = {
            dots: true,
            infinite: false,
            speed: 500,
            slidesToShow: 4,
            slidesToScroll: 1,
            initialSlide: 0,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3,
                        infinite: true,
                        dots: true
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2,
                        initialSlide: 2
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        };
        return (
            <div className="container">
                <h2 className="mt-5 ml-3">Popular professional services</h2>  
                <Slider {...settings}>

                    
                    <div className="px-4">
                        <div className="max-w-xs rounded-md shadow-md dark:bg-gray-900 dark:text-gray-100 relative hover:opacity-80 transition-all  cursor-pointer">
                            <img src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_255,dpr_1.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741678/logo-design-2x.png" alt="" className="object-cover object-center w-full rounded-md  dark:bg-gray-500" />
                            <div className="flex flex-col justify-between p-6 space-y-8 absolute top-0 left-0">
                                <div className="">
                                    <p className="text-white text-lg mb-0">Build your brand</p>
                                    <h2 className="text-3xl font-semibold tracking-wide text-white">Logo Design</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="px-4">
                        <div className="max-w-xs rounded-md shadow-md dark:bg-gray-900 dark:text-gray-100 relative hover:opacity-80 transition-all  cursor-pointer">
                            <img src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_255,dpr_1.0/v1/attachments/generic_asset/asset/ae11e2d45410b0eded7fba0e46b09dbd-1598561917003/wordpress-2x.png" alt="" className="object-cover object-center w-full rounded-md  dark:bg-gray-500" />
                            <div className="flex flex-col justify-between p-6 space-y-8 absolute top-0 left-0">
                                <div className="">
                                    <p className="text-white text-lg mb-0">Customize your site</p>
                                    <h2 className="text-3xl font-semibold tracking-wide text-white">WordPress</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="px-4">
                        <div className="max-w-xs rounded-md shadow-md dark:bg-gray-900 dark:text-gray-100 relative hover:opacity-80 transition-all  cursor-pointer">
                            <img src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_255,dpr_1.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741669/voiceover-2x.png" alt="" className="object-cover object-center w-full rounded-md  dark:bg-gray-500" />
                            <div className="flex flex-col justify-between p-6 space-y-8 absolute top-0 left-0">
                                <div className="">
                                    <p className="text-white text-lg mb-0">Share your message</p>
                                    <h2 className="text-3xl font-semibold tracking-wide text-white">Voice Over</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="px-4">
                        <div className="max-w-xs rounded-md shadow-md dark:bg-gray-900 dark:text-gray-100 relative hover:opacity-80 transition-all  cursor-pointer">
                            <img src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_255,dpr_1.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741663/animated-explainer-2x.png" alt="" className="object-cover object-center w-full rounded-md  dark:bg-gray-500" />
                            <div className="flex flex-col justify-between p-6 space-y-8 absolute top-0 left-0">
                                <div className="">
                                    <p className="text-white text-lg mb-0">Engage your audience</p>
                                    <h2 className="text-3xl font-semibold tracking-wide text-white">Video Explaner</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="px-4">
                        <div className="max-w-xs rounded-md shadow-md dark:bg-gray-900 dark:text-gray-100 relative hover:opacity-80 transition-all  cursor-pointer">
                            <img src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_255,dpr_1.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741667/social-2x.png" alt="" className="object-cover object-center w-full rounded-md  dark:bg-gray-500" />
                            <div className="flex flex-col justify-between p-6 space-y-8 absolute top-0 left-0">
                                <div className="">
                                    <p className="text-white text-lg mb-0">Reach more customers</p>
                                    <h2 className="text-3xl font-semibold tracking-wide text-white">Social Media</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </Slider>
            </div>
        );
    }
}