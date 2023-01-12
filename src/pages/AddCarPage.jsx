import { useState } from "react";
import { carService } from "../services/CarService";
import { CarForm } from "../components/CarForm.component";
import { formFunction } from "../functions/FormFunctions";
import { useHistory } from "react-router-dom";

export const AddCarPage = () => {
  const history = useHistory();
  const [car, setCar] = useState({
    brand: "",
    model: "",
    year: 2022,
    max_speed: 0,
    is_automatic: false,
    engine: "",
    number_of_doors: 0,
  });

  const handleAddCar = async (e) => {
    e.preventDefault();
    if (
      !car.brand ||
      !car.model ||
      !car.year ||
      !car.engine ||
      !car.number_of_doors
    ) {
      alert("One or more field is blank.");
      return;
    }
    await carService.add(car);
    history.push('/cars');
  };

  return (
    <CarForm
      car={car}
      onChange={setCar}
      handleCar={handleAddCar}
      selectbox={formFunction.generateSelectBox}
      handlePreviewForm={formFunction.previewForm}
    />
  );
};
