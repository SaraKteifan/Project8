import React from 'react'

function Navbar() {
  return (
    <>
      <nav id="main-nav" className="main-nav fixed">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="nav-header d-flex justify-content-between align-items-center">
              <a href="index.html" className="logo" title="LOGO">
                <img className="logo-img" src="../img/logo.png" alt="LOGO" />
                <img
                  className="alt-logo-img"
                  src="../img/logo-alt.png"
                  alt="LOGO"
                />
              </a>
            </div>
            <div className="nav-wrap">
              <ul id="nav" className="nav-wrap__list menu">
                <li className="current">
                  <a href="/" title="Главная">
                    Главная
                  </a>
                </li>
                <li>
                  <a href="/about.html" title="Проекте">
                    О Проекте
                  </a>
                </li>
                <li>
                  <a href="/donate.html" title="Донат">
                    <span className="red-fox">Донат</span>
                  </a>
                </li>
                <li>
                  <a href="/contacts.html" title="Контакты">
                    Контакты
                  </a>
                </li>
                <div className="dropdown">
                  <span>
                    <div className="drop-ed" />
                  </span>
                  <div className="dropdown-content">
                    <span className="arrow_box" />
                    <ul className="drop-vape">
                      <li>
                        <a href="#">Банлист</a>
                      </li>
                      <li>
                        <a href="#">Банлист</a>
                      </li>
                      <li>
                        <a href="#">Банлист</a>
                      </li>
                      <li>
                        <a href="#">Банлист</a>
                      </li>
                      <li>
                        <a href="#">Банлист</a>
                      </li>
                      <li>
                        <a href="#">Банлист</a>
                      </li>
                      <li>
                        <a href="#">Банлист</a>
                      </li>
                      <li>
                        <a href="#">Банлист</a>
                      </li>
                      <li>
                        <a href="#">Банлист</a>
                      </li>
                      <li>
                        <a href="#">Банлист</a>
                      </li>
                      <li>
                        <a href="#">Банлист</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </ul>
              <div className="riglt-floats-xs">
                <a href="#" className="btn-login">
                  <span className="ic-sx21" /> Войти в аккаунт
                </a>
                <a href="/how-start.html" className="btn-startgames">
                  <span className="ic-sx22" /> Начать играть
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
    </>
  )
}

export default Navbar
