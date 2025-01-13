import { useState } from "react"
import Todocard from "./Todocard";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {  fetchTodos } from "./api";


export default function Todo() {
	const [title, setTitle] = useState("");

	// const queryclient = useQueryClient();

	const { data, isLoading } = useQuery({
		queryKey: ["todos"],
		queryFn: fetchTodos,
		cacheTime: 1000,
		staleTime: Infinity
		
	});
	const todos = data?.data;
	console.log("todos", todos);

	if (isLoading) return <div>Loading...</div>;
	
	// async function handleClick() {
	// 	try {
	// 		await addTodoMutation({ title });
	// 		setTitle("")
			
	// 	} catch (error) {
	// 		console.error(error);	
	// 	}
	// }

  return (
		<div>
			<div>
				<input type="text" value={title} onChange={(e)=>setTitle(e.target.value)} /> 
				<button >Add Todo</button>
			</div>
		  	<div>
		  	todos page
			{todos?.map((todo) => {
				return <Todocard key={todo.id} todo={todo}/>
				// return <li key={todo.id}>{ todo.title}</li>
			})}
			</div>
		</div>
  )
}
