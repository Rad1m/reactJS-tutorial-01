import React from 'react';

const Book = ({img, title, author}) => {
  // const {img, title, author} = props // as same as putting it directly into: const Book = ({img, title, author})
  const clickHandler = () => {
    alert(title)
  }

  const complexExample = (author) => {
    console.log(author)
  }

  return (
  <article className="book" onMouseOver={()=>{
    console.log(title)
  }}>
    <img src = {img} alt = "" />
    <h1 onClick={() => console.log(title)}>
      {title.toUpperCase()}
      </h1>
    <h4>From: {author}</h4>
    <button type = "button" onClick={clickHandler}>Click this button</button>
    <button type = "button" onClick={() => complexExample(author)}>More complex example</button>
  </article>
  )
}

export default Book;
