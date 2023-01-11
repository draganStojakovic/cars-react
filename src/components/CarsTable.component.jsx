export const CarsTable = ({ data }) => {
  return (
    <div>
      <h1>Cars</h1>
      {data ? (
        <table>
          <thead>
            <tr>
              <th>Brand</th>
              <th>Model</th>
              <th>Year</th>
              <th>Max Speed</th>
              <th>Automatic</th>
              <th>Engine</th>
              <th>Doors</th>
            </tr>
          </thead>
          <tbody>
            {data.map((car) => (
              <tr key={car.id}>
                <td>{car.brand}</td>
                <td>{car.model}</td>
                <td>{car.year}</td>
                <td>{car.max_speed} Km/h</td>
                <td>{car.is_automatic ? "Yes" : "No"}</td>
                <td>{car.engine}</td>
                <td>{car.number_of_doors}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>no data</p>
      )}
    </div>
  );
};
