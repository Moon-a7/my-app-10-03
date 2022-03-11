import React from 'react'

/* export class App extends React.Component {
  state = {
    posts: [],
  }
} */

function ComponentDidMount() {
  fetch('https://jsonplaceholder.typicode.com/posts/1')
    .then((res) => res.json())
    .then((json) => console.log(json))
  /*.then((json) => this.setState({ posts: json.results }))*/
  return (
    <div>
      <section className="posts-container">
        {/*<main posts={this.state.posts}></main>*/}
      </section>
    </div>
  )
}
export default ComponentDidMount
