import React from 'react'

function Download() {
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
            <div className="hr-line" />
            НАШ ЛАУНЧЕР
          </span>
          <div className="promo-donate">
            <div className="col-md-1 dv lv">
              <span className="ic-info" />
            </div>
            <div className="col-md-10 lv">
              <h3 className="th-name">Загрузка игрового клиента:</h3>
              <p className="desctop">
                Для игры на наших серверах требуется наш игровой клиент, без
                него невозможно зайти на наши сервера.
                <br />
                <br />
                Лаунчер - это программа запуска наших игровых клиентов, эта
                программа автоматически загружает нужные модификации и
                обновления наших клиентов.
                <br />
                Так же для работы лаунчера необходима установленная Java
                (загрузить её можно ниже)
              </p>
              <a href="#" className="btn-startgames lf">
                <span className="ic-dw" /> Для Windows
              </a>
              <a href="#" className="btn-startgames linux lf">
                <span className="ic-dw" /> Для Linux
              </a>
              <a href="#" className="btn-startgames macosx lf">
                <span className="ic-dw" /> Для MacOs
              </a>
            </div>
          </div>
          <span className="name-rog">
            <div className="hr-line" />
            ВОПРОСЫ И ОТВЕТЫ ПО ЛАУНЧЕРУ
          </span>
          <div className="cd-faq-items">
            <ul id="basics" className="cd-faq-group">
              <br />
              <li>
                <a className="cd-faq-trigger" href="#0">
                  Каковы рекомендуемые системные требования?
                </a>
                <div className="cd-faq-content">
                  <p>
                    Мы рекомендуем запускать наши клиенты на 64-х разрядных
                    системах. Необходимое количество оперативной памяти для
                    работы игры - 1024 Мб.
                  </p>
                </div>
                {/* cd-faq-content */}
              </li>
              <li>
                <a className="cd-faq-trigger" href="#0">
                  Почему лаунчер был заблокирован моим антивирусом?
                </a>
                <div className="cd-faq-content">
                  <p>
                    Наш лаунчер не содержит в себе вирусов. Не бойтесь за свою
                    безопасность! Положитесь на нас! Если ваш антивирус ругается
                    на наш лаунчер, то просто добавьте его в исключения! В том
                    случае, если Вы не доверяете нам, просто проверьте лаунчер
                    на содержание вредоносного кода в сервисе virustotal.com
                    <br />
                    <br />
                    Антивирус может заблокировать наш лаунчер из-за обфуксации
                    кода (защита от взлома лаунчера).
                  </p>
                </div>
                {/* cd-faq-content */}
              </li>
              <li>
                <a className="cd-faq-trigger" href="#0">
                  Почему лаунчер закрывается после загрузки файлов и не
                  запускает игру?
                </a>
                <div className="cd-faq-content">
                  <p>
                    Дело в том, что вам скорее всего нужно установить или
                    обновить драйвер вашей видеокарты. Загрузить официальные
                    драйверы можно здесь: AMD NVidia Intel Graphics
                  </p>
                </div>
                {/* cd-faq-content */}
              </li>
              <li>
                <a className="cd-faq-trigger" href="#0">
                  Что делать при ошибке соединения лаунчера и серверов
                  авторизации?
                </a>
                <div className="cd-faq-content">
                  <p>
                    Достаточно установить DNS сервера от Yandex или Google.
                    Решение проблемы: Информация о настройке DNS
                  </p>
                </div>
                {/* cd-faq-content */}
              </li>
              <li>
                <a className="cd-faq-trigger" href="#0">
                  Все пункты выше не помогли?
                </a>
                <div className="cd-faq-content">
                  <p>
                    Напишите нам о своей проблеме, мы попытаемся помочь вам.
                    Обратиться в поддержку можно перейдя по этой: ссылке
                  </p>
                </div>
                {/* cd-faq-content */}
              </li>
            </ul>
            {/* cd-faq-group */}
          </div>
          {/* cd-faq-items */}
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

export default Download
