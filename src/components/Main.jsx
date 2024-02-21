import React, { useEffect } from 'react'
import logo from '../images/logoNew.png'
import appleLogo from '../images/apple-logo.png'
import image1 from '../images/image1.png'
import image2 from '../images/image2.png'
import image3 from '../images/image3.png'
import image4 from '../images/image4.png'

const Main = () => {
    useEffect(() => {
        let slideIndex = 0
        const showSlides = () => {
            let i
            let slides = document.getElementsByClassName("mySlides")
            let dots = document.getElementsByClassName("dot")
            if (slides.length === 0 || dots.length === 0) return // Exit early if elements are not found
            for (i = 0; i < slides.length; i++) {
                slides[i].style.display = "none"
            }
            slideIndex++
            if (slideIndex > slides.length) { slideIndex = 1 }
            for (i = 0; i < dots.length; i++) {
                dots[i].className = dots[i].className.replace(" active", "")
            }
            slides[slideIndex - 1].style.display = "block"
            dots[slideIndex - 1].className += " active"
            setTimeout(showSlides, 2000) // Change image every 2 seconds
        }
        showSlides()
    }, []) // Empty dependency array ensures this effect runs only once after mounting

    const handleSubmit = () => { }

    return (
        <div className='container'>
            <div className='left-container'>
                <div className="slideshow-container">
                    <div className="mySlides fade">
                        <img src={image1} style={{ width: '100%' }} />
                    </div>
                    <div className="mySlides fade">
                        <img src={image2} style={{ width: '100%' }} />
                    </div>
                    <div className="mySlides fade">
                        <img src={image3} style={{ width: '100%' }} />
                    </div>
                    <div className="mySlides fade">
                        <img src={image4} style={{ width: '100%' }} />
                    </div>
                    <div style={{ textAlign: 'center', marginTop: '20px' }}>
                        <span className="dot"></span>
                        <span className="dot"></span>
                        <span className="dot"></span>
                        <span className="dot"></span>
                    </div>
                </div>
            </div>
            <div className='right-container'>
                <img src={logo} style={{ width: '180px' }} />
                <div className='border'></div>
                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', width: '60%', marginTop: '20px' }}>
                    <label style={{ display: 'flex', flexDirection: 'column', marginTop: '10px' }}><div>User name or email</div><input type='text' /></label>
                    <label style={{ display: 'flex', flexDirection: 'column', marginTop: '10px' }}><div>Password</div><input type='text' /></label>
                    <a style={{ fontSize: '0.8rem', marginTop: '10px', alignSelf: 'flex-end', }} href="#">Forgot Password?</a>
                </form>
                <button style={{ backgroundColor: "#ffa841" }}>
                    Login
                </button>
                <div>or</div>
                <button style={{ backgroundColor: '#1c9dcf' }}>Continue with Microsoft</button>
                <button style={{ backgroundColor: "#1c9dcf" }}>Continue with LinkedIn</button>
                <button style={{ backgroundColor: '#f46c42' }}>Continue with Google</button>
                <button style={{ display: 'flex', flexDirection: 'row', border: '1px solid gray', alignItems: 'center', justifyContent: 'center', gap: '5px' }}>
                    <img src={appleLogo} alt="Apple logo" width={'25px'} />
                    <span style={{ color: 'black' }}>Continue with Apple</span>
                </button>
                <button style={{ backgroundColor: '#f46c42' }}>Continue with Magnet</button>
                <div style={{ marginTop: '20px' }}>
                    <span>Don't have an account?</span>
                    <a href="#" style={{ color: 'green', marginLeft: '7px' }}>Sign up</a>
                </div>
            </div>
        </div>
    )
}

export default Main