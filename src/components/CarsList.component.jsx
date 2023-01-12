import { Link } from "react-router-dom";

export const CarsList = ({
  data,
  handleRedirect,
  handleDeleteCars,
  onSearch,
  search,
}) => {
  return (
    <div>
      <input
        type="text"
        placeholder="search"
        value={search}
        onChange={onSearch}
      />
      <h1>Cars</h1>
      <ul>
        {!search &&
          data.map(
            (car) =>
              car && (
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
                  <button onClick={() => handleRedirect(car.id)}>Edit</button>
                  <button onClick={() => handleDeleteCars(car.id)}>
                    Delete
                  </button>
                </li>
              )
          )}
        {search &&
          data
            .filter((car) => car.brand.includes(search))
            .map(
              (car) =>
                car && (
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
                    <button onClick={() => handleRedirect(car.id)}>Edit</button>
                    <button onClick={() => handleDeleteCars(car.id)}>
                      Delete
                    </button>
                  </li>
                )
            )}
      </ul>
    </div>
  );
};
