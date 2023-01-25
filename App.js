import './App.css';
import React, { useState } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'

const App = () => {
  const [progress, setProgress] = useState(0)
  const [mode, setmode] = useState('white')
  const [btntext, setbtntext] = useState('Enable Dark mode')
  const ChangeScreenTheme = () => {
    if (mode === 'white') {
      setmode({ mode: '#060916' })
      document.body.style.backgroundColor = '#060916';
      setbtntext('Enable Light mode')
    } else {
      setmode({ mode: 'white' })
      document.body.style.backgroundColor = 'white';
      setbtntext('Enable Dark mode')
    }
  }
  return (
    <div>
      <Router>
        <Navbar ChangeScreenTheme={ChangeScreenTheme} btntext={btntext} />
        <LoadingBar
          height={3}
          color='#f11946'
          progress={progress}
        />
        <Switch>
          <Route exact path="/"><News setProgress={setProgress} key="general" country="in" category="general" /></Route>
          <Route exact path="/business"><News setProgress={setProgress} key="business" country="in" category="business" /></Route>
          <Route exact path="/entertainment"><News setProgress={setProgress} key="entertainment" country="in" category="entertainment" /></Route>
          <Route exact path="/general"><News setProgress={setProgress} key="general" country="in" category="general" /></Route>
          <Route exact path="/health"><News setProgress={setProgress} key="health" country="in" category="health" /></Route>
          <Route exact path="/science"><News setProgress={setProgress} key="science" country="in" category="science" /></Route>
          <Route exact path="/sports"><News setProgress={setProgress} key="sports" country="in" category="sports" /></Route>
          <Route exact path="/technology"><News setProgress={setProgress} key="technology" country="in" category="technology" /></Route>
        </Switch>
      </Router>
    </div>
  )
}

export default App;