import './App.css';
// import React, { Component } from 'react'
import React, { useState } from 'react'
import Navbar from './Components/Navbar';
import News from './Components/News';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import LoadingBar from 'react-top-loading-bar'



// export default class App extends Component {
const App = () => {

  // state={progress : 0}
  const [progress, setProgress]=useState(0);
  // setProgress = (progress) => {
  //   setState({progress: progress})
  // }

  // render() {
    return (
      <div>
        <Router>
          <Navbar/>
          <LoadingBar
        color='#f11946'
        progress={progress}//this.state.progress
        />
          <Switch>
            <Route exact path="/buisiness"><News setProgress={setProgress}  country="us" pageSize={12} category="buisiness" key={"buisiness"}/></Route>
            <Route exact path="/entertainment"><News setProgress={setProgress}  country="us" pageSize={12} category="entertainment" key={"entertainment"}/></Route>
            <Route exact path="/"><News setProgress={setProgress}  country="us" pageSize={12} category="general" key={"general"}/></Route>
            <Route exact path="/health"><News setProgress={setProgress}  country="us" pageSize={12} category="health" key={"health"}/></Route>
            <Route exact path="/science"><News setProgress={setProgress}  country="us" pageSize={12} category="science" key={"science"}/></Route>
            <Route exact path="/sports"><News setProgress={setProgress}  country="us" pageSize={12} category="sports" key={"sports"}/></Route>
            <Route exact path="/technology"><News setProgress={setProgress}  country="us" pageSize={12} category="technology" key={"technology"}/></Route>
          </Switch>
        </Router>
      </div>
    )
  // }
}

export default App