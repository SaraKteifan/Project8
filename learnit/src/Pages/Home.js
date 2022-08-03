import React, { useEffect } from 'react'
import Subjects from '../Components/Subjects'
import Video from '../Components/Video'
import axios from 'axios'


function Home() {
 
  return (
    <>
    {/* Home Section START */}
    <section id="home-sec" className="main-banner parallax">
      <div className="bg-lefts" />
      <div className="container">
        <div className="row">
          <div className="col-lg-9">
            {/* Swiper */}
            <div className="swiper-container">
              <div className="swiper-wrapper">
                <div className="swiper-slide" data-hash="slide1">
                  <div className="col-md-6">
                    <span className="img-ste1" />
                  </div>
                  <div className="col-md-6">
                    <h3 className="name-intro">LearnIt</h3>
                    <span className="hr-intro" />
                    <p className="docopation-intro">
                      Find the joy of learning with LearnIt, <br />
                      learn and have fun at the same time!
                    </p>
                    <a href="#" className="btn-drop">
                      <span className="ic-sx22" /> Discover Courses
                    </a>
                  </div>
                </div>
                <div className="swiper-slide" data-hash="slide2">
                  <div className="col-md-6">
                    <span className="img-ste1" />
                  </div>
                  <div className="col-md-6">
                    <h3 className="name-intro">PUBG</h3>
                    <span className="hr-intro" />
                    <p className="docopation-intro">
                      Встречайте новая мини-игра <br />
                      PUBG теперь и в майнкрафте.
                    </p>
                    <a href="#" className="btn-drop">
                      <span className="ic-sx22" /> Подробнее
                    </a>
                  </div>
                </div>
                <div className="swiper-slide" data-hash="slide3">
                  <div className="col-md-6">
                    <span className="img-ste1" />
                  </div>
                  <div className="col-md-6">
                    <h3 className="name-intro">PUBG</h3>
                    <span className="hr-intro" />
                    <p className="docopation-intro">
                      Встречайте новая мини-игра <br />
                      PUBG теперь и в майнкрафте.
                    </p>
                    <a href="#" className="btn-drop">
                      <span className="ic-sx22" /> Подробнее
                    </a>
                  </div>
                </div>
              </div>
              {/* Add Pagination */}
              <div className="swiper-pagination" />
              {/* Add Arrows */}
            </div>
          </div>
          <div className="col-lg-3">
            <a href="/HowStart" className="block-s1">
              <p className="how-to-games">How to start?</p>
              <p className="desctops">
            Find the way to start step by step
              </p>
            </a>
            <a href="#" className="block-s1 p2">
              <p className="how-to-games">LearnIt Community</p>
              <p className="desctops">
                {" "}
                Be a part of LearnIt community, and share your thoughts with other students.
              </p>
            </a>
          </div>
        </div>
      </div>
    </section>
    {/* Home Section END */}
    <div className="container">
      <div className="row">
        <div className="col-lg-9 col-md-9">
         <Subjects/>
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
        {/* Video starts */}
            <Video title={'About Active Learning'} url={'https://www.youtube.com/embed/Z9esoCjjUGQ'}/>
        {/* Video ends */}
      </div>
    </div>

</>


  )
}

export default Home
