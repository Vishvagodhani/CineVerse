import React from 'react'
import "../../css/Help.css"
function Help() {
  return (
    <>
    
<section className="page-header">
  <div className="container">
    <span className="eyebrow">We're here to help</span>
    <h1>Help &amp; Support</h1>
    <p>Answers about your account, browsing movies, and everything in between.</p>
  </div>
</section>

<section className="container">
  <form className="help-search" onsubmit="return false;">
    <input type="text" placeholder="Search for help articles, e.g. 'reset password'"/>
    <button className="btn btn-primary" type="submit"><i className="fa-solid fa-magnifying-glass"></i> Search</button>
  </form>
</section>

<section className="container">
  <div className="help-grid">
    <div className="help-topic">
      <i className="fa-solid fa-user-gear"></i>
      <h3>Account Help</h3>
      <p>Manage your login, password, subscription, and profile settings.</p>
    </div>
    <div className="help-topic">
      <i className="fa-solid fa-film"></i>
      <h3>Movie Information</h3>
      <p>Learn how ratings, release dates, and cast details are sourced and updated.</p>
    </div>
    <div className="help-topic">
      <i className="fa-solid fa-headset"></i>
      <h3>Contact Support</h3>
      <p>Reach our team directly for anything not covered in the FAQ below.</p>
    </div>
  </div>
</section>

<section className="container">
  <div
  className="faq-title"
  style={{
    justifyContent: "center",
    textAlign: "center",
    flexDirection: "column"
  }}
>
    <h2 style={{ paddingLeft: 0 }}>Frequently Asked Questions</h2>
  </div>
  <div className="faq-list">

    <div className="faq-item">
      <h4><i className="fa-solid fa-circle-question"></i> How do I create a MOVIEVERSE account?</h4>
      <p>Click Sign Up in the top navigation, fill in your name, email, and password, then agree to the terms to get started.</p>
    </div>

    <div className="faq-item">
      <h4><i className="fa-solid fa-circle-question"></i> How is the IMDb rating calculated?</h4>
      <p>Ratings shown on movie pages reflect aggregated audience scores at the time of publishing and may update periodically.</p>
    </div>

    <div className="faq-item">
      <h4><i className="fa-solid fa-circle-question"></i> Can I add movies to a watchlist?</h4>
      <p>Yes — open any movie's detail page and select "Add to Watchlist" to save it for later.</p>
    </div>

    <div className="faq-item">
      <h4><i className="fa-solid fa-circle-question"></i> How do I reset my password?</h4>
      <p>On the Log In page, select "Forgot Password" and follow the instructions sent to your registered email.</p>
    </div>

    <div className="faq-item">
      <h4><i className="fa-solid fa-circle-question"></i> How do I join a community discussion?</h4>
      <p>Visit the Community page, open any thread, and select "Join Discussion" to add your voice.</p>
    </div>

  </div>

  
  <div className="contact-support">
    <h3>Still need help?</h3>
    <p>Our support team typically responds within 24 hours.</p>
    <a href="#" className="btn btn-primary">Contact Support</a>
    <div className="contact-methods">
      <div><i className="fa-regular fa-envelope"></i>support@movieverse.example</div>
      <div><i className="fa-solid fa-comments"></i>Live Chat, 9am–6pm</div>
      <div><i className="fa-solid fa-phone"></i>+1 (555) 010-2024</div>
    </div>
  </div>
</section>

    </>
  )
}

export default Help