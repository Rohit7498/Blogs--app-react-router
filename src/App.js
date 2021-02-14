import './App.css';
import {Route, Switch, BrowserRouter as Router} from 'react-router-dom';
import Home from './pages/Home';
import Posts from './pages/Posts';
import PostDetails from './pages/PostDetails';
import Nav from './Nav';
import AllPosts from './pages/AllPosts';

function App() {
  return (
    <div className="App">
      
    <Router>
    <Nav />
      <Switch>
        <Route path='' exact component={Home} />
        <Route path='/posts' exact component={AllPosts} />
        <Route path='/:id' exact component={Posts}/>
        <Route path='/posts/:id' component={PostDetails} />

      </Switch>
    </Router>
    
    </div>
  );
}

export default App;
