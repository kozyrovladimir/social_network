import React from 'react';
import './App.css';

function App() {
    return (
        <div className="app-wrapper">
            <header className="header">
                <div className="logo-container">
                    <img src="logo.svg" alt="logo"/>
                </div>
            </header>
            <nav className="nav">
                <div>
                    <a href="">Profile</a>
                </div>
                <div>
                     <a href="">Messages</a>
                </div>
                <div>
                    <a href="">News</a>
                </div>
                <div>
                     <a href="">Music</a>
                </div>
            </nav>
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
            <footer className="footer">
                <span>2021</span>
            </footer>
        </div>
    );
}

export default App;
