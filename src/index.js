import React from "react"
import ReactDOM from "react-dom"
import "./index.css" // this means that file is in same folder

// for stateless functional component (doesn't have a state)
// always use return to return JSX
// use capital letter for function name to let React know that this function is a Component

// Setup Variables
const books = [
      {
        id:1,
        img: "https://m.media-amazon.com/images/I/51h3GkZzvnL._AC_SL1000_.jpg",
        title: "Fire HD TV",
        author: "Amazon"
      },
      {
        id:2,
        img: "https://m.media-amazon.com/images/I/51nd43g96sL._SL1000_.jpg",
        title: "Ring Door Bell",
        author: "Amazon"
      },
      {
        id:3,
        img: "https://m.media-amazon.com/images/I/51fm5Nh4PKL._AC_SL1200_.jpg",
        title: "Food Processor",
        author: "Kenwood"
      },
]


// main function which is containing child elements (functions)
function BookList() {
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

const Book = (props) => {
  const {img, title, author} = props // as same as putting it directly into: const Book = ({img, title, author})
  return (
  <article className="book">
    <img src = {img} alt = "" />
    <h1>{title.toUpperCase()}</h1>
    <h4>From: {author}</h4>
  </article>
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


