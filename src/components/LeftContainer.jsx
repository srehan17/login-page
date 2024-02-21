import React, { useEffect } from 'react'
import image1 from '../images/image1.png'
import image2 from '../images/image2.png'
import image3 from '../images/image3.png'
import image4 from '../images/image4.png'

const LeftContainer = () => {

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

    return (
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
    )
}

export default LeftContainer