import React, { useState } from "react";
import Header from "../Components/Header"; // Header
import Footer from "../Components/Footer";
import { useLocation, useNavigate } from "react-router-dom";
// TEMPLATE (PREVIEWs)
import TemplatePreview1 from "../templates/Template1";
import TemplatePreview2 from "../templates/Template2";
import TemplatePreview3 from "../templates/Template3";
import axios from "axios";

function Setup() {
  //const { search } = useLocation();
  const location = useLocation();
  const navigateTo = useNavigate();
  const Fb_profile = location.state;
  //const query = new URLSearchParams(search);
  // USER STATE MANAGEMENT
  const [profile, setProfile] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  //const [isOk, setIsOk] = useState(false);

  // SET HANDLE CHANGE FUNCTION
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setProfile((values) => ({ ...values, [name]: value }));
  };

  // RENDER TEMPLATE BASED ON CHOICE
  let renderTemplate = (
    <h3 className="template_alert">Choice Your Template :)</h3>
  );

  // SET HANDLESUBMIT FUNCTION
  const handleSubmit = async (e) => {
    e.preventDefault();
    //setIsLoading(true);
    // MODIFY THE PROFILE AVATAR PROPERTY
    // SET FB PROFILE PICTURE STATE VALUE && CLIENT ID
    profile.avatar = Fb_profile.picture.data["url"];
    profile.client_id = Fb_profile.id;
    /*setProfile((prevState) => ({
      ...prevState,
      avatar: Fb_profile.picture.data.url,
    }));*/
    // MAKE HTTP POST REQUEST
    await axios
      .post(
        "https://fbportfoliosapi.herokuapp.com/api/v1/client/create_profile",
        profile,
      )
      .then((response) => {
        console.log(response.data);
        //alert("PROFILE SAVED SUCCESSFULLY 100% :)");
        if (response.data["status"] === 201) {
          setIsLoading(false);
          alert("PROFILE SAVED SUCCESSFULLY 100% :)");
          navigateTo(
            `/preview?profileID=${response.data.payload["profile_id"]}`,
          );
        } else {
          alert("Something Went Wrong !");
        }
        //console.log(profile);
      });
  };

  if (profile.template_type) {
    switch (profile.template_type) {
      case "1":
        renderTemplate = (
          <TemplatePreview1
            profile={profile}
            avatar={Fb_profile.picture.data["url"]}
          />
        );
        break;
      case "2":
        renderTemplate = (
          <TemplatePreview2
            profile={profile}
            avatar={Fb_profile.picture.data["url"]}
          />
        );
        break;
      case "3":
        renderTemplate = (
          <TemplatePreview3
            profile={profile}
            avatar={Fb_profile.picture.data["url"]}
          />
        );
        break;
      default:
        renderTemplate = (
          <h3 className="template_alert">No Template choiced !!</h3>
        );
    }
  }

  return (
    <>
      <Header />
      <main className="l-setup-pg setup-height">
        <div className="container d-flex justify-content-center">
          <div className="row w-100">
            <div className="col-md-7">
              <div className="portfolio_setup_area">
                {/*--- PORTFOLIO AVATAR ---*/}
                <span className="setup_profile_area">
                  <img
                    src={Fb_profile.picture.data["url"]}
                    width="70px"
                    height="70px"
                    alt="Setup Logo"
                  />
                </span>
                {/*--- PORTFOLIO FORMS ---*/}
                <div className="setup_profile_forms mt-5">
                  <form className="w-100" onSubmit={handleSubmit}>
                    <div className="d-flex justify-content-start align-items-center w-75">
                      <div className="col-5 col-md-5">
                        <input
                          type="text"
                          className="form-control profile_input"
                          placeholder="Enter Full Name"
                          required
                          value={
                            Fb_profile.first_name +
                              " " +
                              Fb_profile.last_name || profile.name
                          }
                          name="fullName"
                          onChange={handleChange}
                        ></input>
                      </div>
                      <div className="col-md-2"></div>
                      <div className="col-5 col-md-5">
                        <input
                          type="phone"
                          className="form-control profile_input"
                          placeholder="Enter Phone"
                          required
                          value={profile.phone || ""}
                          name="phone"
                          onChange={handleChange}
                        ></input>
                      </div>
                    </div>
                    <div className="col-md-9 mt-4">
                      <div className="mb-3">
                        <input
                          className="form-control profile_input"
                          type="file"
                          id="formFile"
                          value={profile.avatar || ""}
                          name="avatar"
                          onChange={handleChange}
                        ></input>
                      </div>
                    </div>
                    <div className="col-9 col-md-9">
                      <input
                        type="email"
                        className="form-control profile_input"
                        placeholder="Enter E-mail"
                        required
                        value={Fb_profile.email || profile.email}
                        name="email"
                        onChange={handleChange}
                      ></input>
                    </div>
                    <div className="d-flex justify-content-start align-items-center w-75">
                      <div className="col-md-5 col-5 mt-4">
                        <select
                          className="form-select profile_input"
                          aria-label="select Template"
                          required
                          value={profile.template_type || ""}
                          name="template_type"
                          onChange={handleChange}
                        >
                          <option selected>Select Template</option>
                          <option value="1">Template 1</option>
                          <option value="2">Template 2</option>
                          <option value="3">Template 3</option>
                        </select>
                      </div>
                      <div className="col-md-2"></div>
                      <div className="col-md-5 col-5 mt-4">
                        <input
                          type="color"
                          className="form-control profile_input"
                          placeholder="Pick Color"
                          required
                          value={profile.template_color || "#111"}
                          name="template_color"
                          onChange={handleChange}
                        ></input>
                      </div>
                    </div>
                    <div className="col-md-9 col-9 mt-4">
                      <input
                        type="text"
                        className="form-control profile_input"
                        placeholder="Enter Your Website"
                        required
                        value={profile.website || ""}
                        name="website"
                        onChange={handleChange}
                      ></input>
                    </div>
                    <span className="form_btn_wrapper">
                      <button className="form_save_btn">
                        {isLoading ? "Saving..." : "Save"}
                      </button>
                    </span>
                  </form>
                </div>
                {/*-- TEMPLATE OPTIONS SECTION --*/}
              </div>
            </div>
            {/*-- PORTFOLIO MARK UP SECTION --*/}
            <div className="col-md-5 my-auto text-center">{renderTemplate}</div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default Setup;
