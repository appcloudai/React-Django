import React from 'react';
import { Link } from 'react-router-dom';
import { API } from '../API'
import { useParams } from 'react-router-dom'
import '../main.css'
function PostDetail() {

    const { id } = useParams()
    //  const url =  `http://localhost:8000/api/app/${id}`
    const url =  (`${process.env.REACT_APP_API_URL}/api/app/${id}`)
    let post = API(url)
    let content = null
 
    const createBlog = () => {
        return {__html:post.data.content}
    };

    if(post.data){
        content = 
            <div className='post_detail'>
                <br></br>
                <p className='post_detail_back_button'><Link to='/' className='back_button_symbol'>{"<"}<span className='back_button_text'> Back </span></Link></p>
                <h3 className='post_detail_header'>{post.data.title}</h3>
                <div className='post_detail_content' dangerouslySetInnerHTML={createBlog()}/>
                <hr />
             
            </div>
    }

    return (
        <div className="post_detail_container">
            <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no"></meta>
            {content}
        </div>
    )
}

export default PostDetail
