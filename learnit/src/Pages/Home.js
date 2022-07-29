import React from 'react'
import './CSS/Home.css'
import './JS/Home.js'


function Home() {
  return (
    <>
  {/* HEADER */}
  <header className="header">
    <div className="container">
      {/* logo */}
      <h1 className="header__logo">
        <a href="#" className="logo">
          EDU Portal
        </a>
      </h1>
      {/* nav */}
      <nav className="header__nav">
        {/* nav top */}
        <div className="header__top">
          <a href="#" className="logo">
            EDU Portal
          </a>
          <button className="header__btn-close">
            <ion-icon name="close-outline" />
          </button>
        </div>
        {/* nav list */}
        <ul className="header__list">
          <li className="header__item">
            <a href="#" className="header__link">
              首頁
            </a>
          </li>
          <li className="header__item">
            <a href="#about" className="header__link">
              關於我們
            </a>
          </li>
          <li className="header__item">
            <a href="#courses" className="header__link">
              課程
            </a>
          </li>
          <li className="header__item">
            <a href="#workshops" className="header__link">
              研討會
            </a>
          </li>
          <li className="header__item">
            <a href="#" className="header__link">
              Blog
            </a>
          </li>
          <li className="header__item">
            <a href="#" className="header__link">
              聯絡我們
            </a>
          </li>
        </ul>
      </nav>
      {/* actions */}
      <div className="header__actions">
        {/* search */}
        <button className="header__actions-btn header__actions-btn-search">
          <ion-icon name="search-outline" />
        </button>
        {/* login / register */}
        <a href="#" className="header__actions-btn header__actions-btn-action">
          <ion-icon name="person-outline" aria-hidden="true" />
          <span className="header__actions-text" aria-hidden="true">
            登入 / 註冊
          </span>
        </a>
        {/* toggle */}
        <button className="header__actions-btn header__actions-btn-toggle">
          <ion-icon name="menu-outline" />
        </button>
      </div>
      {/* overlay */}
      <div className="overlay" />
    </div>
  </header>
  {/* SEARCH OVERLAY */}
  <div className="search-overlay">
    <div className="container">
      {/* close button */}
      <button className="search-overlay__close">
        <ion-icon name="close-outline" />
      </button>
      {/* search form */}
      <div className="search-overlay__wrap">
        <input
          type="search"
          name="search"
          placeholder="請輸入關鍵字 ..."
          className="search-overlay__input"
          autoComplete="off"
        />
        <button className="search-overlay__btn">
          <ion-icon name="search-outline" />
        </button>
      </div>
    </div>
  </div>
  <main>
    <article>
      {/* HERO */}
      <section className="hero" id="home">
        <div className="container">
          {/* hero content */}
          <div className="hero__content">
            <p className="section-desc hero__desc">教育，改變您的生活</p>
            <h2 className="h1 hero__title">
              頂尖公司選擇 EDU Portal，打造員工需要的職場技能。
            </h2>
            <p className="hero__text">
              全世界的學習者紛紛開啟了新的職涯、在自己的領域中更上一層樓，擁有更豐富美好的生活。
            </p>
            <a href="#" className="btn btn-primary">
              <span className="hero__btn-text">即刻開始體驗</span>
              <ion-icon name="arrow-forward-outline" />
            </a>
          </div>
          {/* hero banner */}
          <figure className="hero__banner">
            <img
              loading="lazy"
              className="img-cover hero__img"
              src="https://images.unsplash.com/photo-1623945194105-cd36c4433390?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=793&q=80"
              alt="hero image"
            />
            <img
              loading="lazy"
              className="img-cover hero__img"
              src="https://images.unsplash.com/photo-1515073838964-4d4d56a58b21?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
              alt="hero image"
            />
            <img
              loading="lazy"
              className="img-cover hero__img"
              src="https://images.unsplash.com/photo-1617871407626-0fe7b5d9db33?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
              alt="hero image"
            />
          </figure>
        </div>
      </section>
      {/* CATEGORY */}
      <section className="section category">
        <div className="container">
          {/* head */}
          <div className="category__head">
            <p className="section-desc category__desc">課程類別</p>
            <h2 className="h2 category__title">熱門類別</h2>
          </div>
          {/* category list */}
          <ul className="d-grid category__list">
            {/* category item 1 */}
            <li className="category__item">
              <div className="category__card">
                {/* icon */}
                <div className="category__card-icon-wrap">
                  <ion-icon name="briefcase-outline" />
                </div>
                {/* content */}
                <div className="category__conteent">
                  <h3 className="h3 category__card-title">
                    <a href="#" className="category__card-link">
                      IT 與 軟體
                    </a>
                  </h3>
                  <span className="category__card-text">29 門課程</span>
                </div>
              </div>
            </li>
            {/* category item 2 */}
            <li className="category__item">
              <div className="category__card">
                {/* icon */}
                <div className="category__card-icon-wrap">
                  <ion-icon name="file-tray-full-outline" />
                </div>
                {/* content */}
                <div className="category__conteent">
                  <h3 className="h3 category__card-title">
                    <a href="#" className="category__card-link">
                      專案管理
                    </a>
                  </h3>
                  <span className="category__card-text">15 門課程</span>
                </div>
              </div>
            </li>
            {/* category item 3 */}
            <li className="category__item">
              <div className="category__card">
                {/* icon */}
                <div className="category__card-icon-wrap">
                  <ion-icon name="color-palette-outline" />
                </div>
                {/* content */}
                <div className="category__conteent">
                  <h3 className="h3 category__card-title">
                    <a href="#" className="category__card-link">
                      美術設計
                    </a>
                  </h3>
                  <span className="category__card-text">23 門課程</span>
                </div>
              </div>
            </li>
            {/* category item 4 */}
            <li className="category__item">
              <div className="category__card">
                {/* icon */}
                <div className="category__card-icon-wrap">
                  <ion-icon name="layers-outline" />
                </div>
                {/* content */}
                <div className="category__conteent">
                  <h3 className="h3 category__card-title">
                    <a href="#" className="category__card-link">
                      商業分析
                    </a>
                  </h3>
                  <span className="category__card-text">11 門課程</span>
                </div>
              </div>
            </li>
            {/* category item 5 */}
            <li className="category__item">
              <div className="category__card">
                {/* icon */}
                <div className="category__card-icon-wrap">
                  <ion-icon name="laptop-outline" />
                </div>
                {/* content */}
                <div className="category__conteent">
                  <h3 className="h3 category__card-title">
                    <a href="#" className="category__card-link">
                      網頁開發
                    </a>
                  </h3>
                  <span className="category__card-text">49 門課程</span>
                </div>
              </div>
            </li>
            {/* category item 6 */}
            <li className="category__item">
              <div className="category__card">
                {/* icon */}
                <div className="category__card-icon-wrap">
                  <ion-icon name="thumbs-up-outline" />
                </div>
                {/* content */}
                <div className="category__conteent">
                  <h3 className="h3 category__card-title">
                    <a href="#" className="category__card-link">
                      溝通技巧
                    </a>
                  </h3>
                  <span className="category__card-text">19 門課程</span>
                </div>
              </div>
            </li>
            {/* category item 7 */}
            <li className="category__item">
              <div className="category__card">
                {/* icon */}
                <div className="category__card-icon-wrap">
                  <ion-icon name="headset-outline" />
                </div>
                {/* content */}
                <div className="category__conteent">
                  <h3 className="h3 category__card-title">
                    <a href="#" className="category__card-link">
                      音樂
                    </a>
                  </h3>
                  <span className="category__card-text">50 門課程</span>
                </div>
              </div>
            </li>
            {/* category item 8 */}
            <li className="category__item">
              <div className="category__card">
                {/* icon */}
                <div className="category__card-icon-wrap">
                  <ion-icon name="server-outline" />
                </div>
                {/* content */}
                <div className="category__conteent">
                  <h3 className="h3 category__card-title">
                    <a href="#" className="category__card-link">
                      Amazon AWS
                    </a>
                  </h3>
                  <span className="category__card-text">59 門課程</span>
                </div>
              </div>
            </li>
            {/* category item 9 */}
            <li className="category__item">
              <div className="category__card">
                {/* icon */}
                <div className="category__card-icon-wrap">
                  <ion-icon name="medkit-outline" />
                </div>
                {/* content */}
                <div className="category__conteent">
                  <h3 className="h3 category__card-title">
                    <a href="#" className="category__card-link">
                      健康管理
                    </a>
                  </h3>
                  <span className="category__card-text">35 門課程</span>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </section>
      {/* ABOUT */}
      <section id="about" className="section about">
        <div className="container">
          {/* about banner */}
          <figure className="about__banner">
            <img
              className="img-cover about__img"
              src="https://images.unsplash.com/photo-1503832725-c34828469568?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=737&q=80"
              alt="about image"
            />
            <img
              className="img-cover about__img"
              src="https://images.unsplash.com/photo-1611872686898-d064fecb79fa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=686&q=80"
              alt="about image"
            />
            <img
              className="img-cover about__img"
              src="https://images.unsplash.com/photo-1526540354-471ebff95055?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
              alt="about image"
            />
          </figure>
          {/* about content */}
          <div className="about__content">
            {/* about head */}
            <div className="about__head">
              <p className="section-desc about__desc">關於我們</p>
              <h2 className="h2 about__-title">我們與全世界分享知識</h2>
            </div>
            {/* about list */}
            <ul className="about__list">
              {/* about item 1 */}
              <li className="about__item">
                {/* icon */}
                <div className="about__item-icon-wrap">
                  <ion-icon
                    className="about__item-icon"
                    name="accessibility-outline"
                  />
                </div>
                <div className="about__item-content">
                  <h3 className="h3 about__item-title">企業級講師</h3>
                  <p className="about__item-text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Illum iure deserunt adipisci. Ipsa, quam soluta.
                  </p>
                </div>
              </li>
              {/* about item 2 */}
              <li className="about__item">
                {/* icon */}
                <div className="about__item-icon-wrap">
                  <ion-icon className="about__item-icon" name="book-outline" />
                </div>
                <div className="about__item-content">
                  <h3 className="h3 about__item-title">不斷更新課程內容</h3>
                  <p className="about__item-text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Illum iure deserunt adipisci. Ipsa, quam soluta.
                  </p>
                </div>
              </li>
              {/* about item 3 */}
              <li className="about__item">
                {/* icon */}
                <div className="about__item-icon-wrap">
                  <ion-icon
                    className="about__item-icon "
                    name="medal-outline"
                  />
                </div>
                <div className="about__item-content">
                  <h3 className="h3 about__item-title">最大的學生討論社群</h3>
                  <p className="about__item-text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Illum iure deserunt adipisci. Ipsa, quam soluta.
                  </p>
                </div>
              </li>
            </ul>
            <a href="#" className="btn btn-primary">
              <span className="span">認識我們</span>
              <ion-icon name="arrow-forward-outline" aria-hidden="true" />
            </a>
          </div>
        </div>
      </section>
      {/* COURSES */}
      <section id="courses" className="section courses">
        <div className="container">
          {/* courses head */}
          <div className="courses__head">
            <p className="section-desc">熱門課程</p>
            <h2 className="h2 courses__title">我們最受歡迎的課程</h2>
          </div>
          {/* courses list */}
          <ul className="d-grid courses__list">
            {/* courses item 1 */}
            <li className="courses__item">
              {/* card */}
              <div className="courses__card">
                {/* banner */}
                <figure className="courses__card-banner">
                  <img
                    src="https://images.unsplash.com/photo-1501504905252-473c47e087f8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80"
                    alt="courses img"
                    className="img-cover courses__img"
                  />
                </figure>
                {/* floating element */}
                <div className="courses__card-floating">
                  <span className="courses__card-floating-level">
                    Intermediate
                  </span>
                  <button className="courses__card-floating-btn">
                    <ion-icon
                      className="courses__card-floating-icon"
                      name="heart"
                    />
                  </button>
                </div>
                {/* content */}
                <div className="courses__card-content">
                  {/* list */}
                  <ul className="courses__card-list">
                    <li className="courses__card-item">
                      <ion-icon
                        className="courses__card-item-icon"
                        name="reader-outline"
                      />
                      <span className="courses__card-item-text">35 個章節</span>
                    </li>
                    <li className="courses__card-item">
                      <ion-icon
                        className="courses__card-item-icon"
                        name="time-outline"
                      />
                      <time className="courses__card-item-time">
                        18小時 15分
                      </time>
                    </li>
                  </ul>
                  {/* courses name */}
                  <h3 className="h3 courses__card-title">
                    <a href="#" className="courses__card-link">
                      Adobe XD 入門網頁設計
                    </a>
                  </h3>
                  {/* ratting */}
                  <div className="courses__card-ratting-wrap">
                    <div className="courses__card-ratting">
                      <ion-icon
                        className="courses__card-rating-star"
                        name="star"
                      />
                      <ion-icon
                        className="courses__card-rating-star"
                        name="star"
                      />
                      <ion-icon
                        className="courses__card-rating-star"
                        name="star"
                      />
                      <ion-icon
                        className="courses__card-rating-star"
                        name="star"
                      />
                      <ion-icon
                        className="courses__card-rating-star"
                        name="star-half-outline"
                      />
                    </div>
                    <span className="courses__card-ratting-text">
                      (18 則評論)
                    </span>
                  </div>
                  {/* footer */}
                  <div className="courses__card-footer">
                    <div className="courses__card-footer-price">
                      <span className="courses__card-footer-sale">$600</span>
                      <del className="courses__card-footer-origin">$900</del>
                    </div>
                    <div className="courses__card-footer-item">
                      <ion-icon
                        className="courses__card-footer-item-icon"
                        name="people-outline"
                      />
                      <span className="courses__card-footer-item-text">
                        47 位學生
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            {/* courses item 2 */}
            <li className="courses__item">
              {/* card */}
              <div className="courses__card">
                {/* banner */}
                <figure className="courses__card-banner">
                  <img
                    style={{ aspectRatio: "4 / 3" }}
                    src="https://images.unsplash.com/photo-1559028012-481c04fa702d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1036&q=80"
                    alt="courses img"
                    className="img-cover courses__img"
                  />
                </figure>
                {/* floating element */}
                <div className="courses__card-floating">
                  <span className="courses__card-floating-level">Advanced</span>
                  <button className="courses__card-floating-btn">
                    <ion-icon
                      className="courses__card-floating-icon"
                      name="heart"
                    />
                  </button>
                </div>
                {/* content */}
                <div className="courses__card-content">
                  {/* list */}
                  <ul className="courses__card-list">
                    <li className="courses__card-item">
                      <ion-icon
                        className="courses__card-item-icon"
                        name="reader-outline"
                      />
                      <span className="courses__card-item-text">21 個章節</span>
                    </li>
                    <li className="courses__card-item">
                      <ion-icon
                        className="courses__card-item-icon"
                        name="time-outline"
                      />
                      <time className="courses__card-item-time">
                        11小時 04分
                      </time>
                    </li>
                  </ul>
                  {/* courses name */}
                  <h3 className="h3 courses__card-title">
                    <a href="#" className="courses__card-link">
                      數位行銷課程
                    </a>
                  </h3>
                  {/* ratting */}
                  <div className="courses__card-ratting-wrap">
                    <div className="courses__card-ratting">
                      <ion-icon
                        className="courses__card-rating-star"
                        name="star"
                      />
                      <ion-icon
                        className="courses__card-rating-star"
                        name="star"
                      />
                      <ion-icon
                        className="courses__card-rating-star"
                        name="star"
                      />
                      <ion-icon
                        className="courses__card-rating-star"
                        name="star"
                      />
                      <ion-icon
                        className="courses__card-rating-star"
                        name="star-outline"
                      />
                    </div>
                    <span className="courses__card-ratting-text">
                      (5 則評論)
                    </span>
                  </div>
                  {/* footer */}
                  <div className="courses__card-footer">
                    <div className="courses__card-footer-price">
                      <span className="courses__card-footer-sale">$330</span>
                      <del className="courses__card-footer-origin">$600</del>
                    </div>
                    <div className="courses__card-footer-item">
                      <ion-icon
                        className="courses__card-footer-item-icon"
                        name="people-outline"
                      />
                      <span className="courses__card-footer-item-text">
                        18 位學生
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            {/* courses item 3 */}
            <li className="courses__item">
              {/* card */}
              <div className="courses__card">
                {/* banner */}
                <figure className="courses__card-banner">
                  <img
                    src="https://images.unsplash.com/photo-1542626991-cbc4e32524cc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80"
                    alt="courses img"
                    className="img-cover courses__img"
                  />
                </figure>
                {/* floating element */}
                <div className="courses__card-floating">
                  <span className="courses__card-floating-level">Basic</span>
                  <button className="courses__card-floating-btn">
                    <ion-icon
                      className="courses__card-floating-icon"
                      name="heart"
                    />
                  </button>
                </div>
                {/* content */}
                <div className="courses__card-content">
                  {/* list */}
                  <ul className="courses__card-list">
                    <li className="courses__card-item">
                      <ion-icon
                        className="courses__card-item-icon"
                        name="reader-outline"
                      />
                      <span className="courses__card-item-text">15 個章節</span>
                    </li>
                    <li className="courses__card-item">
                      <ion-icon
                        className="courses__card-item-icon"
                        name="time-outline"
                      />
                      <time className="courses__card-item-time">
                        09小時 44分
                      </time>
                    </li>
                  </ul>
                  {/* courses name */}
                  <h3 className="h3 courses__card-title">
                    <a href="#" className="courses__card-link">
                      Layout 實務設計
                    </a>
                  </h3>
                  {/* ratting */}
                  <div className="courses__card-ratting-wrap">
                    <div className="courses__card-ratting">
                      <ion-icon
                        className="courses__card-rating-star"
                        name="star"
                      />
                      <ion-icon
                        className="courses__card-rating-star"
                        name="star"
                      />
                      <ion-icon
                        className="courses__card-rating-star"
                        name="star"
                      />
                      <ion-icon
                        className="courses__card-rating-star"
                        name="star"
                      />
                      <ion-icon
                        className="courses__card-rating-star"
                        name="star"
                      />
                    </div>
                    <span className="courses__card-ratting-text">
                      (13 則評論)
                    </span>
                  </div>
                  {/* footer */}
                  <div className="courses__card-footer">
                    <div className="courses__card-footer-price">
                      <span className="courses__card-footer-sale">$600</span>
                      <del className="courses__card-footer-origin">$1,200</del>
                    </div>
                    <div className="courses__card-footer-item">
                      <ion-icon
                        className="courses__card-footer-item-icon"
                        name="people-outline"
                      />
                      <span className="courses__card-footer-item-text">
                        55 位學生
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            {/* courses item 4 */}
            <li className="courses__item">
              {/* card */}
              <div className="courses__card">
                {/* banner */}
                <figure className="courses__card-banner">
                  <img
                    src="https://images.unsplash.com/photo-1507652955-f3dcef5a3be5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                    alt="courses img"
                    className="img-cover courses__img"
                  />
                </figure>
                {/* floating element */}
                <div className="courses__card-floating">
                  <span className="courses__card-floating-level">Basic</span>
                  <button className="courses__card-floating-btn">
                    <ion-icon
                      className="courses__card-floating-icon"
                      name="heart"
                    />
                  </button>
                </div>
                {/* content */}
                <div className="courses__card-content">
                  {/* list */}
                  <ul className="courses__card-list">
                    <li className="courses__card-item">
                      <ion-icon
                        className="courses__card-item-icon"
                        name="reader-outline"
                      />
                      <span className="courses__card-item-text">25 個章節</span>
                    </li>
                    <li className="courses__card-item">
                      <ion-icon
                        className="courses__card-item-icon"
                        name="time-outline"
                      />
                      <time className="courses__card-item-time">
                        20小時 01分
                      </time>
                    </li>
                  </ul>
                  {/* courses name */}
                  <h3 className="h3 courses__card-title">
                    <a href="#" className="courses__card-link">
                      從零開始學習英文文法
                    </a>
                  </h3>
                  {/* ratting */}
                  <div className="courses__card-ratting-wrap">
                    <div className="courses__card-ratting">
                      <ion-icon
                        className="courses__card-rating-star"
                        name="star"
                      />
                      <ion-icon
                        className="courses__card-rating-star"
                        name="star"
                      />
                      <ion-icon
                        className="courses__card-rating-star"
                        name="star"
                      />
                      <ion-icon
                        className="courses__card-rating-star"
                        name="star-half-outline"
                      />
                      <ion-icon
                        className="courses__card-rating-star"
                        name="star-outline"
                      />
                    </div>
                    <span className="courses__card-ratting-text">
                      (105 則評論)
                    </span>
                  </div>
                  {/* footer */}
                  <div className="courses__card-footer">
                    <div className="courses__card-footer-price">
                      <span className="courses__card-footer-sale">$600</span>
                      <del className="courses__card-footer-origin">$1,500</del>
                    </div>
                    <div className="courses__card-footer-item">
                      <ion-icon
                        className="courses__card-footer-item-icon"
                        name="people-outline"
                      />
                      <span className="courses__card-footer-item-text">
                        150 位學生
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            {/* courses item 5 */}
            <li className="courses__item">
              {/* card */}
              <div className="courses__card">
                {/* banner */}
                <figure className="courses__card-banner">
                  <img
                    src="https://images.unsplash.com/photo-1565106430482-8f6e74349ca1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                    alt="courses img"
                    className="img-cover courses__img"
                  />
                </figure>
                {/* floating element */}
                <div className="courses__card-floating">
                  <span className="courses__card-floating-level">Advanced</span>
                  <button className="courses__card-floating-btn">
                    <ion-icon
                      className="courses__card-floating-icon"
                      name="heart"
                    />
                  </button>
                </div>
                {/* content */}
                <div className="courses__card-content">
                  {/* list */}
                  <ul className="courses__card-list">
                    <li className="courses__card-item">
                      <ion-icon
                        className="courses__card-item-icon"
                        name="reader-outline"
                      />
                      <span className="courses__card-item-text">40 個章節</span>
                    </li>
                    <li className="courses__card-item">
                      <ion-icon
                        className="courses__card-item-icon"
                        name="time-outline"
                      />
                      <time className="courses__card-item-time">
                        25小時 00分
                      </time>
                    </li>
                  </ul>
                  {/* courses name */}
                  <h3 className="h3 courses__card-title">
                    <a href="#" className="courses__card-link">
                      現代網頁開發
                    </a>
                  </h3>
                  {/* ratting */}
                  <div className="courses__card-ratting-wrap">
                    <div className="courses__card-ratting">
                      <ion-icon
                        className="courses__card-rating-star"
                        name="star"
                      />
                      <ion-icon
                        className="courses__card-rating-star"
                        name="star"
                      />
                      <ion-icon
                        className="courses__card-rating-star"
                        name="star"
                      />
                      <ion-icon
                        className="courses__card-rating-star"
                        name="star"
                      />
                      <ion-icon
                        className="courses__card-rating-star"
                        name="star-outline"
                      />
                    </div>
                    <span className="courses__card-ratting-text">
                      (200 則評論)
                    </span>
                  </div>
                  {/* footer */}
                  <div className="courses__card-footer">
                    <div className="courses__card-footer-price">
                      <span className="courses__card-footer-sale">$1,000</span>
                      <del className="courses__card-footer-origin">$2,200</del>
                    </div>
                    <div className="courses__card-footer-item">
                      <ion-icon
                        className="courses__card-footer-item-icon"
                        name="people-outline"
                      />
                      <span className="courses__card-footer-item-text">
                        450 位學生
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            {/* courses item 6 */}
            <li className="courses__item">
              {/* card */}
              <div className="courses__card">
                {/* banner */}
                <figure className="courses__card-banner">
                  <img
                    src="https://images.unsplash.com/photo-1518818608552-195ed130cdf4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                    alt="courses img"
                    className="img-cover courses__img"
                  />
                </figure>
                {/* floating element */}
                <div className="courses__card-floating">
                  <span className="courses__card-floating-level">
                    Intermediate
                  </span>
                  <button className="courses__card-floating-btn">
                    <ion-icon
                      className="courses__card-floating-icon"
                      name="heart"
                    />
                  </button>
                </div>
                {/* content */}
                <div className="courses__card-content">
                  {/* list */}
                  <ul className="courses__card-list">
                    <li className="courses__card-item">
                      <ion-icon
                        className="courses__card-item-icon"
                        name="reader-outline"
                      />
                      <span className="courses__card-item-text">60 個章節</span>
                    </li>
                    <li className="courses__card-item">
                      <ion-icon
                        className="courses__card-item-icon"
                        name="time-outline"
                      />
                      <time className="courses__card-item-time">
                        40小時 00分
                      </time>
                    </li>
                  </ul>
                  {/* courses name */}
                  <h3 className="h3 courses__card-title">
                    <a href="#" className="courses__card-link">
                      Java 進階設計與實作
                    </a>
                  </h3>
                  {/* ratting */}
                  <div className="courses__card-ratting-wrap">
                    <div className="courses__card-ratting">
                      <ion-icon
                        className="courses__card-rating-star"
                        name="star"
                      />
                      <ion-icon
                        className="courses__card-rating-star"
                        name="star"
                      />
                      <ion-icon
                        className="courses__card-rating-star"
                        name="star"
                      />
                      <ion-icon
                        className="courses__card-rating-star"
                        name="star"
                      />
                      <ion-icon
                        className="courses__card-rating-star"
                        name="star-outline"
                      />
                    </div>
                    <span className="courses__card-ratting-text">
                      (150 則評論)
                    </span>
                  </div>
                  {/* footer */}
                  <div className="courses__card-footer">
                    <div className="courses__card-footer-price">
                      <span className="courses__card-footer-sale">$900</span>
                      <del className="courses__card-footer-origin">$3,000</del>
                    </div>
                    <div className="courses__card-footer-item">
                      <ion-icon
                        className="courses__card-footer-item-icon"
                        name="people-outline"
                      />
                      <span className="courses__card-footer-item-text">
                        250 位學生
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          </ul>
          <a href="#" className="btn btn-primary courses__btn">
            <span>瀏覽所有課程</span>
            <ion-icon name="arrow-forward-outline" />
          </a>
        </div>
      </section>
      {/* WORKSHOPS */}
      <section id="workshops" className="section workshops">
        <div className="container">
          {/* banner */}
          <figure className="workshops__banner">
            <img
              src="https://images.unsplash.com/photo-1620161910388-078ca10a6fba?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80"
              alt="workshops img"
              className="img-cover workshops__img"
            />
          </figure>
          {/* content */}
          <div className="workshops__content">
            {/* head */}
            <div className="workshops__head">
              <p className="section-desc workshops__desc">免費研討會</p>
              <h2 className="h2 workshops__title">加入我們的免費研討會</h2>
            </div>
            <p className="workshops__text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit amet,
              consect adipi scing elit, sed do eiusmod tempor incididunt ut sed
              do eiusmod tempor incididunt ut labore et dolore aliqua.
            </p>
            <a href="#" className="btn btn-secondary workshops__btn">
              <span className="workshops__btn-text">即將舉辦的研討會</span>
              <ion-icon name="arrow-forward-outline" />
            </a>
          </div>
        </div>
      </section>
      {/* NEWSLETTER */}
      <section className="section newsletter">
        <div className="container">
          {/* head */}
          <div className="newsletter__head">
            <p className="section-subtitle newsletter__desc">訂閱電子報</p>
            <h2 className="h2 newsletter__title">接收所有最新訊息</h2>
          </div>
          {/* form */}
          <form className="newsletter__form">
            {/* email input */}
            <div className="newsletter__input-wrap">
              <input
                type="email"
                name="email_address"
                aria-label="email"
                placeholder="請輸入您的電子郵件"
                required=""
                className="newsletter__input"
              />
              <ion-icon className="newsletter__icon" name="mail-open-outline" />
            </div>
            {/* submit button */}
            <button type="submit" className="btn btn-primary newsletter__btn">
              <span className="span">訂閱</span>
              <ion-icon name="arrow-forward-outline" />
            </button>
          </form>
        </div>
      </section>
      {/* FOOTER */}
      <footer className="footer">
        <div className="container">
          {/* footer top */}
          <div className="footer__top">
            {/* brand */}
            <div className="footer__brand">
              <a href="#" className="logo footer__logo">
                DEU Portal
              </a>
              <p className="footer__text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
                impedit quo nihil repudiandae omnis asperiores! Voluptas ex
                laboriosam architecto iusto.
              </p>
              {/* socials */}
              <ul className="footer__socials">
                <li className="footer__socials-item">
                  <a href="#" className="footer__socials-link">
                    <ion-icon
                      className="footer__socials-icon"
                      name="logo-facebook"
                    />
                  </a>
                </li>
                <li className="footer__socials-item">
                  <a href="#" className="footer__socials-link">
                    <ion-icon
                      className="footer__socials-icon"
                      name="logo-twitter"
                    />
                  </a>
                </li>
                <li className="footer__socials-item">
                  <a href="#" className="footer__socials-link">
                    <ion-icon
                      className="footer__socials-icon"
                      name="logo-linkedin"
                    />
                  </a>
                </li>
                <li className="footer__socials-item">
                  <a href="#" className="footer__socials-link">
                    <ion-icon
                      className="footer__socials-icon"
                      name="logo-instagram"
                    />
                  </a>
                </li>
              </ul>
            </div>
            {/* footer list */}
            <ul className="footer__list">
              <li className="footer__list-item">
                <p className="footer__list-title">瀏覽</p>
              </li>
              <li className="footer__list-item">
                <a href="#" className="footer__list-link">
                  <ion-icon name="chevron-forward" />
                  <span className="footer__list-text">關於我們</span>
                </a>
              </li>
              <li className="footer__list-item">
                <a href="#" className="footer__list-link">
                  <ion-icon name="chevron-forward" />
                  <span className="footer__list-text">即將舉辦的活動</span>
                </a>
              </li>
              <li className="footer__list-item">
                <a href="#" className="footer__list-link">
                  <ion-icon name="chevron-forward" />
                  <span className="footer__list-text">Blog &amp; 最新消息</span>
                </a>
              </li>
              <li className="footer__list-item">
                <a href="#" className="footer__list-link">
                  <ion-icon name="chevron-forward" />
                  <span className="footer__list-text">常見問題</span>
                </a>
              </li>
              <li className="footer__list-item">
                <a href="#" className="footer__list-link">
                  <ion-icon name="chevron-forward" />
                  <span className="footer__list-text">隱私政策</span>
                </a>
              </li>
            </ul>
            {/* footer list */}
            <ul className="footer__list">
              <li className="footer__list-item">
                <p className="footer__list-title">其他連結</p>
              </li>
              <li className="footer__list-item">
                <a href="#" className="footer__list-link">
                  <ion-icon name="chevron-forward" />
                  <span className="footer__list-text">聯絡我們</span>
                </a>
              </li>
              <li className="footer__list-item">
                <a href="#" className="footer__list-link">
                  <ion-icon name="chevron-forward" />
                  <span className="footer__list-text">優惠方案</span>
                </a>
              </li>
              <li className="footer__list-item">
                <a href="#" className="footer__list-link">
                  <ion-icon name="chevron-forward" />
                  <span className="footer__list-text">講師個人檔案</span>
                </a>
              </li>
              <li className="footer__list-item">
                <a href="#" className="footer__list-link">
                  <ion-icon name="chevron-forward" />
                  <span className="footer__list-text">常見問題</span>
                </a>
              </li>
              <li className="footer__list-item">
                <a href="#" className="footer__list-link">
                  <ion-icon name="chevron-forward" />
                  <span className="footer__list-text">最受歡迎課程</span>
                </a>
              </li>
              <li className="footer__list-item">
                <a href="#" className="footer__list-link">
                  <ion-icon name="chevron-forward" />
                  <span className="footer__list-text">服務條款</span>
                </a>
              </li>
            </ul>
            {/* footer list */}
            <ul className="footer__list">
              <li className="footer__list-item">
                <p className="footer__list-title">聯絡資訊</p>
              </li>
              <li className="footer__list-item">
                <ion-icon name="location-outline" />
                <address className="footer__list-link">
                  220 台北市市政府市府路 67 巷 100 號 1 樓
                </address>
              </li>
              <li className="footer__list-item">
                <ion-icon name="call" />
                <a href="#" className="footer__list-link">
                  02 - 4444-3333
                </a>
              </li>
              <li className="footer__list-item">
                <ion-icon name="call" />
                <a href="#" className="footer__list-link">
                  02 - 7888-45555
                </a>
              </li>
              <li className="footer__list-item">
                <ion-icon name="mail-outline" />
                <a href="#" className="footer__list-link">
                  support@domain.com
                </a>
              </li>
            </ul>
          </div>
          {/* footer bottom */}
          <div className="footer__bottom">
            <p className="footer__copyright">
              Copyright 2022 EDU Portal. All Rights Reserved by{" "}
              <a href="#" className="footer__link">
                EDU Portal
              </a>
            </p>
          </div>
        </div>
      </footer>
    </article>
  </main>
  {/* BACK TO TOP */}
  <a href="#top" className="back-top-btn">
    <ion-icon name="arrow-up" />
  </a>
</>

  )
}

export default Home
