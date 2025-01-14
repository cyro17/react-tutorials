
import { useParams } from "react-router-dom"
import { useUserData } from "./hooks/useUserData";

export default function User() {
    const { userId } = useParams();
    const { data, error, isLoading, isError } = useUserData(userId);
    return (
      
    <div>User</div>
  )
}
