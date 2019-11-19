import React from 'react';
import './App.css';
import Welcome from './components/welcome.jsx';
import { HashRouter as Router, Route } from 'react-router-dom';
import AboutMe from './components/aboutMe.jsx';
import Posts from './components/posts.jsx';
import PostRead from './components/postRead.jsx'


class App extends React.Component {
  
  constructor(props) {
    super(props);


    this.state = {
      developers: []
    };
  }


  render() {
    return (
      <div className="App">

        <Router >
          <div>
            <Route exact path="/" component={Welcome} />
            <Route exact path="/about" component={AboutMe} />
            <Route exact path="/posts" component={Posts} />
            <Route exact path={'/posts/:postId/'} component={PostRead} />
            {/* <Route path="/photos" component={Page2} />
              <Route path="/demos" component={Page3} />  */}
            
          </div>
        </Router>

      </div>
    );
  }
}


export default App;
