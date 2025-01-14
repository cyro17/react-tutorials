import Todocard from "./Todocard";
import Loader from "./Loader";
import { Link } from "react-router-dom";
import Loading from "./Loading";
import { useTodosData } from "./hooks/useTodosData";
import NewTodo from "./NewTodo";

export default function Todo() {
	const { data, isLoading, isFetching } = useTodosData()
	console.log({isLoading, isFetching});
	if (isLoading) return <div><Loader /></div>;
	if (isFetching) return <div><Loading /></div>

  return (
	  <div>
		  <nav>
			  <Link to="/">Home</Link>	
		  </nav>
			<NewTodo/>
		  	<div>
			  Todos page
				{data?.map((todo, index) => {
					return <Todocard key={index} todo={todo}/>
					// return <li key={todo.id}>{ todo.title}</li>
				})}
			</div>
		</div>
  )
}
