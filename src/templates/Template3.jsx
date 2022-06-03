import React from "react";

function Template3({ profile, avatar }) {
  return (
    <>
      <div className="portfolio_preview_area">
        {/*-- TEMP LOGO AREA --*/}
        <div className="temp_header_part">
          <div className="portfolio_logo">
            <img src={avatar} alt="" />
          </div>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path
              fill={profile.template_color}
              fill-opacity="1"
              d="M0,96L48,122.7C96,149,192,203,288,234.7C384,267,480,277,576,240C672,203,768,117,864,106.7C960,96,1056,160,1152,176C1248,192,1344,160,1392,144L1440,128L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
            ></path>
          </svg>
        </div>
        {/*--- TEMP INFO BODY ---*/}
        <div className="temp_body_part">
          <h3 className="part_title">Profile Information</h3>
          <div className="body_container">
            <ul className="list-style">
              <li className="list-item">
                <h5 className="d-flex align-items-center">
                  <i class="bx bx-user-circle"></i>
                  Full-Name:
                  <span className="clientName">
                    {profile.fullName || "Delary fulton"}
                  </span>
                </h5>
              </li>
              <li className="list-item">
                <h5 className="d-flex align-items-center">
                  <i class="bx bx-envelope"></i>
                  E-mail:
                  <span className="clientEmail">
                    {profile.email || "developer@delary.us"}
                  </span>
                </h5>
              </li>
              <li className="list-item">
                <h5 className="d-flex align-items-center">
                  <i class="bx bx-phone"></i>
                  Phone:
                  <span className="clientPhone">
                    {profile.phone || "+1(384)92379"}
                  </span>
                </h5>
              </li>
              <li className="list-item">
                <h5 className="d-flex align-items-center">
                  <i class="bx bx-at"></i>
                  Website:
                  <span className="clientWeb">
                    {profile.website || "your website"}
                  </span>
                </h5>
              </li>
            </ul>
          </div>
          <h3 className="part_title">Profile Gallery</h3>
          <div className="tail_container">
            <div className="gallery_grid_container">
              <div className="gallery_wrapper">
                <img
                  src="/images/template_1.avif"
                  alt="Gallery 1"
                  width="90px"
                  height="90px"
                />
              </div>
              <div className="gallery_wrapper">
                <img
                  src="/images/template_2.avif"
                  alt="Gallery 2"
                  width="90px"
                  height="90px"
                />
              </div>
              <div className="gallery_wrapper">
                <img
                  src="/images/template_3.avif"
                  alt="Gallery 3"
                  width="90px"
                  height="90px"
                />
              </div>
            </div>
            <div className="contact_section">
              <a
                href={`mailto:${profile.email}`}
                style={{ background: profile.template_color }}
                className="temp_contact_btn"
              >
                Contact Me
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Template3;
