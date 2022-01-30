import React from "react"
import ReactDOM from "react-dom"
import "./index.css" // "./" this means the file is in same folder, extension is needed for css file

// for stateless functional component (doesn't have a state)
// always use return to return JSX
// use capital letter for function name to let React know that this function is a Component

// Import Variables
import {books} from './books' // no need for file extension as I import JavaScript

// Import component
import Book from './Book'

// just example of import
import {greeting} from './testing/testing'


// main function which is containing child elements (functions)
function BookList() {
  console.log(greeting)
  return(
    <section className="booklist">
      {books.map((book, index)=>{
        return (
          <Book key={book.id} {...book}></Book> // using ... is using spread operator, we use as many dost as we have properties
        )
      })}
    </section>
  )
}

//styles can be in css file or they can be directly here
//However the syntax is different becuase of using JavaScript
//Thats why we use {{}} and all values are in ""
// "" or '' is same
// priority is given here so it will overwrite settings from css file
//const Author = () => <h4 style = {{color:"#617d98", fontSize:"0.75rem", marginTop: "0.25rem"}}>Amazon</h4>

// I need to use self closing tag "</>" otherwise it won't work
ReactDOM.render(<BookList />, document.getElementById('root'))


