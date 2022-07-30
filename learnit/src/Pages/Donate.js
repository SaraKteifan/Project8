import React from 'react'

function Donate() {
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
                <li className="current">
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
            <div className="hr-line" /> ДОНАТ
          </span>
          <div className="promo-donate">
            <div className="col-md-1 dv lv">
              <span className="ic-love" />
            </div>
            <div className="col-md-10 lv">
              <h3 className="th-name">Коротко о пожертвованиях:</h3>
              <p className="desctop">
                Как и все мы нуждаемся в материальной помощи. Нам необходимо
                арендовать оборудование для игровых серверов, совершенствовать
                старое и разрабатывать совершенно новое и необычное! Именно по
                этим причинам мы и ввели систему пожертвований на нашем проекте.
                <br />
                <br />
                За пожертвование вы получаете монеты, за которые можно
                приобрести привилегии на наших серверах.
              </p>
              <a href="#" className="love-donate">
                <span className="ic-loveb" /> Пожертвовать
              </a>
            </div>
          </div>
          <span className="name-rog sk">
            <div className="hr-line" /> Привилегии и их возможности:
          </span>
          <div className="fullnews_craft">
            <div className="full_news_top">
              <div className="news_text" style={{ padding: "0px 34px 0 0px" }}>
                <table
                  width="680px"
                  cellPadding={3}
                  cellSpacing={10}
                  className="tbl"
                  style={{ marginLeft: 30 }}
                >
                  <thead>
                    <tr className="label_tr">
                      <th className="label_th">Возможности:</th>
                      <th className="label_th">VIP</th>
                      <th className="label_th">PREMIUM</th>
                      <th className="label_th">GRAND</th>
                      <th className="label_th">ULTRA</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="th_base">
                        Максимальное количество приватных зон
                      </td>
                      <td className="th_base" style={{ background: "#FFFAEE" }}>
                        <center>
                          <b>4</b>
                        </center>
                      </td>
                      <td className="th_base" style={{ background: "#EDFAFF" }}>
                        <center>
                          <b>6</b>
                        </center>
                      </td>
                      <td className="th_base" style={{ background: "#F1FFEE" }}>
                        <center>
                          <b>15</b>
                        </center>
                      </td>
                      <td className="th_base" style={{ background: "#FCEEFF" }}>
                        <center>
                          <b>30</b>
                        </center>
                      </td>
                    </tr>
                    <tr>
                      <td className="th_base">
                        Ограничение производимой энергии EU
                        <br />
                        <br />
                        <small>
                          На серверах: Industrial, Galaxy, TechnoMagic, HiTech
                        </small>
                      </td>
                      <td className="th_base" style={{ background: "#FFFAEE" }}>
                        <center>
                          <b>71680</b>
                        </center>
                      </td>
                      <td className="th_base" style={{ background: "#EDFAFF" }}>
                        <center>
                          <b>71680</b>
                        </center>
                      </td>
                      <td className="th_base" style={{ background: "#F1FFEE" }}>
                        <center>
                          <b>77312</b>
                        </center>
                      </td>
                      <td className="th_base" style={{ background: "#FCEEFF" }}>
                        <center>
                          <b>112640</b>
                        </center>
                      </td>
                    </tr>
                    <tr>
                      <td className="th_base">
                        Пакет флагов <b>VIP</b>
                        <br />
                        <br />
                        <small>Флаги: ice-form, ice-melt</small>
                      </td>
                      <td className="th_base" style={{ background: "#FFFAEE" }}>
                        <center>
                          <i className="fa fa-check" aria-hidden="true" />
                        </center>
                      </td>
                      <td className="th_base" style={{ background: "#EDFAFF" }}>
                        <center>
                          <i className="fa fa-check" aria-hidden="true" />
                        </center>
                      </td>
                      <td className="th_base" style={{ background: "#F1FFEE" }}>
                        <center>
                          <i className="fa fa-check" aria-hidden="true" />
                        </center>
                      </td>
                      <td className="th_base" style={{ background: "#FCEEFF" }}>
                        <center>
                          <i className="fa fa-check" aria-hidden="true" />
                        </center>
                      </td>
                    </tr>
                    <tr>
                      <td className="th_base">
                        Сохранение инвентаря после смерти
                        <br />
                        <br />
                        <small>
                          Из-за многочисленных багов игры, есть вероятность
                          выпадения вещей.
                        </small>
                      </td>
                      <td className="th_base" style={{ background: "#FFFAEE" }}>
                        <center>
                          <i className="fa fa-check" aria-hidden="true" />
                        </center>
                      </td>
                      <td className="th_base" style={{ background: "#EDFAFF" }}>
                        <center>
                          <i className="fa fa-check" aria-hidden="true" />
                        </center>
                      </td>
                      <td className="th_base" style={{ background: "#F1FFEE" }}>
                        <center>
                          <i className="fa fa-check" aria-hidden="true" />
                        </center>
                      </td>
                      <td className="th_base" style={{ background: "#FCEEFF" }}>
                        <center>
                          <i className="fa fa-check" aria-hidden="true" />
                        </center>
                      </td>
                    </tr>
                    <tr>
                      <td className="th_base">Вход на переполенный сервер</td>
                      <td className="th_base" style={{ background: "#FFFAEE" }}>
                        <center>
                          <i className="fa fa-check" aria-hidden="true" />
                        </center>
                      </td>
                      <td className="th_base" style={{ background: "#EDFAFF" }}>
                        <center>
                          <i className="fa fa-check" aria-hidden="true" />
                        </center>
                      </td>
                      <td className="th_base" style={{ background: "#F1FFEE" }}>
                        <center>
                          <i className="fa fa-check" aria-hidden="true" />
                        </center>
                      </td>
                      <td className="th_base" style={{ background: "#FCEEFF" }}>
                        <center>
                          <i className="fa fa-check" aria-hidden="true" />
                        </center>
                      </td>
                    </tr>
                    <tr>
                      <td className="th_base">
                        Установка <b>5</b> точек дома
                        <br />
                        <br />
                        <small>Команда: /sethome [имя дома]</small>
                      </td>
                      <td className="th_base" style={{ background: "#FFFAEE" }}>
                        <center>
                          <i className="fa fa-check" aria-hidden="true" />
                        </center>
                      </td>
                      <td className="th_base" style={{ background: "#EDFAFF" }}>
                        <center>
                          <i className="fa fa-check" aria-hidden="true" />
                        </center>
                      </td>
                      <td className="th_base" style={{ background: "#F1FFEE" }}>
                        <center>
                          <i className="fa fa-check" aria-hidden="true" />
                        </center>
                      </td>
                      <td className="th_base" style={{ background: "#FCEEFF" }}>
                        <center>
                          <i className="fa fa-check" aria-hidden="true" />
                        </center>
                      </td>
                    </tr>
                    <tr>
                      <td className="th_base">
                        Восстановление здоровья
                        <br />
                        <br />
                        <small>Команда: /heal (1 раз в минуту)</small>
                      </td>
                      <td className="th_base" style={{ background: "#FFFAEE" }}>
                        <center>
                          <i className="fa fa-check" aria-hidden="true" />
                        </center>
                      </td>
                      <td className="th_base" style={{ background: "#EDFAFF" }}>
                        <center>
                          <i className="fa fa-check" aria-hidden="true" />
                        </center>
                      </td>
                      <td className="th_base" style={{ background: "#F1FFEE" }}>
                        <center>
                          <i className="fa fa-check" aria-hidden="true" />
                        </center>
                      </td>
                      <td className="th_base" style={{ background: "#FCEEFF" }}>
                        <center>
                          <i className="fa fa-check" aria-hidden="true" />
                        </center>
                      </td>
                    </tr>
                    <tr>
                      <td className="th_base">
                        Восстановление сытости
                        <br />
                        <br />
                        <small>Команда: /feed (1 раз в минуту)</small>
                      </td>
                      <td className="th_base" style={{ background: "#FFFAEE" }}>
                        <center>
                          <i className="fa fa-check" aria-hidden="true" />
                        </center>
                      </td>
                      <td className="th_base" style={{ background: "#EDFAFF" }}>
                        <center>
                          <i className="fa fa-check" aria-hidden="true" />
                        </center>
                      </td>
                      <td className="th_base" style={{ background: "#F1FFEE" }}>
                        <center>
                          <i className="fa fa-check" aria-hidden="true" />
                        </center>
                      </td>
                      <td className="th_base" style={{ background: "#FCEEFF" }}>
                        <center>
                          <i className="fa fa-check" aria-hidden="true" />
                        </center>
                      </td>
                    </tr>
                    <tr>
                      <td className="th_base">
                        Запуск фейерверка
                        <br />
                        <br />
                        <small>
                          Команда: /firework <b>(Недоступно на Industrial)</b>
                        </small>
                      </td>
                      <td className="th_base" style={{ background: "#FFFAEE" }}>
                        <center>
                          <i className="fa fa-check" aria-hidden="true" />
                        </center>
                      </td>
                      <td className="th_base" style={{ background: "#EDFAFF" }}>
                        <center>
                          <i className="fa fa-check" aria-hidden="true" />
                        </center>
                      </td>
                      <td className="th_base" style={{ background: "#F1FFEE" }}>
                        <center>
                          <i className="fa fa-check" aria-hidden="true" />
                        </center>
                      </td>
                      <td className="th_base" style={{ background: "#FCEEFF" }}>
                        <center>
                          <i className="fa fa-check" aria-hidden="true" />
                        </center>
                      </td>
                    </tr>
                    <tr>
                      <td className="th_base">
                        Узнать тех кто находится рядом с вами
                        <br />
                        <br />
                        <small>Команда: /near</small>
                      </td>
                      <td className="th_base" style={{ background: "#FFFAEE" }}>
                        <center>
                          <i className="fa fa-check" aria-hidden="true" />
                        </center>
                      </td>
                      <td className="th_base" style={{ background: "#EDFAFF" }}>
                        <center>
                          <i className="fa fa-check" aria-hidden="true" />
                        </center>
                      </td>
                      <td className="th_base" style={{ background: "#F1FFEE" }}>
                        <center>
                          <i className="fa fa-check" aria-hidden="true" />
                        </center>
                      </td>
                      <td className="th_base" style={{ background: "#FCEEFF" }}>
                        <center>
                          <i className="fa fa-check" aria-hidden="true" />
                        </center>
                      </td>
                    </tr>
                    <tr>
                      <td className="th_base">
                        Возврат на место вашей гибели
                        <br />
                        <br />
                        <small>Команда: /back</small>
                      </td>
                      <td className="th_base" style={{ background: "#FFFAEE" }}>
                        <center>
                          <i className="fa fa-check" aria-hidden="true" />
                        </center>
                      </td>
                      <td className="th_base" style={{ background: "#EDFAFF" }}>
                        <center>
                          <i className="fa fa-check" aria-hidden="true" />
                        </center>
                      </td>
                      <td className="th_base" style={{ background: "#F1FFEE" }}>
                        <center>
                          <i className="fa fa-check" aria-hidden="true" />
                        </center>
                      </td>
                      <td className="th_base" style={{ background: "#FCEEFF" }}>
                        <center>
                          <i className="fa fa-check" aria-hidden="true" />
                        </center>
                      </td>
                    </tr>
                    <tr>
                      <td className="th_base">
                        Починка предмета в руке или инвентаре
                        <br />
                        <br />
                        <small>
                          Команда: /repair [all - починить весь инвентарь]
                        </small>
                      </td>
                      <td className="th_base" style={{ background: "#FFFAEE" }}>
                        <center>
                          <i className="fa fa-check" aria-hidden="true" />
                        </center>
                      </td>
                      <td className="th_base" style={{ background: "#EDFAFF" }}>
                        <center>
                          <i className="fa fa-check" aria-hidden="true" />
                        </center>
                      </td>
                      <td className="th_base" style={{ background: "#F1FFEE" }}>
                        <center>
                          <i className="fa fa-check" aria-hidden="true" />
                        </center>
                      </td>
                      <td className="th_base" style={{ background: "#FCEEFF" }}>
                        <center>
                          <i className="fa fa-check" aria-hidden="true" />
                        </center>
                      </td>
                    </tr>
                    <tr>
                      <td className="th_base">
                        Режим полёта
                        <br />
                        <br />
                        <small>Команда: /fly</small>
                      </td>
                      <td className="th_base" style={{ background: "#FFFAEE" }}>
                        <center>
                          <i className="fa fa-check" aria-hidden="true" />
                        </center>
                      </td>
                      <td className="th_base" style={{ background: "#EDFAFF" }}>
                        <center>
                          <i className="fa fa-check" aria-hidden="true" />
                        </center>
                      </td>
                      <td className="th_base" style={{ background: "#F1FFEE" }}>
                        <center>
                          <i className="fa fa-check" aria-hidden="true" />
                        </center>
                      </td>
                      <td className="th_base" style={{ background: "#FCEEFF" }}>
                        <center>
                          <i className="fa fa-check" aria-hidden="true" />
                        </center>
                      </td>
                    </tr>
                    <tr>
                      <td className="th_base">
                        Бесплатные телепортации к игрокам
                        <br />
                        <br />
                        <small>Команда: /tpa [ник]</small>
                      </td>
                      <td className="th_base" style={{ background: "#FFFAEE" }}>
                        <center>
                          <i className="fa fa-check" aria-hidden="true" />
                        </center>
                      </td>
                      <td className="th_base" style={{ background: "#EDFAFF" }}>
                        <center>
                          <i className="fa fa-check" aria-hidden="true" />
                        </center>
                      </td>
                      <td className="th_base" style={{ background: "#F1FFEE" }}>
                        <center>
                          <i className="fa fa-check" aria-hidden="true" />
                        </center>
                      </td>
                      <td className="th_base" style={{ background: "#FCEEFF" }}>
                        <center>
                          <i className="fa fa-check" aria-hidden="true" />
                        </center>
                      </td>
                    </tr>
                    <tr>
                      <td className="th_base">
                        Телепортация игрока к себе
                        <br />
                        <br />
                        <small>Команда: /tpahere [ник]</small>
                      </td>
                      <td className="th_base" style={{ background: "#FFFAEE" }}>
                        <center>
                          <i className="fa fa-check" aria-hidden="true" />
                        </center>
                      </td>
                      <td className="th_base" style={{ background: "#EDFAFF" }}>
                        <center>
                          <i className="fa fa-check" aria-hidden="true" />
                        </center>
                      </td>
                      <td className="th_base" style={{ background: "#F1FFEE" }}>
                        <center>
                          <i className="fa fa-check" aria-hidden="true" />
                        </center>
                      </td>
                      <td className="th_base" style={{ background: "#FCEEFF" }}>
                        <center>
                          <i className="fa fa-check" aria-hidden="true" />
                        </center>
                      </td>
                    </tr>
                    <tr>
                      <td className="th_base">
                        Установка плаща в{" "}
                        <a href="/index.php?do=cp">личном кабинете</a>
                      </td>
                      <td className="th_base" style={{ background: "#FFFAEE" }}>
                        <center>
                          <i className="fa fa-check" aria-hidden="true" />
                        </center>
                      </td>
                      <td className="th_base" style={{ background: "#EDFAFF" }}>
                        <center>
                          <i className="fa fa-check" aria-hidden="true" />
                        </center>
                      </td>
                      <td className="th_base" style={{ background: "#F1FFEE" }}>
                        <center>
                          <i className="fa fa-check" aria-hidden="true" />
                        </center>
                      </td>
                      <td className="th_base" style={{ background: "#FCEEFF" }}>
                        <center>
                          <i className="fa fa-check" aria-hidden="true" />
                        </center>
                      </td>
                    </tr>
                    <tr>
                      <td className="th_base">
                        Получать пакет ресурсов{" "}
                        <a href="/base.html">
                          <b>BASE</b>
                        </a>
                        <br />
                        <br />
                        <small>
                          Команда: /kit base <b>(1 раз в три дня)</b>
                        </small>
                      </td>
                      <td className="th_base" style={{ background: "#FFFAEE" }}>
                        <center>
                          <i className="fa fa-check" aria-hidden="true" />
                        </center>
                      </td>
                      <td className="th_base" style={{ background: "#EDFAFF" }}>
                        <center>
                          <i className="fa fa-check" aria-hidden="true" />
                        </center>
                      </td>
                      <td className="th_base" style={{ background: "#F1FFEE" }}>
                        <center>
                          <i className="fa fa-check" aria-hidden="true" />
                        </center>
                      </td>
                      <td className="th_base" style={{ background: "#FCEEFF" }}>
                        <center>
                          <i className="fa fa-check" aria-hidden="true" />
                        </center>
                      </td>
                    </tr>
                    <tr>
                      <td className="th_base">
                        Получать пакет ресурсов{" "}
                        <a href="/vip.html">
                          <b>VIP</b>
                        </a>
                        <br />
                        <br />
                        <small>
                          Команда: /kit vip <b>(1 раз в три дня)</b>
                        </small>
                      </td>
                      <td className="th_base" style={{ background: "#FFFAEE" }}>
                        <center>
                          <i className="fa fa-check" aria-hidden="true" />
                        </center>
                      </td>
                      <td className="th_base" style={{ background: "#EDFAFF" }}>
                        <center>
                          <i className="fa fa-check" aria-hidden="true" />
                        </center>
                      </td>
                      <td className="th_base" style={{ background: "#F1FFEE" }}>
                        <center>
                          <i className="fa fa-check" aria-hidden="true" />
                        </center>
                      </td>
                      <td className="th_base" style={{ background: "#FCEEFF" }}>
                        <center>
                          <i className="fa fa-check" aria-hidden="true" />
                        </center>
                      </td>
                    </tr>
                    <tr>
                      <td className="th_base">
                        Пакет флагов <b>PREMIUM</b>
                        <br />
                        <br />
                        <small>
                          Флаги: mob-spawning, mob-damage, invincible, greeting,
                          farewell
                        </small>
                      </td>
                      <td className="th_base" style={{ background: "#FFFAEE" }}>
                        <center>
                          <i className="fa fa-times" aria-hidden="true" />
                        </center>
                      </td>
                      <td className="th_base" style={{ background: "#EDFAFF" }}>
                        <center>
                          <i className="fa fa-check" aria-hidden="true" />
                        </center>
                      </td>
                      <td className="th_base" style={{ background: "#F1FFEE" }}>
                        <center>
                          <i className="fa fa-check" aria-hidden="true" />
                        </center>
                      </td>
                      <td className="th_base" style={{ background: "#FCEEFF" }}>
                        <center>
                          <i className="fa fa-check" aria-hidden="true" />
                        </center>
                      </td>
                    </tr>
                    <tr>
                      <td className="th_base">
                        Использование <b>буровой установки</b>
                        <br />
                        <br />
                        <small>
                          На серверах: Industrial, Galaxy, TechnoMagic, HiTech{" "}
                          <b>
                            (Смотрите пункты правил{" "}
                            <a href="/rules.html">3.2, 3.3</a>)
                          </b>
                        </small>
                      </td>
                      <td className="th_base" style={{ background: "#FFFAEE" }}>
                        <center>
                          <i className="fa fa-times" aria-hidden="true" />
                        </center>
                      </td>
                      <td className="th_base" style={{ background: "#EDFAFF" }}>
                        <center>
                          <i className="fa fa-check" aria-hidden="true" />
                        </center>
                      </td>
                      <td className="th_base" style={{ background: "#F1FFEE" }}>
                        <center>
                          <i className="fa fa-check" aria-hidden="true" />
                        </center>
                      </td>
                      <td className="th_base" style={{ background: "#FCEEFF" }}>
                        <center>
                          <i className="fa fa-check" aria-hidden="true" />
                        </center>
                      </td>
                    </tr>
                    <tr>
                      <td className="th_base">
                        Использование кодов цвета на табличках
                        <br />
                        <br />
                        <small>Пример: &amp;aПривет мир!</small>
                      </td>
                      <td className="th_base" style={{ background: "#FFFAEE" }}>
                        <center>
                          <i className="fa fa-times" aria-hidden="true" />
                        </center>
                      </td>
                      <td className="th_base" style={{ background: "#EDFAFF" }}>
                        <center>
                          <i className="fa fa-check" aria-hidden="true" />
                        </center>
                      </td>
                      <td className="th_base" style={{ background: "#F1FFEE" }}>
                        <center>
                          <i className="fa fa-check" aria-hidden="true" />
                        </center>
                      </td>
                      <td className="th_base" style={{ background: "#FCEEFF" }}>
                        <center>
                          <i className="fa fa-check" aria-hidden="true" />
                        </center>
                      </td>
                    </tr>
                    <tr>
                      <td className="th_base">
                        Установка HD скинов и плащей в{" "}
                        <a href="/index.php?do=cp">личном кабинете</a>
                      </td>
                      <td className="th_base" style={{ background: "#FFFAEE" }}>
                        <center>
                          <i className="fa fa-times" aria-hidden="true" />
                        </center>
                      </td>
                      <td className="th_base" style={{ background: "#EDFAFF" }}>
                        <center>
                          <i className="fa fa-check" aria-hidden="true" />
                        </center>
                      </td>
                      <td className="th_base" style={{ background: "#F1FFEE" }}>
                        <center>
                          <i className="fa fa-check" aria-hidden="true" />
                        </center>
                      </td>
                      <td className="th_base" style={{ background: "#FCEEFF" }}>
                        <center>
                          <i className="fa fa-check" aria-hidden="true" />
                        </center>
                      </td>
                    </tr>
                    <tr>
                      <td className="th_base">
                        Открытие верстака в любом месте
                        <br />
                        <br />
                        <small>Команда: /craft</small>
                      </td>
                      <td className="th_base" style={{ background: "#FFFAEE" }}>
                        <center>
                          <i className="fa fa-times" aria-hidden="true" />
                        </center>
                      </td>
                      <td className="th_base" style={{ background: "#EDFAFF" }}>
                        <center>
                          <i className="fa fa-check" aria-hidden="true" />
                        </center>
                      </td>
                      <td className="th_base" style={{ background: "#F1FFEE" }}>
                        <center>
                          <i className="fa fa-check" aria-hidden="true" />
                        </center>
                      </td>
                      <td className="th_base" style={{ background: "#FCEEFF" }}>
                        <center>
                          <i className="fa fa-check" aria-hidden="true" />
                        </center>
                      </td>
                    </tr>
                    <tr>
                      <td className="th_base">
                        Очистка инвентаря
                        <br />
                        <br />
                        <small>Команда: /clear</small>
                      </td>
                      <td className="th_base" style={{ background: "#FFFAEE" }}>
                        <center>
                          <i className="fa fa-times" aria-hidden="true" />
                        </center>
                      </td>
                      <td className="th_base" style={{ background: "#EDFAFF" }}>
                        <center>
                          <i className="fa fa-check" aria-hidden="true" />
                        </center>
                      </td>
                      <td className="th_base" style={{ background: "#F1FFEE" }}>
                        <center>
                          <i className="fa fa-check" aria-hidden="true" />
                        </center>
                      </td>
                      <td className="th_base" style={{ background: "#FCEEFF" }}>
                        <center>
                          <i className="fa fa-check" aria-hidden="true" />
                        </center>
                      </td>
                    </tr>
                    <tr>
                      <td className="th_base">
                        Установка персонального времени суток
                        <br />
                        <br />
                        <small>Команда: /ptime [day или night]</small>
                      </td>
                      <td className="th_base" style={{ background: "#FFFAEE" }}>
                        <center>
                          <i className="fa fa-times" aria-hidden="true" />
                        </center>
                      </td>
                      <td className="th_base" style={{ background: "#EDFAFF" }}>
                        <center>
                          <i className="fa fa-check" aria-hidden="true" />
                        </center>
                      </td>
                      <td className="th_base" style={{ background: "#F1FFEE" }}>
                        <center>
                          <i className="fa fa-check" aria-hidden="true" />
                        </center>
                      </td>
                      <td className="th_base" style={{ background: "#FCEEFF" }}>
                        <center>
                          <i className="fa fa-check" aria-hidden="true" />
                        </center>
                      </td>
                    </tr>
                    <tr>
                      <td className="th_base">
                        Открытие эндер-судука в любом месте
                        <br />
                        <br />
                        <small>Команда: /enderchest</small>
                      </td>
                      <td className="th_base" style={{ background: "#FFFAEE" }}>
                        <center>
                          <i className="fa fa-times" aria-hidden="true" />
                        </center>
                      </td>
                      <td className="th_base" style={{ background: "#EDFAFF" }}>
                        <center>
                          <i className="fa fa-check" aria-hidden="true" />
                        </center>
                      </td>
                      <td className="th_base" style={{ background: "#F1FFEE" }}>
                        <center>
                          <i className="fa fa-check" aria-hidden="true" />
                        </center>
                      </td>
                      <td className="th_base" style={{ background: "#FCEEFF" }}>
                        <center>
                          <i className="fa fa-check" aria-hidden="true" />
                        </center>
                      </td>
                    </tr>
                    <tr>
                      <td className="th_base">
                        Режим бессмертия
                        <br />
                        <br />
                        <small>Команда: /god</small>
                      </td>
                      <td className="th_base" style={{ background: "#FFFAEE" }}>
                        <center>
                          <i className="fa fa-times" aria-hidden="true" />
                        </center>
                      </td>
                      <td className="th_base" style={{ background: "#EDFAFF" }}>
                        <center>
                          <i className="fa fa-check" aria-hidden="true" />
                        </center>
                      </td>
                      <td className="th_base" style={{ background: "#F1FFEE" }}>
                        <center>
                          <i className="fa fa-check" aria-hidden="true" />
                        </center>
                      </td>
                      <td className="th_base" style={{ background: "#FCEEFF" }}>
                        <center>
                          <i className="fa fa-check" aria-hidden="true" />
                        </center>
                      </td>
                    </tr>
                    <tr>
                      <td className="th_base">
                        Надеть блок на голову
                        <br />
                        <br />
                        <small>Команда: /hat</small>
                      </td>
                      <td className="th_base" style={{ background: "#FFFAEE" }}>
                        <center>
                          <i className="fa fa-times" aria-hidden="true" />
                        </center>
                      </td>
                      <td className="th_base" style={{ background: "#EDFAFF" }}>
                        <center>
                          <i className="fa fa-check" aria-hidden="true" />
                        </center>
                      </td>
                      <td className="th_base" style={{ background: "#F1FFEE" }}>
                        <center>
                          <i className="fa fa-check" aria-hidden="true" />
                        </center>
                      </td>
                      <td className="th_base" style={{ background: "#FCEEFF" }}>
                        <center>
                          <i className="fa fa-check" aria-hidden="true" />
                        </center>
                      </td>
                    </tr>
                    <tr>
                      <td className="th_base">Использование ведра с лавой</td>
                      <td className="th_base" style={{ background: "#FFFAEE" }}>
                        <center>
                          <i className="fa fa-times" aria-hidden="true" />
                        </center>
                      </td>
                      <td className="th_base" style={{ background: "#EDFAFF" }}>
                        <center>
                          <i className="fa fa-check" aria-hidden="true" />
                        </center>
                      </td>
                      <td className="th_base" style={{ background: "#F1FFEE" }}>
                        <center>
                          <i className="fa fa-check" aria-hidden="true" />
                        </center>
                      </td>
                      <td className="th_base" style={{ background: "#FCEEFF" }}>
                        <center>
                          <i className="fa fa-check" aria-hidden="true" />
                        </center>
                      </td>
                    </tr>
                    <tr>
                      <td className="th_base">
                        Изменение цвета ника в{" "}
                        <a href="/index.php?do=cp">личном кабинете</a>
                      </td>
                      <td className="th_base" style={{ background: "#FFFAEE" }}>
                        <center>
                          <i className="fa fa-times" aria-hidden="true" />
                        </center>
                      </td>
                      <td className="th_base" style={{ background: "#EDFAFF" }}>
                        <center>
                          <i className="fa fa-check" aria-hidden="true" />
                        </center>
                      </td>
                      <td className="th_base" style={{ background: "#F1FFEE" }}>
                        <center>
                          <i className="fa fa-check" aria-hidden="true" />
                        </center>
                      </td>
                      <td className="th_base" style={{ background: "#FCEEFF" }}>
                        <center>
                          <i className="fa fa-check" aria-hidden="true" />
                        </center>
                      </td>
                    </tr>
                    <tr>
                      <td className="th_base">
                        Получать пакет ресурсов{" "}
                        <a href="/premium.html">
                          <b>PREMIUM</b>
                        </a>
                        <br />
                        <br />
                        <small>
                          Команда: /kit premium <b>(1 раз в 7 дней)</b>
                        </small>
                      </td>
                      <td className="th_base" style={{ background: "#FFFAEE" }}>
                        <center>
                          <i className="fa fa-times" aria-hidden="true" />
                        </center>
                      </td>
                      <td className="th_base" style={{ background: "#EDFAFF" }}>
                        <center>
                          <i className="fa fa-check" aria-hidden="true" />
                        </center>
                      </td>
                      <td className="th_base" style={{ background: "#F1FFEE" }}>
                        <center>
                          <i className="fa fa-check" aria-hidden="true" />
                        </center>
                      </td>
                      <td className="th_base" style={{ background: "#FCEEFF" }}>
                        <center>
                          <i className="fa fa-check" aria-hidden="true" />
                        </center>
                      </td>
                    </tr>
                    <tr>
                      <td className="th_base" style={{}}>
                        Получать пакет ресурсов{" "}
                        <a href="/deluxepack.html">
                          <b>DELUXE</b>
                        </a>
                        <br />
                        <br />
                        <small>
                          Команда: /kit deluxe <b>(1 раз в 31 день)</b>
                        </small>
                      </td>
                      <td className="th_base" style={{ background: "#FFFAEE" }}>
                        <center>
                          <i className="fa fa-times" aria-hidden="true" />
                        </center>
                      </td>
                      <td className="th_base" style={{ background: "#EDFAFF" }}>
                        <center>
                          <i className="fa fa-check" aria-hidden="true" />
                        </center>
                      </td>
                      <td className="th_base" style={{ background: "#F1FFEE" }}>
                        <center>
                          <i className="fa fa-check" aria-hidden="true" />
                        </center>
                      </td>
                      <td className="th_base" style={{ background: "#FCEEFF" }}>
                        <center>
                          <i className="fa fa-check" aria-hidden="true" />
                        </center>
                      </td>
                    </tr>
                    <tr>
                      <td className="th_base">
                        Сохранение очков опыта после смерти
                      </td>
                      <td className="th_base" style={{ background: "#FFFAEE" }}>
                        <center>
                          <i className="fa fa-times" aria-hidden="true" />
                        </center>
                      </td>
                      <td className="th_base" style={{ background: "#EDFAFF" }}>
                        <center>
                          <i className="fa fa-times" aria-hidden="true" />
                        </center>
                      </td>
                      <td className="th_base" style={{ background: "#F1FFEE" }}>
                        <center>
                          <i className="fa fa-check" aria-hidden="true" />
                        </center>
                      </td>
                      <td className="th_base" style={{ background: "#FCEEFF" }}>
                        <center>
                          <i className="fa fa-check" aria-hidden="true" />
                        </center>
                      </td>
                    </tr>
                    <tr>
                      <td className="th_base">
                        Потушиться или потушить игрока
                        <br />
                        <br />
                        <small>Команда /ext [ник]</small>
                      </td>
                      <td className="th_base" style={{ background: "#FFFAEE" }}>
                        <center>
                          <i className="fa fa-times" aria-hidden="true" />
                        </center>
                      </td>
                      <td className="th_base" style={{ background: "#EDFAFF" }}>
                        <center>
                          <i className="fa fa-times" aria-hidden="true" />
                        </center>
                      </td>
                      <td className="th_base" style={{ background: "#F1FFEE" }}>
                        <center>
                          <i className="fa fa-check" aria-hidden="true" />
                        </center>
                      </td>
                      <td className="th_base" style={{ background: "#FCEEFF" }}>
                        <center>
                          <i className="fa fa-check" aria-hidden="true" />
                        </center>
                      </td>
                    </tr>
                    <tr>
                      <td className="th_base">
                        Прыжок в место куда вы смотрите
                        <br />
                        <br />
                        <small>Команда /jumpto</small>
                      </td>
                      <td className="th_base" style={{ background: "#FFFAEE" }}>
                        <center>
                          <i className="fa fa-times" aria-hidden="true" />
                        </center>
                      </td>
                      <td className="th_base" style={{ background: "#EDFAFF" }}>
                        <center>
                          <i className="fa fa-times" aria-hidden="true" />
                        </center>
                      </td>
                      <td className="th_base" style={{ background: "#F1FFEE" }}>
                        <center>
                          <i className="fa fa-check" aria-hidden="true" />
                        </center>
                      </td>
                      <td className="th_base" style={{ background: "#FCEEFF" }}>
                        <center>
                          <i className="fa fa-check" aria-hidden="true" />
                        </center>
                      </td>
                    </tr>
                    <tr>
                      <td className="th_base">
                        Использование разных цветов в чате
                        <br />
                        <br />
                        <small>Пример: &amp;aПривет мир!</small>
                      </td>
                      <td className="th_base" style={{ background: "#FFFAEE" }}>
                        <center>
                          <i className="fa fa-times" aria-hidden="true" />
                        </center>
                      </td>
                      <td className="th_base" style={{ background: "#EDFAFF" }}>
                        <center>
                          <i className="fa fa-times" aria-hidden="true" />
                        </center>
                      </td>
                      <td className="th_base" style={{ background: "#F1FFEE" }}>
                        <center>
                          <i className="fa fa-check" aria-hidden="true" />
                        </center>
                      </td>
                      <td className="th_base" style={{ background: "#FCEEFF" }}>
                        <center>
                          <i className="fa fa-check" aria-hidden="true" />
                        </center>
                      </td>
                    </tr>
                    <tr>
                      <td className="th_base">
                        Получение данных о местонахождении
                        <br />
                        <br />
                        <small>Команда: /getpos</small>
                      </td>
                      <td className="th_base" style={{ background: "#FFFAEE" }}>
                        <center>
                          <i className="fa fa-times" aria-hidden="true" />
                        </center>
                      </td>
                      <td className="th_base" style={{ background: "#EDFAFF" }}>
                        <center>
                          <i className="fa fa-times" aria-hidden="true" />
                        </center>
                      </td>
                      <td className="th_base" style={{ background: "#F1FFEE" }}>
                        <center>
                          <i className="fa fa-check" aria-hidden="true" />
                        </center>
                      </td>
                      <td className="th_base" style={{ background: "#FCEEFF" }}>
                        <center>
                          <i className="fa fa-check" aria-hidden="true" />
                        </center>
                      </td>
                    </tr>
                    <tr>
                      <td className="th_base">
                        Открытие электронного компаса
                        <br />
                        <br />
                        <small>Команда: /compass</small>
                      </td>
                      <td className="th_base" style={{ background: "#FFFAEE" }}>
                        <center>
                          <i className="fa fa-times" aria-hidden="true" />
                        </center>
                      </td>
                      <td className="th_base" style={{ background: "#EDFAFF" }}>
                        <center>
                          <i className="fa fa-times" aria-hidden="true" />
                        </center>
                      </td>
                      <td className="th_base" style={{ background: "#F1FFEE" }}>
                        <center>
                          <i className="fa fa-check" aria-hidden="true" />
                        </center>
                      </td>
                      <td className="th_base" style={{ background: "#FCEEFF" }}>
                        <center>
                          <i className="fa fa-check" aria-hidden="true" />
                        </center>
                      </td>
                    </tr>
                    <tr>
                      <td className="th_base">
                        Использование карьера
                        <br />
                        <br />
                        <small>На серверах: Industrial, HiTech</small>
                      </td>
                      <td className="th_base" style={{ background: "#FFFAEE" }}>
                        <center>
                          <i className="fa fa-times" aria-hidden="true" />
                        </center>
                      </td>
                      <td className="th_base" style={{ background: "#EDFAFF" }}>
                        <center>
                          <i className="fa fa-times" aria-hidden="true" />
                        </center>
                      </td>
                      <td className="th_base" style={{ background: "#F1FFEE" }}>
                        <center>
                          <i className="fa fa-check" aria-hidden="true" />
                        </center>
                      </td>
                      <td className="th_base" style={{ background: "#FCEEFF" }}>
                        <center>
                          <i className="fa fa-check" aria-hidden="true" />
                        </center>
                      </td>
                    </tr>
                    <tr>
                      <td className="th_base">
                        Использование эндер лука
                        <br />
                        <br />
                        <small>На серверах: Fantasy</small>
                      </td>
                      <td className="th_base" style={{ background: "#FFFAEE" }}>
                        <center>
                          <i className="fa fa-times" aria-hidden="true" />
                        </center>
                      </td>
                      <td className="th_base" style={{ background: "#EDFAFF" }}>
                        <center>
                          <i className="fa fa-times" aria-hidden="true" />
                        </center>
                      </td>
                      <td className="th_base" style={{ background: "#F1FFEE" }}>
                        <center>
                          <i className="fa fa-check" aria-hidden="true" />
                        </center>
                      </td>
                      <td className="th_base" style={{ background: "#FCEEFF" }}>
                        <center>
                          <i className="fa fa-check" aria-hidden="true" />
                        </center>
                      </td>
                    </tr>
                    <tr>
                      <td className="th_base">
                        Получать пакет ресурсов <b>EXP</b>
                        <br />
                        <br />
                        (192 бутылочки с опытом)
                        <br />
                        <br />
                        <small>Команда: /kit exp (1 раз в 7 дней)</small>
                      </td>
                      <td className="th_base" style={{ background: "#FFFAEE" }}>
                        <center>
                          <i className="fa fa-times" aria-hidden="true" />
                        </center>
                      </td>
                      <td className="th_base" style={{ background: "#EDFAFF" }}>
                        <center>
                          <i className="fa fa-times" aria-hidden="true" />
                        </center>
                      </td>
                      <td className="th_base" style={{ background: "#F1FFEE" }}>
                        <center>
                          <i className="fa fa-check" aria-hidden="true" />
                        </center>
                      </td>
                      <td className="th_base" style={{ background: "#FCEEFF" }}>
                        <center>
                          <i className="fa fa-check" aria-hidden="true" />
                        </center>
                      </td>
                    </tr>
                    <tr>
                      <td className="th_base">
                        Получать пакет ресурсов{" "}
                        <a href="/grand.html">
                          <b>GRAND</b>
                        </a>
                        <br />
                        <br />
                        <small>Команда: /kit grand (1 раз в 31 день)</small>
                      </td>
                      <td className="th_base" style={{ background: "#FFFAEE" }}>
                        <center>
                          <i className="fa fa-times" aria-hidden="true" />
                        </center>
                      </td>
                      <td className="th_base" style={{ background: "#EDFAFF" }}>
                        <center>
                          <i className="fa fa-times" aria-hidden="true" />
                        </center>
                      </td>
                      <td className="th_base" style={{ background: "#F1FFEE" }}>
                        <center>
                          <i className="fa fa-check" aria-hidden="true" />
                        </center>
                      </td>
                      <td className="th_base" style={{ background: "#FCEEFF" }}>
                        <center>
                          <i className="fa fa-check" aria-hidden="true" />
                        </center>
                      </td>
                    </tr>
                    <tr>
                      <td className="th_base" style={{}}>
                        Телепортация по координатам
                        <br />
                        <br />
                        <small>Команда: /tppos [x y z]</small>
                      </td>
                      <td className="th_base" style={{ background: "#FFFAEE" }}>
                        <center>
                          <i className="fa fa-times" aria-hidden="true" />
                        </center>
                      </td>
                      <td className="th_base" style={{ background: "#EDFAFF" }}>
                        <center>
                          <i className="fa fa-times" aria-hidden="true" />
                        </center>
                      </td>
                      <td className="th_base" style={{ background: "#F1FFEE" }}>
                        <center>
                          <i className="fa fa-check" aria-hidden="true" />
                        </center>
                      </td>
                      <td className="th_base" style={{ background: "#FCEEFF" }}>
                        <center>
                          <i className="fa fa-check" aria-hidden="true" />
                        </center>
                      </td>
                    </tr>
                    <tr>
                      <td className="th_base">
                        Телепорт на ближайшую точку над головой
                        <br />
                        <br />
                        <small>Команда: /top</small>
                      </td>
                      <td className="th_base" style={{ background: "#FFFAEE" }}>
                        <center>
                          <i className="fa fa-times" aria-hidden="true" />
                        </center>
                      </td>
                      <td className="th_base" style={{ background: "#EDFAFF" }}>
                        <center>
                          <i className="fa fa-times" aria-hidden="true" />
                        </center>
                      </td>
                      <td className="th_base" style={{ background: "#F1FFEE" }}>
                        <center>
                          <i className="fa fa-times" aria-hidden="true" />
                        </center>
                      </td>
                      <td className="th_base" style={{ background: "#FCEEFF" }}>
                        <center>
                          <i className="fa fa-check" aria-hidden="true" />
                        </center>
                      </td>
                    </tr>
                    <tr>
                      <td className="th_base">
                        Использование /heal и /feed без ожидания
                      </td>
                      <td className="th_base" style={{ background: "#FFFAEE" }}>
                        <center>
                          <i className="fa fa-times" aria-hidden="true" />
                        </center>
                      </td>
                      <td className="th_base" style={{ background: "#EDFAFF" }}>
                        <center>
                          <i className="fa fa-times" aria-hidden="true" />
                        </center>
                      </td>
                      <td className="th_base" style={{ background: "#F1FFEE" }}>
                        <center>
                          <i className="fa fa-times" aria-hidden="true" />
                        </center>
                      </td>
                      <td className="th_base" style={{ background: "#FCEEFF" }}>
                        <center>
                          <i className="fa fa-check" aria-hidden="true" />
                        </center>
                      </td>
                    </tr>
                    <tr>
                      <td className="th_base">
                        Накормить другого игрока
                        <br />
                        <br />
                        <small>Команда: /feed [ник]</small>
                      </td>
                      <td className="th_base" style={{ background: "#FFFAEE" }}>
                        <center>
                          <i className="fa fa-times" aria-hidden="true" />
                        </center>
                      </td>
                      <td className="th_base" style={{ background: "#EDFAFF" }}>
                        <center>
                          <i className="fa fa-times" aria-hidden="true" />
                        </center>
                      </td>
                      <td className="th_base" style={{ background: "#F1FFEE" }}>
                        <center>
                          <i className="fa fa-times" aria-hidden="true" />
                        </center>
                      </td>
                      <td className="th_base" style={{ background: "#FCEEFF" }}>
                        <center>
                          <i className="fa fa-check" aria-hidden="true" />
                        </center>
                      </td>
                    </tr>
                    <tr>
                      <td className="th_base">
                        Ваш уровень отностительно уровня моря
                        <br />
                        <br />
                        <small>Команда: /depth</small>
                      </td>
                      <td className="th_base" style={{ background: "#FFFAEE" }}>
                        <center>
                          <i className="fa fa-times" aria-hidden="true" />
                        </center>
                      </td>
                      <td className="th_base" style={{ background: "#EDFAFF" }}>
                        <center>
                          <i className="fa fa-times" aria-hidden="true" />
                        </center>
                      </td>
                      <td className="th_base" style={{ background: "#F1FFEE" }}>
                        <center>
                          <i className="fa fa-times" aria-hidden="true" />
                        </center>
                      </td>
                      <td className="th_base" style={{ background: "#FCEEFF" }}>
                        <center>
                          <i className="fa fa-check" aria-hidden="true" />
                        </center>
                      </td>
                    </tr>
                    <tr>
                      <td className="th_base">
                        Перемещение между мирами
                        <br />
                        <br />
                        <small>Команда: /world [мир]</small>
                      </td>
                      <td className="th_base" style={{ background: "#FFFAEE" }}>
                        <center>
                          <i className="fa fa-times" aria-hidden="true" />
                        </center>
                      </td>
                      <td className="th_base" style={{ background: "#EDFAFF" }}>
                        <center>
                          <i className="fa fa-times" aria-hidden="true" />
                        </center>
                      </td>
                      <td className="th_base" style={{ background: "#F1FFEE" }}>
                        <center>
                          <i className="fa fa-times" aria-hidden="true" />
                        </center>
                      </td>
                      <td className="th_base" style={{ background: "#FCEEFF" }}>
                        <center>
                          <i className="fa fa-check" aria-hidden="true" />
                        </center>
                      </td>
                    </tr>
                    <tr>
                      <td className="th_base">
                        Изменение цвета сообщений в{" "}
                        <a href="/index.php?do=cp">личном кабинете</a>
                      </td>
                      <td className="th_base" style={{ background: "#FFFAEE" }}>
                        <center>
                          <i className="fa fa-times" aria-hidden="true" />
                        </center>
                      </td>
                      <td className="th_base" style={{ background: "#EDFAFF" }}>
                        <center>
                          <i className="fa fa-times" aria-hidden="true" />
                        </center>
                      </td>
                      <td className="th_base" style={{ background: "#F1FFEE" }}>
                        <center>
                          <i className="fa fa-times" aria-hidden="true" />
                        </center>
                      </td>
                      <td className="th_base" style={{ background: "#FCEEFF" }}>
                        <center>
                          <i className="fa fa-check" aria-hidden="true" />
                        </center>
                      </td>
                    </tr>
                    <tr>
                      <td className="th_base">
                        Изменение цвета префикса в{" "}
                        <a href="/index.php?do=cp">личном кабинете</a>
                      </td>
                      <td className="th_base" style={{ background: "#FFFAEE" }}>
                        <center>
                          <i className="fa fa-times" aria-hidden="true" />
                        </center>
                      </td>
                      <td className="th_base" style={{ background: "#EDFAFF" }}>
                        <center>
                          <i className="fa fa-times" aria-hidden="true" />
                        </center>
                      </td>
                      <td className="th_base" style={{ background: "#F1FFEE" }}>
                        <center>
                          <i className="fa fa-times" aria-hidden="true" />
                        </center>
                      </td>
                      <td className="th_base" style={{ background: "#FCEEFF" }}>
                        <center>
                          <i className="fa fa-check" aria-hidden="true" />
                        </center>
                      </td>
                    </tr>
                    <tr>
                      <td className="th_base">
                        Использование запрещённого цвета в чате
                        <br />
                        <br />
                        <small>Цвет: &amp;6</small>
                      </td>
                      <td className="th_base" style={{ background: "#FFFAEE" }}>
                        <center>
                          <i className="fa fa-times" aria-hidden="true" />
                        </center>
                      </td>
                      <td className="th_base" style={{ background: "#EDFAFF" }}>
                        <center>
                          <i className="fa fa-times" aria-hidden="true" />
                        </center>
                      </td>
                      <td className="th_base" style={{ background: "#F1FFEE" }}>
                        <center>
                          <i className="fa fa-times" aria-hidden="true" />
                        </center>
                      </td>
                      <td className="th_base" style={{ background: "#FCEEFF" }}>
                        <center>
                          <i className="fa fa-check" aria-hidden="true" />
                        </center>
                      </td>
                    </tr>
                    <tr>
                      <td className="th_base">
                        Использование цветов в личном чате
                        <br />
                        <br />
                        <small>Команда: /m [ник] &amp;aПривет!</small>
                      </td>
                      <td className="th_base" style={{ background: "#FFFAEE" }}>
                        <center>
                          <i className="fa fa-times" aria-hidden="true" />
                        </center>
                      </td>
                      <td className="th_base" style={{ background: "#EDFAFF" }}>
                        <center>
                          <i className="fa fa-times" aria-hidden="true" />
                        </center>
                      </td>
                      <td className="th_base" style={{ background: "#F1FFEE" }}>
                        <center>
                          <i className="fa fa-times" aria-hidden="true" />
                        </center>
                      </td>
                      <td className="th_base" style={{ background: "#FCEEFF" }}>
                        <center>
                          <i className="fa fa-check" aria-hidden="true" />
                        </center>
                      </td>
                    </tr>
                    <tr>
                      <td className="th_base">
                        Установка персональной погоды
                        <br />
                        <br />
                        <small>Команда: /pweather [sun или storm]</small>
                      </td>
                      <td className="th_base" style={{ background: "#FFFAEE" }}>
                        <center>
                          <i className="fa fa-times" aria-hidden="true" />
                        </center>
                      </td>
                      <td className="th_base" style={{ background: "#EDFAFF" }}>
                        <center>
                          <i className="fa fa-times" aria-hidden="true" />
                        </center>
                      </td>
                      <td className="th_base" style={{ background: "#F1FFEE" }}>
                        <center>
                          <i className="fa fa-times" aria-hidden="true" />
                        </center>
                      </td>
                      <td className="th_base" style={{ background: "#FCEEFF" }}>
                        <center>
                          <i className="fa fa-check" aria-hidden="true" />
                        </center>
                      </td>
                    </tr>
                    <tr>
                      <td className="th_base">
                        Установка скорости полёта
                        <br />
                        <br />
                        <small>Команда: /speed [от 1 до 10]</small>
                      </td>
                      <td className="th_base" style={{ background: "#FFFAEE" }}>
                        <center>
                          <i className="fa fa-times" aria-hidden="true" />
                        </center>
                      </td>
                      <td className="th_base" style={{ background: "#EDFAFF" }}>
                        <center>
                          <i className="fa fa-times" aria-hidden="true" />
                        </center>
                      </td>
                      <td className="th_base" style={{ background: "#F1FFEE" }}>
                        <center>
                          <i className="fa fa-times" aria-hidden="true" />
                        </center>
                      </td>
                      <td className="th_base" style={{ background: "#FCEEFF" }}>
                        <center>
                          <i className="fa fa-check" aria-hidden="true" />
                        </center>
                      </td>
                    </tr>
                    <tr>
                      <td className="th_base">
                        Получать пакет ресурсов{" "}
                        <a href="/eggs.html">
                          <b>EGGS</b>
                        </a>
                        <br />
                        <br />
                        <small>
                          Команда: /kit eggs <b>(1 раз в 15 деней)</b>
                        </small>
                      </td>
                      <td className="th_base" style={{ background: "#FFFAEE" }}>
                        <center>
                          <i className="fa fa-times" aria-hidden="true" />
                        </center>
                      </td>
                      <td className="th_base" style={{ background: "#EDFAFF" }}>
                        <center>
                          <i className="fa fa-times" aria-hidden="true" />
                        </center>
                      </td>
                      <td className="th_base" style={{ background: "#F1FFEE" }}>
                        <center>
                          <i className="fa fa-times" aria-hidden="true" />
                        </center>
                      </td>
                      <td className="th_base" style={{ background: "#FCEEFF" }}>
                        <center>
                          <i className="fa fa-check" aria-hidden="true" />
                        </center>
                      </td>
                    </tr>
                    <tr>
                      <td className="th_base" style={{}}>
                        Получать пакет ресурсов{" "}
                        <a href="/ultra.html">
                          <b>ULTRA</b>
                        </a>
                        <br />
                        <br />
                        <small>
                          Команда: /kit ultra <b>(1 раз в 31 день)</b>
                        </small>
                      </td>
                      <td className="th_base" style={{ background: "#FFFAEE" }}>
                        <center>
                          <i className="fa fa-times" aria-hidden="true" />
                        </center>
                      </td>
                      <td className="th_base" style={{ background: "#EDFAFF" }}>
                        <center>
                          <i className="fa fa-times" aria-hidden="true" />
                        </center>
                      </td>
                      <td className="th_base" style={{ background: "#F1FFEE" }}>
                        <center>
                          <i className="fa fa-times" aria-hidden="true" />
                        </center>
                      </td>
                      <td className="th_base" style={{ background: "#FCEEFF" }}>
                        <center>
                          <i className="fa fa-check" aria-hidden="true" />
                        </center>
                      </td>
                    </tr>
                    <tr>
                      <td className="th_base">Стоимость привилегии:</td>
                      <td className="th_base" style={{ background: "#FFFAEE" }}>
                        <center>
                          <b>159</b> монет
                        </center>
                      </td>
                      <td className="th_base" style={{ background: "#EDFAFF" }}>
                        <center>
                          <b>249</b>
                          <br /> монет
                        </center>
                      </td>
                      <td className="th_base" style={{ background: "#F1FFEE" }}>
                        <center>
                          <b>399</b>
                          <br /> монет
                        </center>
                      </td>
                      <td className="th_base" style={{ background: "#FCEEFF" }}>
                        <center>
                          <b>999</b> монет
                        </center>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <br />
                <br />
                <br />
                <center>
                  <a href="" className="smcui-button">
                    Приобрести привилегии в личном кабинете
                  </a>
                </center>
                <br />
                <br />
              </div>
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

export default Donate
