import React from 'react';
import './style.css';

const Post = (props) => {
  const textTruncate = (str, wordLimit) =>{
    if(str.length<= wordLimit){
      return str
    } return str.substring(0, wordLimit) + "..."
  }
  return (
    <div className='post-main-container' style={{backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.9)), url(' + props.recentPostBg + ')' }}>
     <div className='post-blog'>{props.contentType}</div>
     <div className='post-heading'>
{props.contentHeading}</div>
<div className='post-content'>{textTruncate(props.content, 150)}</div>
 <div className='read-more'>Read more </div>
    </div>
  )
}

export default Post;