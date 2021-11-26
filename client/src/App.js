import './App.css';
import Home from './components/home'
import Create from './components/Create'
import Navbar from './components/Navbar'
import BlogDetails from './components/BlogDetails'
import EditPost from './components/EditPost'
import { ReducerComponent } from './components/ReducerComp'
import TodoList from './components/TodoList'
import {GlobalProvider} from './utils/GlobalContext'
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'

function App() {
  return (
    <Router>
    <div className="App">
      <GlobalProvider>
      <Navbar/>
      <div className="content">
        <Route exact path="/" component={Home}/>
        <Route exact path="/create" component={Create} />
        <Route path="/blogs/:id" component={BlogDetails}/>
        <Route path="/edit/:id" component={EditPost}/>
        <Route path='/reducer' component={ReducerComponent}/>
        <Route path='/todo' component={TodoList}/>
      </div>
      </GlobalProvider>
    </div>
    </Router>
  );
}

export default App;
