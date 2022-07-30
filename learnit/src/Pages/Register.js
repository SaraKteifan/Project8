import React from 'react'

function Register() {
  return (
    <>
      <>
  {/* Page Content START */}
  <div className="page-content">
    {/* Main Nav START */}
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
                <li>
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
    {/* Main Nav END */}
    {/* Home Section START */}
    <span className="no-intro" />
    {/* Home Section END */}
    <div className="container">
      <div className="row">
        <div className="col-lg-9 col-md-9">
          <span className="name-rog">
            <div className="hr-line" /> РЕГИСТРАЦИЯ АККАУНТА
          </span>
          <div className="section-how">
            <span className="num-1">01</span>
            <div className="reved">
              <div className="arrow-road" />
              <form className="reg-down">
                <span className="name-form">
                  Придумайте себе ник
                  <p className="reveria">Минимум 4 символа, максимум 16</p>
                </span>
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Логин"
                  className="registration_short_field"
                />
                <button className="generatel-btn">
                  <span className="ic-g" />
                </button>
              </form>
            </div>
          </div>
          <div className="section-how">
            <span className="num-2">02</span>
            <div className="reved">
              <div className="arrow-road" />
              <form className="reg-down">
                <span className="name-form">
                  Email адрес
                  <p className="reveria">Нужен для восстановления пароля</p>
                </span>
                <input
                  type="text"
                  name="mail"
                  id="mail"
                  placeholder="Почта"
                  className="registration_short_field"
                />
              </form>
            </div>
          </div>
          <div className="section-how">
            <span className="num-3">03</span>
            <div className="reved">
              <div className="arrow-road" />
              <form className="reg-down">
                <span className="name-form">
                  Пароль
                  <p className="reveria">Максимально сложный</p>
                </span>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Пароль"
                  className="registration_short_field"
                />
              </form>
            </div>
          </div>
          <div className="section-how">
            <span className="num-4">04</span>
            <div className="reved">
              <div className="arrow-road" />
              <form className="reg-down">
                <span className="name-form">
                  Повторите пароль
                  <p className="reveria">Убедиться, что не допущены ошибки</p>
                </span>
                <input
                  type="password"
                  name="password-repeat"
                  id="password-repeat"
                  placeholder="Повторите пароль"
                  className="registration_short_field"
                />
              </form>
            </div>
          </div>
          <div className="down-reg">
            <a href="#" className="register">
              Продолжить
            </a>
            <a href="#" className="icon-vks">
              <span className="vk-btn" />
            </a>
            <div className="title-xh">
              <span className="arrow_xd" />
              Войти через ВКонтакте
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-3">
          <div className="right-block">
            <div className="n-m">Мониторинг Серверов</div>
            <div className="server online">
              <div className="second circle">
                <strong />
              </div>
              <div className="server_name">
                <a href="#">01 Сервер</a>
              </div>
              <div className="server_players">Онлайн: 50/100</div>
            </div>
            <div className="server online">
              <div className="second circle">
                <strong />
              </div>
              <div className="server_name">
                <a href="#">01 Сервер</a>
              </div>
              <div className="server_players">Онлайн: 50/100</div>
            </div>
            <div className="server online">
              <div className="second circle">
                <strong />
              </div>
              <div className="server_name">
                <a href="#">01 Сервер</a>
              </div>
              <div className="server_players">Онлайн: 50/100</div>
            </div>
            <div className="server online">
              <div className="second circle">
                <strong />
              </div>
              <div className="server_name">
                <a href="#">01 Сервер</a>
              </div>
              <div className="server_players">Онлайн: 50/100</div>
            </div>
            <div className="server online">
              <div className="second circle">
                <strong />
              </div>
              <div className="server_name">
                <a href="#">01 Сервер</a>
              </div>
              <div className="server_players">Онлайн: 50/100</div>
            </div>
            <div className="server online">
              <div className="second circle">
                <strong />
              </div>
              <div className="server_name">
                <a href="#">01 Сервер</a>
              </div>
              <div className="server_players">Онлайн: 50/100</div>
            </div>
            <div className="server online not-hr">
              <div className="second circle">
                <strong />
              </div>
              <div className="server_name">
                <a href="#">01 Сервер</a>
              </div>
              <div className="server_players">Онлайн: 50/100</div>
            </div>
            <div className="server online not-hr">
              <div className="second circle">
                <strong />
              </div>
              <div className="server_name">
                <a href="#">01 Сервер</a>
              </div>
              <div className="server_players">Онлайн: 50/100</div>
            </div>
            <p className="tdx-strom">
              <span className="online-o" /> Общий онлайн: 2173
            </p>
          </div>
          <div className="right-block vk">
            <div className="n-m">Мониторинг Серверов</div>
            <div className="widget-vk">WIDGET VK</div>
          </div>
        </div>
      </div>
    </div>
    {/* Footer START */}
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
              © ProjectNames 2018 - Все права только у меня.
            </p>
          </div>
          <div className="col-md-4">
            <ul className="ft-nav social-nav my-3">
              <li className="mx-1">
                <a href="javascript:void(0);" title="vk">
                  <i className="fa fa-vk" />
                </a>
              </li>
              <li className="mx-1">
                <a href="javascript:void(0);" title="twitter">
                  <i className="fa fa-twitter" />
                </a>
              </li>
              <li className="mx-1">
                <a href="javascript:void(0);" title="facebook">
                  <i className="fa fa-facebook" />
                </a>
              </li>
              <li className="mx-1">
                <a href="javascript:void(0);" title="instagram">
                  <i className="fa fa-instagram" />
                </a>
              </li>
            </ul>
            <a href="http://larts.pro/">
              <span className="corp-design" />
            </a>
          </div>
        </div>
      </div>
    </footer>
    {/* Footer END */}
  </div>
  {/* Page Content END */}
</>

    </>
  )
}

export default Register
