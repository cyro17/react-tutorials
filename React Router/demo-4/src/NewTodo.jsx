
import { useState } from "react"

import { useAddTodoData } from "./hooks/useTodosData";


export default function NewTodo() {
    const [title, setTitle] = useState("");

    const { mutate: addTodo, isSuccess } = useAddTodoData();
    // console.log(mutation);
    const handleClick = () => {
            console.log("sending post request");
            addTodo({ id: new Date(), title: title, completed: false });
    }
    if(isSuccess) console.log("Todo added successfully");    
    return (
        <div>
            <input type="text" name={title} onChange={(e) => setTitle(e.target.value)} />
            <button onClick={handleClick}>Add Todo</button>
            
        </div>
  )
}
