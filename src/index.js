import React from "react"
import ReactDOM from "react-dom"

// this is stateless functional component
// always use return to return JSX
// use capital letter for function name to let React know that this function is Component


// Verion 1
function Greeting() {
  return(
    <div>
      <Person />
      <Message />
    </div>
  ) 
}

// Version 2, can get very compicated with more nested components
// const Greeting = () => {
//   return React.createElement("h1",{},"hello world")
// }

const Person = () => {
  return (
    <div>
      <h2>Radim Simanek</h2>
      <h4>from CZech Republic</h4>
    </div>
  )

} 

const Message = () => {
  return <p>
    This is my message
  </p>
}

// I need to use self closing tag "</>"
ReactDOM.render(<Greeting />, document.getElementById('root'))


