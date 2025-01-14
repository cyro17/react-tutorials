import { useState } from "react"
import Todocard from "./Todocard";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {  fetchTodos } from "./api";
import Loader from "./Loader";
import { Link } from "react-router-dom";
import Loading from "./Loading";
import { useTodosData } from "./hooks/useTodosData";


export default function Todo() {
	const [title, setTitle] = useState("");
	
	const onSuccess = (data) => {
		console.log("success", data);
	  };
	  
	  const onError = (error) => {
		console.log("error", error);
	  };

	// const queryclient = useQueryClient();

	const { data, isLoading, isFetching } = useTodosData(onSuccess, onError)
	console.log({isLoading, isFetching});
	if (isLoading) return <div><Loader /></div>;
	if (isFetching) return <div><Loading /></div>

  return (
	  <div>
		  <nav>
			  <Link to="/">Home</Link>	
		  </nav>
			<div>
				<input type="text" value={title} onChange={(e)=>setTitle(e.target.value)} /> 
				<button >Add Todo</button>
		  </div>
		  
		  	<div>
			  todos page
			  { console.log(data)}
			{data?.map((todo, index) => {
				return <Todocard key={index} todo={todo}/>
				// return <li key={todo.id}>{ todo.title}</li>
			})}
			</div>
		</div>
  )
}
