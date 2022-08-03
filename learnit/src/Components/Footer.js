import React from 'react'

function Footer() {
  return (
    <>
      <footer className="section site-footer bg-dark">
      <div className="container">
        <div className="row">
          <div className="col-lg-2 col-md-2">
            <img
              className="logo-img my-3"
              src="../img/logo-ft.png"
              alt="LOGO"
            />
          </div>
          <div className="col-lg-6 col-md-6 text-center">
            <p className="footer-text">
              © LearnIt 2022 - All rights reserved.
            </p>
          </div>
          <div className="col-md-4" id='footer-socials'>
            <ul className="ft-nav social-nav my-3">
              <li className="mx-1">
                <a href="https://github.com/SaraKteifan/Project9" title="github" target='_blanck'>
                  <i className="fa fa-github" />
                </a>
              </li>
              <li className="mx-1">
                <a href="https://twitter.com/Learnit_World?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor" title="twitter"  target='_blanck'>
                  <i className="fa fa-twitter" />
                </a>
              </li>
              <li className="mx-1">
                <a href="https://web.facebook.com/learnitworld?_rdc=1&_rdr" title="facebook" target='_blanck'>
                  <i className="fa fa-facebook" />
                </a>
              </li>
              <li className="mx-1">
                <a href="https://www.instagram.com/learnit.ir/?hl=en" title="instagram"  target='_blanck'>
                  <i className="fa fa-instagram" />
                </a>
              </li>
            </ul>
            
          </div>
        </div>
      </div>
    </footer>
    </>
  )
}

export default Footer
