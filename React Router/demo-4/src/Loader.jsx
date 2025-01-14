
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';


export default function Loader() {
  

  return (
    <div>
      {/* <Button onClick={handleOpen}></Button> */}
      <Backdrop
        sx={(theme) => ({ color: '#fff', zIndex: theme.zIndex.drawer + 1 })}
        open={ true}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
    </div>
  );
}
