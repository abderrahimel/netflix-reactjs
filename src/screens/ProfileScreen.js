import React from 'react'
import { selectUser } from '../features/userSlice'
import Nav from '../Nav'
import './ProfileScreen.css'
import { useSelector } from 'react-redux'
import { auth } from '../firebase'

function ProfileScreen() {
    const user = useSelector(selectUser)
    return (
        <div className='profileScreen'>
            <Nav/>
            <div className="profileScreen__body">
                <h1> Edit Profile </h1>
                <div className="profileScreen__info">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
                    alt=""
                    />
                    <div className="profileScreen__details">
                        <h2> {user.email}</h2>
                        <div className="profileScreen__plans">
                            <h3>Plans</h3>
                            <div className="netflix_standard">
                                <h3> Netflix Standard</h3>
                                <h4>1080p</h4>
                                <button>Subscribe</button>
                            </div>
                            <div className="netflix_basic">
                            <h3> Netflix Basic</h3>
                                <h4>480p</h4>
                                <button>Subscribe</button>
                            </div>
                            <div className='netflix_premium'>
                            <h3> Netflix Premium</h3>
                                <h4>4k+HDR</h4>
                                <span>Current Package</span>
                            </div>
                            <button 
                            onClick={() => auth.signOut()}
                            className='profileScreen__signOut'> Sign Out</button>

                        </div>

                    </div>
                </div>

            </div>
        </div>
    )
}

export default ProfileScreen
