import React from 'react'
import profile from './profile.jpeg'

const Landing = () => {
    return (
        <div>
            <div class="divider"></div>
            <div class="section">
                <h5>About me</h5>
                <div style={{display: "flex", flexDirection: "row"}}>
                    <img src={profile} alt="Me" style={{verticalAlign: "middle", width: "90px", height: "100px", borderRadius: "50%"}}></img>
                    <p style={{marginLeft: "30px"}}>Currently a Data Engineer at Aetna. Looking for ways to improve health outcomes with new technology. 
                    You can visit my <a href="https://morrishsu.com/">website</a></p>
                </div>
            </div>
            <div class="divider"></div>
            <div class="section">
                <h5>User Guide</h5>
                <p>This is a full stack react app I built for fun. Users can send out email surveys via 
                    the app. The results of the survey would be collected and displayed to the users.
                </p>
            </div>
            <div class="divider"></div>
            <div class="section">
                <h5>Tech Stack</h5>
                <p>Front-End: React, Redux</p>
                <p>Back-End: Express </p>
                <p>Email service: Sendgrid</p>
                <p>Database: MongoDB</p>
                <p>Payment: Stripe</p>
            </div>

        </div>
    )
}

export default Landing