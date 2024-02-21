import React, { useState } from 'react'
import logo from '../images/logoNew.png'
import appleLogo from '../images/apple-logo.png'
import { useNavigate } from 'react-router-dom'

const RightContainerRegister = () => {
    const [firstname, setFirstname] = useState('')
    const [lastname, setLastname] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [email, setEmail] = useState('')
    const [username, setUsername] = useState('')
    const [userType, setUserType] = useState('')
    const [language, setLanguage] = useState('')
    const [notification, setNotification] = useState('')

    const navigate = useNavigate()

    const handleChange = (e) => {
        const { firstname, lastname, password, email, userType, language, username, confirmPassword } = e.target
        setFirstname(firstname)
        setLastname(lastname)
        setUsername(username)
        setPassword(password)
        setConfirmPassword(confirmPassword)
        setUserType(userType)
        setLanguage(language)
        setEmail(email)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (password && password.length < 8) {
            console.log(password)
            setNotification('The password must be at least 8 characters.')
            return
        }
        if (password !== confirmPassword) {
            setNotification("Passwords do not match")
            return
        }
        setUsername('')
        setPassword('')
        navigate("/registered")
    }

    return (
        <div className='right-container'>
            <img src={logo} style={{ width: '180px' }} />
            <div className='border'></div>
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', width: '60%', marginTop: '20px' }}>
                <label style={{ display: 'flex', flexDirection: 'column', marginTop: '10px' }}><div>First Name</div><input type='text' value={firstname} onChange={handleChange} /></label>
                <label style={{ display: 'flex', flexDirection: 'column', marginTop: '10px' }}><div>Last Name</div><input type='text' value={lastname} onChange={handleChange} /></label>
                <label style={{ display: 'flex', flexDirection: 'column', marginTop: '10px' }}><div>Username</div><input type='text' value={username} onChange={handleChange} /></label>
                <label style={{ display: 'flex', flexDirection: 'column', marginTop: '10px' }}><div>Password</div><input type='password' value={password} onChange={handleChange} /></label>
                <div style={{ height: '20px', fontSize: '0.8rem', color: 'red' }}>{notification}</div>
                <div style={{ fontSize: '0.9rem', color: 'gray' }}>
                    <b>Strength:</b>
                    <ul style={{ margin: '0px', padding: '10px' }}>Password must include:
                        <li>8 to 14 characters</li>
                        <li>1 uppercase letter</li>
                        <li>1 lowercase letter</li>
                        <li>1 number</li>
                        <li>1 special character</li>
                        {/* <span>[@#$%^&*?_~-()+={ }[]|;:'“<>/,.]</span> */}</ul>
                </div>
                <label style={{ display: 'flex', flexDirection: 'column', marginTop: '10px' }}><div>Confirm password</div><input type='password' value={confirmPassword} onChange={handleChange} /></label>
                <label style={{ display: 'flex', flexDirection: 'column', marginTop: '10px' }}><div>Email</div><input type='text' value={email} onChange={handleChange} /></label>
                <label style={{ display: 'flex', flexDirection: 'column', marginTop: '10px' }}><div>User type</div><input type='text' value={userType} onChange={handleChange} /></label>
                <div style={{ fontSize: '0.7rem', textAlign: 'right' }}>Optional</div>
                <label style={{ display: 'flex', flexDirection: 'column', marginTop: '10px' }}><div>Select Language</div><input type='text' value={language} onChange={handleChange} /></label>

                By registering, you agree to the Prepr Terms of use, Privacy policy and cookie policy

                <button type="submit" style={{ backgroundColor: "#ffa841", width: '100%' }}>
                    Register
                </button>
            </form>
            <div>or</div>
            <button style={{ backgroundColor: '#1c9dcf' }}>Continue with Microsoft</button>
            <button style={{ backgroundColor: "#1c9dcf" }}>Continue with LinkedIn</button>
            <button style={{ backgroundColor: '#f46c42' }}>Continue with Google</button>
            <button style={{ display: 'flex', flexDirection: 'row', border: '1px solid gray', alignItems: 'center', justifyContent: 'center', gap: '5px' }}>
                <img src={appleLogo} alt="Apple logo" width={'25px'} />
                <span style={{ color: 'black' }}>Continue with Apple</span>
            </button>
            <button style={{ backgroundColor: '#f46c42' }}>Continue with Magnet</button>
            <div style={{ marginTop: '20px', width: '60%', textAlign: 'center', fontSize: '0.9rem' }}>
                <div style={{ margin: '10px' }}>Already have an account? <span>Log in</span></div>
                <div>Are you an organization? <span>Organization register</span></div>
                <a href="#" style={{ color: 'green', marginLeft: '7px' }}>Sign up</a>
            </div>
        </div>
    )
}

export default RightContainerRegister