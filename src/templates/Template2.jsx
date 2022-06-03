import React from "react";

function Template2({ profile, avatar }) {
  return (
    <>
      <div className="portfolio_preview_area">
        {/*-- TEMP LOGO AREA --*/}
        <div className="temp_header_part">
          <div className="portfolio_logo template_face2">
            <img src={avatar} alt="" />
          </div>
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
                    {profile.fullName || "Alice gabriel"}
                  </span>
                </h5>
              </li>
              <li className="list-item">
                <h5 className="d-flex align-items-center">
                  <i class="bx bx-envelope"></i>
                  E-mail:
                  <span className="clientEmail">
                    {profile.email || "alice@gabreil.mx"}
                  </span>
                </h5>
              </li>
              <li className="list-item">
                <h5 className="d-flex align-items-center">
                  <i class="bx bx-phone"></i>
                  Phone:
                  <span className="clientPhone">
                    {profile.phone || "+1(423)9238"}
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
                href={`tel:${profile.email}`}
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

export default Template2;
