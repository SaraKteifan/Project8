import React from 'react'
import { useState, useEffect} from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from 'axios';

function Community() {
    const [posts,setPosts]=useState([])
    useEffect(() => {
        const loadPosts = async () => {
        const response = await axios.get('http://localhost/Project9/learnit/backend/getPosts.php');
    
        setPosts(response.data);
    };
    
    loadPosts();
    }, []);
    
    const [displayPost, setDisplayPost] = useState('none')
    const [subject,setSubject]=useState('')
    const [post,setPost]=useState('')
    let user_id= sessionStorage.getItem("user_info");

    const addPost = (e) => {
        e.preventDefault();
        setDisplayPost('block')
    }

    const submitPost = (e) => {
        e.preventDefault();
        axios.post('http://localhost/Project9/learnit/backend/insertPost.php?post_title='+subject+'&post_body='+post+'&user_id='+user_id);
        setDisplayPost('none')
    }

    const showPost=(post_index)=>{
        const post=JSON.stringify(posts[post_index])
        sessionStorage.setItem('post', post)
        window.location.href='/Post';
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
                            <div className="hr-line" /> Posts by LearnIt Community:
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
                                {posts.map((post,index)=>(
                                    <div className="news_text" style={{ padding: "0px 34px 0 0px" }}>
                                    <div className="promo-donate">
                                        <div className="col-md-1 dv lv">
                                            <img src='./img/post_icon.png' alt='post icon'></img>
                                        </div>
                                        <div className="col-md-10 lv">
                                            <h3 className="th-name">{post.post_title}</h3>
                                            <span>By: {post.user_name}</span>
                                            <p className="desctop">
                                                {post.post_body}
                                                <br />
                                                <br />
                                                <span>{post.created_at.slice(0,10)}</span><br></br>
                                                <span>{post.created_at.slice(10,16)}</span>
                                            </p>
                                            <a href="#" className="love-donate" onClick={()=>showPost(index)}>
                                                <span /> Read More
                                            </a>
                                        </div>
                                    </div>
                                </div>))}
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Community
