import React from 'react'
//import { ReactDOM } from 'react-dom'
import ComponentDidMount from './ComponentDidMount'

function AllPostList() {
  return (
    <div className="wraper">
      <section>
        <ComponentDidMount></ComponentDidMount>
      </section>
      <ul>
        <li>tu będą posty</li>
        <li> pobierz wszystkie posty do tablicy</li>
        <li>i przejdz po nich wyswietlając wszystko</li>
        <li>tu będą posty</li>
        <li> pobierz wszystkie posty do tablicy</li>
        <li>i przejdz po nich wyswietlając wszystko</li>
      </ul>
    </div>
  )
}

export default AllPostList
