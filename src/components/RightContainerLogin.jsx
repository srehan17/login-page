import React, { useState } from 'react'
import logo from '../images/logoNew.png'
import appleLogo from '../images/apple-logo.png'
import { useNavigate } from 'react-router-dom'

const RightContainerLogin = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()


    const handleChange = (e) => {
        const { username, password } = e.target
        setUsername(username)
        setPassword(password)

    }
    const handleSubmit = (e) => {
        e.preventDefault()
        setUsername('')
        setPassword('')
        navigate("/logged-in")
    }

    return (
        <div className='right-container'>
            <img src={logo} style={{ width: '180px' }} />
            <div className='border'></div>
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', width: '60%', marginTop: '20px' }}>
                <label style={{ display: 'flex', flexDirection: 'column', marginTop: '10px' }}><div>User name or email</div><input type='text' value={username} onChange={handleChange} /></label>
                <label style={{ display: 'flex', flexDirection: 'column', marginTop: '10px' }}><div>Password</div><input type='password' value={password} onChange={handleChange} /></label>
                <a style={{ fontSize: '0.8rem', marginTop: '10px', alignSelf: 'flex-end', }} href="#">Forgot Password?</a>
                <button style={{ backgroundColor: "#ffa841", width: '100%' }}>
                    Login
                </button></form>
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
    )
}

export default RightContainerLogin