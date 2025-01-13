import { Link, useLoaderData } from "react-router-dom";

export default function Home(){
  const data =  useLoaderData();
  const arr = [];
  for(let i of data){
    arr.push(i.title)
  }
  return (
    <>
      <div>
        <Link to="/order/new">New Order</Link>
        <Link to="/todos">Todos</Link>
        
      </div>

      <div>
            Items List
        <ul>
          {arr.map((title, index)=>(
            <li key={index}>{title}</li>
          ))}
        </ul>
      </div>
    </>
  )
}

export async function fetchPosts() {
    const res = await fetch('https://fakestoreapi.com/products');
    const data = await res.json();
    return data;
}
  