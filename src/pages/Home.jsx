import React from 'react';
import Header from '../Components/Header'; // Header
import Footer from '../Components/Footer';
import temp_data from '../Components/temp_data';
import { Link, Route, Routes, useNavigate } from 'react-router-dom';
import Setup from './Setup';
import OAuth2Login from 'react-simple-oauth2-login';
import HomeBanner from '../images/home_banner.jpg';

function Home() {
  // USE HISTORY
  const navigateTo = useNavigate();

  const onSuccess = async (response) => {
    const { access_token } = response;
    console.log(access_token);
    const fb_response = await fetch(
      `https://graph.facebook.com/me?fields=id,first_name,last_name,email,website,picture.type(large)&access_token=${access_token}`
    );
    const results = await fb_response.json();
    const user_posts = await fetch(
      `https://graph.facebook.com/${results.id}/feed?fields=user_posts&access_token=${access_token}`
    );
    const posts_data = await user_posts.json();
    console.log(posts_data);
    navigateTo('/setup', { state: results });
    console.log(results);
  };

  const onFailure = (response) => {
    alert(response);
    console.log(response);
  };

  return (
    <>
      <Header />
      <main className='l-home home-height'>
        <div className='container mt-5'>
          <div className='row d-flex justify-content-center '>
            <div className='col-md-6 col-6 col-sm-6'>
              <div className='banner_text_content'>
                <h1 className='banner_title'>
                  Generate portfolios with one-click
                </h1>
                <p className='banner_para'>
                  with one-click you can generate a portfolio based-on your
                  Facebook profile data.
                </p>
                <OAuth2Login
                  buttonText='Create Portfolio'
                  authorizationUrl='https://www.facebook.com/dialog/oauth'
                  responseType='token'
                  clientId='721517625728226'
                  scope='public_profile'
                  redirectUri='http://localhost:3000'
                  onSuccess={onSuccess}
                  onFailure={onFailure}
                />
              </div>
              {/*--<form onSubmit={handleSubmit} autoComplete="off">
                  <div className="d-flex">
                    <input
                      type="text"
                      onChange={handleChange}
                      value={query}
                      className="form-control w-75 FormInput"
                      placeholder="Enter Facebook Profile URL"
                    />
                    <button
                      className={`form-btn ${isNull ? "disable" : "pointer"}`}
                    >
                      Create
                    </button>
                  </div>
                </form>--*/}
            </div>
            <div className='col-md-6 col-6 col-sm-12'>
              <div className='banner_content_wrapper'>
                <img
                  src={HomeBanner}
                  width='100%'
                  height='100%'
                  alt='Home Banner'
                />
              </div>
            </div>
          </div>
        </div>
      </main>
      <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 320'>
        <path
          fill='#2686ed'
          fillOpacity='1'
          d='M0,160L48,181.3C96,203,192,245,288,229.3C384,213,480,139,576,122.7C672,107,768,149,864,186.7C960,224,1056,256,1152,240C1248,224,1344,160,1392,128L1440,96L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z'
        ></path>
      </svg>
      <div className='templates_section container-fluid'>
        <h1 className='section_title'>Templates</h1>
        <div className='container'>
          <div className='row row_defined_height w-75 mx-auto'>
            {temp_data.map((template, index) => {
              return (
                <div className='col-md-4' key={index}>
                  <div className='card_temp_area'>
                    <span className='temp_img_wrapper'>
                      <img
                        src={template.img_prev}
                        alt='template 1'
                        width='70px'
                        height='70px'
                      />
                    </span>
                    <div className='temp_details_area'>
                      <h3>{template.template_name}</h3>
                    </div>
                    <div className='wall'>
                      <div className='wall_wrapper'>
                        <Link to={template.preview_temp}>Preview</Link>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <Routes>
        <Route path='/setup' element={<Setup />} />
      </Routes>
      <Footer />
    </>
  );
}

export default Home;
