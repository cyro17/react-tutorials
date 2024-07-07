import { useDispatch, useSelector } from "react-redux";
import { changeSearchTerm } from "../store/slices/carsSlice";

export default function CarSearch() {
  const dispatch = useDispatch();

  const searchTerm = useSelector((state) => state.cars.cars);

  const handleChangeSearch = function (event) {
    dispatch(changeSearchTerm(event.target.value));
  };
  return (
    <div className="list-header">
      <h3>My Cars</h3>
      <div>
        <label>Search</label>
        <input
          type="text"
          className="input"
          value={searchTerm}
          onChange={handleChangeSearch}
        />
      </div>
    </div>
  );
}
