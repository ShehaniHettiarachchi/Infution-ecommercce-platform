import React from 'react';
import HomeNavBar from '../HomeNavBar';
import Footer from '../Footer';
import {Link} from "react-router-dom";


export default function LoadingPage() {
    return (
        <>
            <HomeNavBar />
            <div className='body8'>

                <div className='topic1'>

                    <h1>Welcome To</h1>
                    <h1>Infution E-Commerce Platform</h1>

                </div>

                <div className='topic2'>
                    <p>Qyuick Search</p>
                </div>

                <div className='topic3'>
                    <p>Pay Online</p>
                </div>

                <div className='topic4'>
                    <p>Smartcard</p>
                </div>

                <div className='topic5'>
                    <p>NFC Technology</p>
                </div>

                <Link to = '/add-feedback'><button  className="learn_btn"> Learn More </button></Link>


            </div>
            <Footer />
        </>

    )
}
