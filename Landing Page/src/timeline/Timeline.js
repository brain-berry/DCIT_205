import React, { useState } from "react";
import Post from './posts/Post'
import Suggestions from './Suggestions'
import "./Timeline.css"

function Timeline() {
  const [posts, setPosts] = useState([
    {
      user:"henry_",
      postImage:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQu_fpPmbK-bebEeX036y7frmW06amtCkG1ew&usqp=CAU",
      likes: 12,
      timestamp:"2d"
    },
    {
      user:"whitney_",
      postImage:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxXnC3fwMwkbIt3ejGRIw3NmbDyUtgS5g2jA&usqp=CAU",
      likes: 120,
      timestamp:"3hr"
    },
    {
      user:"vida_",
      postImage:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwWuvJHLqnpwQKedQusejSFEL-9Y3grrH4vQ&usqp=CAU",
      likes: 52,
      timestamp:"4mins"
    },
    {
      user:"queenster_",
      postImage:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdxpKUACkSklSrDrDlc37bwXy-98HkB_vyjg&usqp=CAU",
      likes: 1258,
      timestamp:"2d"
    },
    {
      user:"gladys_",
      postImage:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYIavcDE_2Xf8tdPMoYKzMB-heDeIO9eUz1w&usqp=CAU",
      likes: 1122,
      timestamp:"2d"
    }
  ]);
    
  return (
    <div className='timeline'>
      <div className='timeline__left'>
        <div className='timeline__posts'>
        {posts.map((post) => (
            <Post
              user={post.user}
              postImage={post.postImage}
              likes={post.likes}
              timestamp={post.timestamp}
            />
          ))}
        </div>
      </div>
      <div className='timeline__right'>
        <Suggestions/>
      </div>
    </div>
  )
}

export default Timeline