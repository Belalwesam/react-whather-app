import { useState, useRef, useContext } from "react";
import { WheatherContext } from "../context/WheatherContext";
const Search = () => {
  const { search } = useContext(WheatherContext);
  const [error, setError] = useState(false);
  let queryRef = useRef(null);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (queryRef.current.value === "") {
      setError(true);
    } else {
      search(queryRef.current.value);
    }
  };
  return (
    <form action="" onSubmit={(e) => handleSubmit(e)}>
      <div className="form-group">
        <input
          ref={queryRef}
          type="text"
          placeholder="Search for a city ..."
          className="w-100"
        />
        <small className={`text-danger ${error ? "" : "d-none"}`}>
          *Please fill in the city name
        </small>
      </div>
      <div className="form-group text-center">
        <button type="submit">Search</button>
      </div>
    </form>
  );
};

export default Search;
