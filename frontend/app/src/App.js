import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './Components/Header'
import Footer from './Components/Footer'
import Home from './Components/Home'
import About from './Components/About'
import Contact from './Components/Contact'
import PostDetail from './Components/Post/PostDetail';
 
function App() {
  return (
    <div className="app_container">
    <BrowserRouter>
     <Header />
      <div className="app_items">
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/About">
            <About />
          </Route>
          <Route exact path="/Contact">
            <Contact />
          </Route>
          <Route path="/PostDetail/:id">
            <PostDetail />
          </Route>
        </Switch>
      </div>
    <Footer />
  </BrowserRouter> 
  </div>
  );
}
 
export default App;
