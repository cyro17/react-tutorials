
import { useParams } from "react-router-dom"
import { useUserData } from "./hooks/useUserData";
import Loading from "./Loading";
import Loader from "./Loader";

export default function User() {
    function onSuccess(data) {
      console.log(data);
    } 
    
    function onError(error) {
      console.log(error)
    }

    const { userId } = useParams();
    const { data, error, isLoading, isError, isFetching } = useUserData(onSuccess, onError,  userId);

	if (isLoading) return <Loader />;
	if (isFetching) return <Loading />
	if (isError) return <div>Error: {error.message}</div>;
	
    return (
			<div>
				<span>{data.id}</span>
				<span>{ data.title}</span>
			</div>
  )
}
