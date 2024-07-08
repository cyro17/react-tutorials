import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../store/thunks/fetchUsers";
import Skeleton from "./Skeleton";

function UsersList() {
  const dispatch = useDispatch();

  const { isLoading, data, error } = useSelector((state) => {
    return state.users;
  });
  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  if (isLoading) return <Skeleton times={6} className="h-10 w-full" />;

  if (error) return <div>Error fetching data</div>;

  return <div>{data.length}</div>;
}

export default UsersList;
