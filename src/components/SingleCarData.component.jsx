import { Link } from "react-router-dom";

export const SingleCarData = ({ data }) => {
  return (
    <div>
      <h1>{data.brand}</h1>
      <p>Model: {data.model}</p>
      <p>Year: {data.year}</p>
      <p>Max Speed: {data.max_speed} Km/h</p>
      <p>Automatic: {data.is_automatic ? "Yes" : "No"}</p>
      <p>Engine: {data.engine}</p>
      <p>Doors: {data.number_of_doors}</p>
      <p>
        <Link to="/cars">Return Back</Link>
      </p>
    </div>
  );
};
