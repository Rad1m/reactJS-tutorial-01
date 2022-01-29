import React from "react"
import ReactDOM from "react-dom"
import "./index.css" // this means that file is in same folder

// this is stateless functional component
// always use return to return JSX
// use capital letter for function name to let React know that this function is Component

// main function which is containing child elements (functions)
function BookList() {
  return(
    <section className="booklist">
      <Book/>
    </section>
  ) 
}

const author = "Amazon" // can be inside or outside of Book function
const Book = () => {
  const title = "Fire HD TV"
  return <article className="book">
    <img src = "https://m.media-amazon.com/images/I/51h3GkZzvnL._AC_SL1000_.jpg" alt = "" />
    <h1>{title.toUpperCase()}</h1>
    <h4>{author}</h4>
  </article>
}

//styles can be in css file or they can be directly here
//However the syntax is different becuase of using JavaScript
//Thats why we use {{}} and all values are in ""
// "" or '' is same
// priority is given here so it will overwrite settings from css file
//const Author = () => <h4 style = {{color:"#617d98", fontSize:"0.75rem", marginTop: "0.25rem"}}>Amazon</h4>

// I need to use self closing tag "</>" otherwise it won't work
ReactDOM.render(<BookList />, document.getElementById('root'))


