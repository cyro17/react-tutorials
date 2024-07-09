/* eslint-disable react/prop-types */
import { useFetchAlbumsQuery } from "../store";

function AlbumsList({ user }) {
  const { data, error, isLoading } = useFetchAlbumsQuery();
  console.log(data, error, isLoading);
  return <div>Albums {user.name}</div>;
}

export default AlbumsList;
