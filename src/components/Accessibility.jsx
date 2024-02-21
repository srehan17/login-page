import React from 'react'
import accessibilityIcon from '../images/accessibility-icon.jpeg'

const Accessibility = () => {
    return (
        <img
            src={accessibilityIcon}
            style={{ position: 'fixed', right: '0px', top: '200px', width: '50px', borderRadius: '50px', cursor: 'pointer' }}
            alt="Accessibility" />
    )
}

export default Accessibility