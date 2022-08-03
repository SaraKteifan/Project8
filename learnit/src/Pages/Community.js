import React from 'react'
import { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from 'axios';

function Community() {
    const [displayPost, setDisplayPost] = useState('none')
    const [subject,setSubject]=useState('')
    const [post,setPost]=useState('')

    const addPost = (e) => {
        e.preventDefault();
        setDisplayPost('block')
    }

    const submitPost = (e) => {
        e.preventDefault();
        axios.post('http://localhost/Project9/learnit/backend/courses.php');
        setDisplayPost('none')
    }

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
                                    <a href="" className="smcui-button" onClick={(e) => addPost(e)}>
                                        Add New Post
                                    </a>
                                </center>
                                <div style={{ display: displayPost }}>
                                    <Form>
                                        <Form.Group className="mb-3" controlId="formBasicEmail">
                                            <Form.Label>Subject:</Form.Label>
                                            <Form.Control type="text" placeholder="Enter post subject" onChange={(e) => setSubject(e.target.value)} />
                                        </Form.Group>

                                        <Form.Group className="mb-3" controlId="formBasicPassword" onChange={(e) => setPost(e.target.value)}>
                                            <Form.Label>Post:</Form.Label>
                                            <Form.Control type="text" />
                                        </Form.Group>
                                        <Button variant="primary" type="submit" onClick={(e)=>submitPost(e)}>
                                            Submit
                                        </Button>
                                    </Form>
                                </div>
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
