import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
// import { fetchPosts } from "./api.js";
import axios from "axios";

const fetchPosts = async () => {
  const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
  return res.json();
};
export default function Home() {
  const queryClient = useQueryClient();

  const {
    data: postData,
    isError,
    isPending,
  } = useQuery({
    queryKey: ["superheroes"],
    queryFn: async () => {
      const res = await axios("https://jsonplaceholder.typicode.com/posts", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(post),
      });
      return res.json();
    },
  });
  console.log(postData);

  // const newPost = { id: 4, name: "Krrishh", alterEgo: " rohit mehra" };

  // const { mutate, onSuccess } = useMutation({
  //   mutationFn: addPosts,
  //   onSuccess: () => {
  //     queryClient.invalidateQueries({
  //       queryKey: ["superheroes"],
  //     });
  //   },
  // });
  // const submit = () => {
  //   mutate(newPost);
  // };

  return (
    <>
      <h1>Home Page</h1>
      <button onClick={() => handleFetchPosts}>Get Post data</button>
      <button onClick={() => submitPost}>Get Post data</button>
    </>
  );
}
