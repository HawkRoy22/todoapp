import React from "react"

function TodoItem(props) {
  return(
    <li>
      <input 
        type="checkbox"
        onChange={() => console.log("clicked")}
      /> 
      {props.todo.title}
    </li>
  )
}

export default TodoItem