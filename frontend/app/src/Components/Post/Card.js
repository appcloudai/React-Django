import React from 'react';
import { Link } from 'react-router-dom';

 
function Card(props){
    return (
        <div className='post_cards'>
            <div className="post_card_item">

                <Link to={`/PostDetail/${props.post.slug}`}>
                    <div 
                        style={{
                            'backgroundImage': `url('${props.post.thumbnail}')`,height:'240px',width:'100%',borderRadius:'6px',
                            backgroundSize:'contain',backgroundRepeat:'no-repeat',justifyContent:'center',marginLeft:'auto',marginRight:'auto',backgroundPosition:'center'
                        }}
                    >
                    </div>   
                </Link>

                <div className="post_card_body">

                    <h3 className="post_title">
                        <Link to={`/PostDetail/${props.post.slug}`}>
                            { props.post.title }
                        </Link>    
                    </h3>
        
                    <div className="post_excerpt">
                        { props.post.excerpt }...
                    </div>
              
                </div>
             </div>
        </div>   
    );
}

export default Card
