import React from 'react'

function Community() {
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-lg-9 col-md-9">
                        <span className="name-rog">
                            <div className="hr-line" />
                        </span>
                        
                        <span className="name-rog sk">
                            <div className="hr-line" /> LearnIt Community:
                        </span>
                        <div className="fullnews_craft">
                            <div className="full_news_top">
                            <center>
                                        <a href="" className="smcui-button">
                                           Add New Post
                                        </a>
                                    </center>
                                <div className="news_text" style={{ padding: "0px 34px 0 0px" }}>
                                <div className="promo-donate">
                            <div className="col-md-1 dv lv">
                                <img src='./img/post_icon.png' alt='post icon'></img>
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
                                    <span /> Read More
                                </a>
                            </div>
                        </div>
                                    
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Community
