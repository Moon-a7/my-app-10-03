import React from 'react'
import { ReactDOM } from 'react-dom'
import AllPostList from './components/AllPostList'
import PostComments from './components/PostComments'
import Form from './components/form/form'
import  {  join ,  dirname  }  from  'path' 
import  {  Low ,  JSONFile  }  from  'lowdb' 
import  {  fileURLToPath  }  from  'url'
import './App.css'


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="views">
          <div className="component-test">test test test</div>
          <div className="all-post">
            <AllPostList></AllPostList>
          </div>
          <div className="post-comments">
            <PostComments></PostComments>
          </div>
          <div className="form">
            <Form></Form>
          </div>
        </div>
      </header>
    </div>
  )
}

export default App
