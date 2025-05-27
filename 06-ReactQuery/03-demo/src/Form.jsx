import { useAddPost } from "./usePostsData"


export default function Form() {
    const { mutate: addPostMutate,
        isSuccess, isError, isPending, error
    } = useAddPost();

    const handleSubmit = (e) => {
        e.preventDefault();

        const formData = new FormData(e.target);
        const data = {
            id: formData.get('id'),
            userId: formData.get('userId'),
            title: formData.get('title'),
            body: formData.get('body')
        }
        console.log(data);
        const res = addPostMutate(data);
        console.log(res)
    }

    return (
        <div className="container">
            <form onSubmit={handleSubmit}>
                <div className="form-control">
                    <input type="text" name="id" id="name" placeholder="id" />
                </div>
                <div><input type="text" name="userId" placeholder="userId"/></div>
                <div><input type="text" name="title" placeholder="title"/></div>
                <div><input type="text" name="body" placeholder="body" /></div>
                <button type="submit">Submit</button>
                {isSuccess && <div className="text-green-500">Post added successfully!</div>}
                {isError && <div className="text-red-500">Error adding post: {error.message}</div>}
                { isPending && <div className="text-blue-500">Adding post...</div>}
            </form>
        </div>
    )

}
