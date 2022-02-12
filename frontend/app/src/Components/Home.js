import React from 'react'
import Card from '../Components/Post/Card'
import { API } from '../Components/API'
import {Link} from 'react-router-dom'
import Typewriter from 'typewriter-effect';
import './main.css' 
function Home(props){

    // const url = `http://localhost:8000/api/app/`
    const url =  (`${process.env.REACT_APP_API_URL}/api/app/`)
    let posts = API(url)
    let content = null

    if(posts.error){
        content = <div>
            <div className="error">
              Error
            </div>
        </div>
    }
    
    if(posts.data){
        content = 
        posts.data.map((post) => 
            <div key={post.slug} className="home_card_container">
              <Card post={post}></Card> 
            </div>
        )
    }

    return (
        <div>
              <div className="home_title">
		<Typewriter
  		options={{
    		strings: ['App', 'Cloud','AI'],
    		autoStart: true,
    		loop: true,
                delay:150,
                cursor:' ',
 	 	}}	
		/>
              </div>
              <div className="home_container">
                { content } 
              </div>

         </div>
    )
}

export default Home

