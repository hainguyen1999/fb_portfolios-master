import React from 'react';

function Footer() {
  return (
    <>
      <footer className='w-100 footer_section d-flex justify-content-center align-items-center'>
        <div className='container'>
          <p className='ftr_copyrights my-auto'>
            Facebook Based Website Generator{' '}
            {/* <span className="author"></span> -{" "} */}
            {new Date().getFullYear()}
          </p>
        </div>
      </footer>
    </>
  );
}

export default Footer;
