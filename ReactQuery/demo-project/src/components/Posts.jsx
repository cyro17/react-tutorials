import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { addPost, fetchPosts, fetchTags } from "../api/api";

function Posts() {
  const {
    data: postData,
    isLoading,
    status,
    isError,
    error,
  } = useQuery({
    queryKey: ["posts"],
    queryFn: fetchPosts,
  });

  const { data: tagsData } = useQuery({
    queryKey: ["tags"],
    queryFn: fetchTags,
  });

  const queryClient = useQueryClient();

  const {
    mutate,
    isError: isPostError,
    error: postError,
    isPending,
    reset,
  } = useMutation({
    mutationFn: addPost,
    onSuccess: (data, variables, context) => {
      queryClient.invalidateQueries({
        queryKey: ["posts"],
        exact: true,
      });
    },
    onError: (error, variables, context) => {},
  });

  // console.log(postData, status, isLoading);

  function handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const title = formData.get("title");
    const tags = Array.from(formData.keys()).filter(
      (key) => formData.get(key) === "on"
    );

    if (!title || !tags) return;

    mutate({ id: postData.length + 1, title, tags });
    console.log(title, tags);
    e.target.reset();
  }

  return (
    <div className="containter">
      <form onSubmit={handleSubmit} className="form">
        <input
          type="text"
          placeholder="enter your post"
          className="postBox"
          name="title"
        />
        <div className="tags">
          {tagsData?.map((tag) => {
            return (
              <div className="tag" key={tag}>
                <input type="checkbox" name={tag} id={tag} />
                <label htmlFor={tag}>{tag}</label>
              </div>
            );
          })}
          <button className="button">Submit</button>
        </div>
      </form>

      {isLoading && isPending && <p>Loading...</p>}
      {isError && <p>{error.message}</p>}
      {isPostError && <p onClick={() => reset()}>Unable to Post</p>}

      {!isLoading &&
        status === "success" &&
        postData.map((post) => {
          return (
            <div key={post.id} className="post">
              <div>{post.title}</div>
              {post.tags.map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>
          );
        })}
    </div>
  );
}

export default Posts;
