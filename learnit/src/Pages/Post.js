import { useState, useEffect} from 'react'
import axios from 'axios';
import Comments from "../Components/comments/Comments";

function Post() {
  
    const [posts,setPosts]=useState([])
    useEffect(() => {
        const loadPosts = async () => {
        const response = await axios.get('http://localhost/Project9/learnit/backend/getPosts.php');
    
        setPosts(response.data);
    };
    
    loadPosts();
    }, []);

    const post=JSON.parse(sessionStorage.getItem('post'));

    console.log(post);

  return (
    <>
    <div className='container'>
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
                                        </div>
                                    </div>
                                </div>
                                <Comments
        commentsUrl="http://localhost:3004/comments"
        currentUserId="1"/>
                                </div>
    </>
  )
}

export default Post
