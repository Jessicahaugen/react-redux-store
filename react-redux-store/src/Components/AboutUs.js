import React from 'react'
import Footer from './Footer'



export default function AboutUs() {
    return (
        <div className="AboutUsPage">
            <div className="aboutUsInfo">
            <h1>About Us</h1>
                <p>Established in Vancouver in 2014, Cleos Coffee is a team of experienced and passionate coffee-lovers, with a drive to showcase, educate and inspire our customers about specialty coffee. /
                 We pride ourselves on being a locally owned and community-minded coffee company, and stand above the rest with our unwavering dedication to providing our community with an excellent product and love for specialty coffee. </p>
                <a href="./Products">Shop Now </a>
            </div>
            <div className ="emptyDiv">
            </div>
            <Footer />
        </div>
    )
}
