export const CarForm = ({
  car,
  onChange,
  handleCar,
  selectbox,
  handlePreviewForm,
}) => {
  return (
    <>
      <form onSubmit={handleCar}>
        <h1>Add a Car</h1>
        <label htmlFor="brand">Brand:</label>
        <input
          id="brand"
          type="text"
          value={car.brand}
          required
          minLength="2"
          onChange={(e) => onChange({ ...car, brand: e.target.value })}
        />
        <br />
        <label htmlFor="model">Model:</label>
        <input
          id="model"
          type="text"
          value={car.model}
          required
          minLength="2"
          onChange={(e) => onChange({ ...car, model: e.target.value })}
        />
        <br />
        <label htmlFor="year">Year:</label>
        <select
          id="year"
          required
          value={car.year}
          onChange={(e) => onChange({ ...car, year: e.target.value })}
        >
          {selectbox().map((el, i) => (
            <option key={i} value={el}>
              {el}
            </option>
          ))}
        </select>
        <br />
        <label htmlFor="max_speed">Max Speed:</label>
        <input
          id="max_speed"
          type="number"
          min="20"
          max="300"
          value={car.max_speed}
          onChange={(e) => onChange({ ...car, max_speed: e.target.value })}
        />
        <br />
        <label htmlFor="is_automatic">Automatic:</label>
        <input
          id="is_automatic"
          type="checkbox"
          value={car.is_automatic}
          checked={car.is_automatic === true}
          onChange={() => onChange({ ...car, is_automatic: !car.is_automatic })}
        ></input>
        <br />
        <p>Engine: </p>
        <label htmlFor="diesel">Diesel</label>
        <input
          id="diesel"
          name="engine"
          type="radio"
          checked={car.engine === "diesel"}
          required
          onChange={() => onChange({ ...car, engine: "diesel" })}
        ></input>
        <br />
        <label htmlFor="petrol">Petrol</label>
        <input
          id="petrol"
          name="engine"
          type="radio"
          checked={car.engine === "petrol"}
          onChange={() => onChange({ ...car, engine: "petrol" })}
        ></input>
        <br />
        <label htmlFor="electric">Electric</label>
        <input
          id="electric"
          name="engine"
          type="radio"
          checked={car.engine === "electric"}
          onChange={() => onChange({ ...car, engine: "electric" })}
        ></input>
        <br />
        <label htmlFor="hybrid">Hybrid</label>
        <input
          id="hybrid"
          name="engine"
          type="radio"
          checked={car.engine === "hybrid"}
          onChange={() => onChange({ ...car, engine: "hybrid" })}
        ></input>
        <br />
        <label htmlFor="number_of_doors">Doors:</label>
        <input
          id="number_of_doors"
          type="number"
          value={car.number_of_doors}
          required
          onChange={(e) =>
            onChange({ ...car, number_of_doors: e.target.value })
          }
        ></input>
        <br />
        <br />
        <button type="submit">Submit</button>
      </form>
      <button
        onClick={() =>
          onChange({
            brand: "",
            model: "",
            year: 2022,
            max_speed: 0,
            is_automatic: false,
            engine: "",
            number_of_doors: 0,
          })
        }
      >
        Reset
      </button>
      <button onClick={() => handlePreviewForm(car)}>Preview</button>
    </>
  );
};
