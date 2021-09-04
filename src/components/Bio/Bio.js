import React from 'react'
import kid from '../../assets/kid.png'
import './Bio.css'

function Bio() {
    return (
        <div className="bio">
            <img src={kid} height='300' width='500'  alt="" />
            <div>
                <h4 className="bioDesc" style={{color: 'white'}}>hii</h4>
            </div>
        </div>
    )
}

export default Bio
