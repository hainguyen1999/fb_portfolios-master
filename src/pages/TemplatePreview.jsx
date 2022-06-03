import React, { useEffect, useState } from "react";
// IMPORT TEMPLATES
import Template1 from "../templates/Template1";
import Template2 from "../templates/Template2";
import Template3 from "../templates/Template3";
import { useLocation } from "react-router-dom";
import axios from "axios";

//IMPORT FOOTER
import Footer from "../Components/Footer";

function TemplatePreview() {
  const { search } = useLocation();
  const query = new URLSearchParams(search);

  // PROFILE STATE MANAGEMENT OBJECT
  const [myProfile, setMyProfile] = useState({});

  const getProfile = async () => {
    await axios
      .get(
        `https://fbportfoliosapi.herokuapp.com/api/v1/client/get_profile/${query.get(
          "profileID",
        )}`,
      )
      .then((response) => {
        if (response) {
          //console.log(typeof response.data.payload["template_type"]);
          setMyProfile(response.data.payload);
        } else {
          console.log(response.data);
          alert("Something went wrong!");
        }
      });
  };

  useEffect(() => {
    getProfile();
  }, []);

  // RENDER ON COMPONENT LOAD
  let renderTemplate = (
    <h3 className="template_alert">Choice Your Template :)</h3>
  );

  switch (myProfile["template_type"]) {
    case "1":
      renderTemplate = (
        <Template1 profile={myProfile} avatar={myProfile["avatar"]} />
      );
      break;
    case "2":
      renderTemplate = (
        <Template2 profile={myProfile} avatar={myProfile["avatar"]} />
      );
      break;
    case "3":
      renderTemplate = (
        <Template3 profile={myProfile} avatar={myProfile["avatar"]} />
      );
      break;
    default:
      renderTemplate = <h1>No Profile Found With This Profile ID :(</h1>;
  }

  //console.log("MY PROFILE" + myProfile.fullName);

  return (
    <>
      <div className="l-preview preview_height container">{renderTemplate}</div>
      <Footer />
    </>
  );
}

export default TemplatePreview;
