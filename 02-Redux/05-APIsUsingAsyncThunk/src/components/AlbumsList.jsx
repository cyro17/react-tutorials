/* eslint-disable react/prop-types */
import Skeleton from "./Skeleton";
import { useAddAlbumMutation, useFetchAlbumsQuery } from "../store";

import Button from "./Button";

import AlbumListItem from "./AlbumListItem";

function AlbumsList({ user }) {
  const { data, error, isFetching } = useFetchAlbumsQuery(user);
  const [addAlbum, results] = useAddAlbumMutation();

  const handleAddAlbum = () => {
    addAlbum(user);
  };

  let content;
  if (isFetching) {
    content = <Skeleton times={3} />;
  } else if (error) {
    content = <div>Error loading albums.</div>;
  } else {
    content = data?.map((album) => {
      return <AlbumListItem key={album.id} album={album} />;
    });
  }

  return (
    <div>
      <div className="m-2 flex flex-row items-center justify-between">
        <h3 className="text-lg font-bold">Albums for {user.name}</h3>
      </div>
      <Button loading={results.isFetching} onClick={handleAddAlbum}>
        + Add Album
      </Button>
      {content}
    </div>
  );
}

export default AlbumsList;
