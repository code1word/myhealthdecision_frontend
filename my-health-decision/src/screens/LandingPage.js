import React from "react";
import "./LandingPage.css";
import dummy_photo from "../assets/dummy_photo.png";

function LandingPage() {
  return (
    <div className="landing_page_outer_container">
      <div className="landing_page_header">
        Let's get you a doc who gets you
      </div>
      <div className="landing_page_card_container">
        <div className="landing_page_card">
          <img className="landing_page_card_photo" src={dummy_photo} />
          <div className="landing_page_card_text">
            Browse providers who take your insurance
          </div>
          <button className="landing_page_card_button">See specialties</button>
        </div>
        <div className="landing_page_card">
          <img className="landing_page_card_photo" src={dummy_photo} />
          <div className="landing_page_card_text">Read reviews from users</div>
          <button className="landing_page_card_button">See providers</button>
        </div>
        <div className="landing_page_card">
          <img className="landing_page_card_photo" src={dummy_photo} />
          <div className="landing_page_card_text">
            Book an appointment today, online
          </div>
          <button className="landing_page_card_button">See availability</button>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
