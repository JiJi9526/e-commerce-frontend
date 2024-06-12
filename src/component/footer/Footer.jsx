import React from 'react'
import { Link } from "react-router-dom";
import { images } from '../images';

const Footer = () => {
    return (
        <section className='bg-black  py-16 text-white text-base'>
            <div className='max-w-1360px mx-auto'>
                <div className='flex mb-12 mx-auto justify-between tracking-tight'>
                    <div>
                        <div className='mb-7'>
                            <h2 className='pb-5'>Help</h2>
                            <div className=' text-neutral-400 space-y-6 text-sm flex flex-col'>
                                <Link>Customer Service</Link>
                                <Link>FAQs</Link>
                                <Link>Track Order</Link>
                                <Link>Accessibility</Link>
                            </div>
                        </div>
                        <div>
                            <h2 className='pb-5'>Contact Us</h2>
                            <div className=' text-neutral-400 space-y-6 text-sm flex flex-col'>
                                <Link>Email: calvinkleinmm@gmail.com</Link>
                                <Link>Call Us: 866.513.0513</Link>
                            </div>
                        </div>
                    </div>
                    <div className='pr-36'>
                        <div className='mb-7'>
                            <h2 className='pb-5'>About</h2>
                            <div className=' text-neutral-400 space-y-6 text-sm flex flex-col'>
                                <Link to=''>About Calvin Klein</Link>
                                <Link to=''>Privacy Commitment</Link>
                                <Link to=''>Sustainability + Inclusivity</Link>
                            </div>
                        </div>
                        <div>
                            <h2 className='pb-5'>Explore</h2>
                            <div className=' text-neutral-400 space-y-6 text-sm'>
                                <Link to=''>#MYCALVINS</Link>
                            </div>
                        </div>
                    </div>

                    <div className=' w-2/6'>
                        <p>Text JOIN to 225846 to get Free Shipping</p>
                        <p className='text-neutral-400 text-sm py-4'>Sign up for mobile texts to receive offer. Never miss out on exclusive launches, styles and promotions.</p>

                        <div className='flex space-x-6 pt-3'>
                            <a href='https://www.instagram.com/calvinklein' target='_blank'>
                                <img src={images.instagram} alt="" className='size-6' />
                            </a>
                            <a href='https://www.tiktok.com/@calvinklein' target="_blank">
                                <img src={images.tiktok} alt="" className='size-6' />
                            </a>
                            <a href='https://www.facebook.com/CalvinKlein/' target='_blank'>
                                <img src={images.facebook} alt="" className='size-6' />
                            </a>
                            <a href='https://x.com/calvinklein' target='_blank'>
                                <img src={images.x} alt="" className='size-6' />
                            </a>
                            <a href='https://www.pinterest.com/calvinklein/' target='_blank'>
                                <img src={images.pinterest} alt="" className='size-6' />
                            </a>
                            <a href='https://www.youtube.com/calvinklein' target='_blank'>
                                <img src={images.youtube} alt="" className='size-6' />
                            </a>
                        </div>
                    </div>
                </div>
                <div className='flex-col flex'>
                    <a href='/' className='text-2xl mb-4'>Calvin Klein</a>
                    <Link className='text-neutral-400 text-[13px] font-extralight tracking-wider'>PVH Corp. Joint Modern Slavery Act Statement  |  Privacy Policy  |  Interest Based Ads  |  Do Not Sell or Share My Personal Information  |  Terms & Conditions</Link>
                    <p className='text-neutral-400 text-[13px] font-extralight tracking-wider'>Web ID: 890635683 Copyright  |  © 2024 Calvin Klein. All rights reserved.</p>
                </div>
            </div>
        </section>
    )
}

export default Footer