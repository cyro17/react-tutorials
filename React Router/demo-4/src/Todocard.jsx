import { useState } from "react"

export default function Todocard({ todo }) {

    const [checked, setChecked] = useState(todo.completed);
    return (
      <div key={todo.id} >
        {todo.title}
        <input type="checkbox" checked={checked} />
    </div>
  )
}
