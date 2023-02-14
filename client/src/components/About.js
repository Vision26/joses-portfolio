import React from 'react'

function About() {

    return (
        <div className='about-container'>
            <div>
                <br />
                <br />
                <br />
                <h1>About me</h1>
                <br />
                {/* <hr /> */}
                <br />
                <main>
                    <p>My name is Jose, and I love to challenge myself
                        to create new things. The root of my creativity
                        comes from creating music, painting, drawing, and
                        graphic design. That is until I discovered web
                        development that I realized I am able to implement
                        these roots in tech.</p>
                </main>
            </div>
           
            <div className='list'>
                <h3>Technical Skills</h3>
                <br/>
                <ul>
                    <li>React</li>
                    <li>MongoDb</li>
                    <li>Mongoose</li>
                    <li>Express</li>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>Github</li>
                    <li>Linux-Ubuntu</li>
                    <li>React Router</li>
                    <li>Javascript</li>
                    <li>Axios</li>
                    <li>Postman</li>
                    <li>Node.js</li>
                    <li>Adobe Illustrator</li>
                    <li>Adobe Photoshop</li>
                </ul>
            </div>

        </div>
    )
}

export default About