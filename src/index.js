import React from "react"
import ReactDOM from "react-dom"

// this is stateless functional component
// always use return to return JSX
// use capital letter for function name to let React know that this function is Component


// Verion 1
function BookList() {
  return(
    <section>
      <Book/>
      
    </section>
  ) 
}

const Book = () => {
  return <article>
    <Image />
    <Title/>
    <Author/>
  </article>
}

const Image = () => <img src = "https://m.media-amazon.com/images/I/51h3GkZzvnL._AC_SL1000_.jpg" alt = "" width="300" height="350"  />

const Title = () => <h1>Fire HD TV</h1>

const Author = () => <h4>Amazon</h4>

// I need to use self closing tag "</>" otherwise it won't work
ReactDOM.render(<BookList />, document.getElementById('root'))


