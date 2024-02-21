import React from 'react'

const Footer = () => {
    return (
        <div className='footer'>
            <div>v26.0.9</div>
            <div style={{ display: 'flex', width: '300px', justifyContent: 'space-evenly', fontWeight: 'bold' }}>
                <a href="#">Privacy Policy</a>
                <a href="#">Terms of Use</a>
                <a href="#">Help Center</a>
            </div >
            <div>Powered by <a href="https://learnlab.ai/" style={{ all: 'unset' }}><b>LearnLab.ai</b></a></div>
        </div >
    )
}

export default Footer