import React from 'react'
// import { BrowserRouter, Switch, Route } from 'react-router-dom'

import { Navbar } from './components/Navbar'
// import { About } from './pages/About'
import { Home } from './pages/Home'

const App: React.FC = () => {
  return (
    <div>
      <Navbar />
      <div className="container">
        <Home />
        {/* <Switch>
          <Route path="/" component={Home} />
          <Route path="/about" component={About} />
        </Switch> */}
      </div>
    </div>
  )
}

export default App
