import React from 'react'
import logo from '../images/logoNew.png'
import appleLogo from '../images/apple-logo.png'

const Main = () => {

    const handleSubmit = () => { }

    return (
        <div className='container'>
            <div className='left-container'>
                <div className="scroll-container">
                    <img src="img_5terre.jpg" alt="Cinque Terre" />
                    <img src="img_forest.jpg" alt="Forest" />
                    <img src="img_lights.jpg" alt="Northern Lights" />
                    <img src="img_mountains.jpg" alt="Mountains" />
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