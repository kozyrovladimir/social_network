import React from 'react';

function Profile () {
    return (
        <div className="main-content">
            <div className="head-image-container">
            </div>
            <div className="profile">
                <div className="profile-img">
                    <img src="cat.jpg" alt="cat"/>
                </div>
                <div className="profile-info">
                    <h2>vladimir</h2>
                    <p>Age: 26</p>
                    <p>Hobby: computer games</p>
                    <p>Working: web-developer</p>
                </div>
            </div>
        </div>
    )
}

export default Profile;