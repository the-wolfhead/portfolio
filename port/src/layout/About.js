import React from 'react'

function About() {
  const containerStyle = {
    backgroundImage: `url('../image/6fc39efb-c45b-45bb-b009-a23215f70566.jpg')`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    width: '100%',
    height: '100vh',
  };
  return (
    <div className="w3-black">
      <div className="rain">
        <div className="lightining">
         <div className="w3-padding-large main" style={containerStyle}>

      
          <header className="w3-container w3-padding-64 w3-center " id="home">
        
          </header>
          <div className="w3-content w3-justify w3-text-grey w3-padding-64">

        
          <h2 className="w3-text-light-grey w3-center">ABOUT ME</h2>

          <p>I am a lover of indie and emo music, an avid reader of epic fantasy and dystopian fiction and an anime buff. I love to learn about how things work, what makes them tick and why they behave the way they do. That is the reason I got into web development and programming. I started my journey with graphics design and from there, I discovered UI/UX. then it was front end, then back end, then data analysis. it has been an amazing journey and i have enjoyed every minute of it. So, if you ever have a project that you think might be a learning experience, or explore new fields, i would love to join in your pilgrimage to knowledge.</p>
          </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About