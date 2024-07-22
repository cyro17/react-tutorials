/* eslint-disable react/prop-types */
import { GoTrashcan } from "react-icons/go";
import Button from "./Button";
import ExpandablePanel from "./ExpandablePanel";
import { useRemoveAlbumMutation } from "../store";

function AlbumListItem({ album }) {
  const [removeFn, results] = useRemoveAlbumMutation();

  const handleRemoveAlbum = () => {
    removeFn(album);
  };

  const header = (
    <>
      <Button
        loading={results.isLoading}
        className="mr-2"
        onClick={handleRemoveAlbum}
      >
        <GoTrashcan />
      </Button>
      {album.title}
    </>
  );
  return (
    <ExpandablePanel key={album.id} header={header}>
      List of photos
    </ExpandablePanel>
  );
}

export default AlbumListItem;
