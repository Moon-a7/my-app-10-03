import React from 'react'
import { ReactDOM } from 'react-dom'
import AllPostList from './components/AllPostList'
import './App.css'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="views">
          <div className="all-post">
            {' '}
            <AllPostList></AllPostList>
          </div>
          <div className="post-comments">post + comments</div>
          <div className="form">form add new comments</div>
        </div>
      </header>
    </div>
  )
}

export default App
