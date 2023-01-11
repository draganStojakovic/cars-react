import { Link } from "react-router-dom";

export const CarsList = ({ data }) => {
  return (
    <div>
      <h1>Cars</h1>
      <ul>
        {data &&
          data.map((car) => (
            <li key={car.id}>
              <h3>
                <Link to={`/cars/${car.id}`}>{car.brand}</Link>
              </h3>
              <p>Model: {car.model}</p>
              <p>Year: {car.year}</p>
              <p>Max Speed: {car.max_speed} Km/h</p>
              <p>Automatic: {car.is_automatic ? "Yes" : "No"}</p>
              <p>Engine: {car.engine}</p>
              <p>Doors: {car.number_of_doors}</p>
            </li>
          ))}
      </ul>
    </div>
  );
};
