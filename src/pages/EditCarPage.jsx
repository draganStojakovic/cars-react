import { useParams, useHistory } from "react-router-dom";
import { useState, useEffect } from "react";
import { carService } from "../services/CarService";
import { formFunction } from "../functions/FormFunctions";
import { CarForm } from "../components/CarForm.component";

export const EditCarPage = () => {
  const history = useHistory();
  const { id } = useParams();
  const [car, setCar] = useState({
    brand: "",
    model: "",
    year: 2022,
    max_speed: 0,
    is_automatic: false,
    engine: "",
    number_of_doors: 0,
  });

  const handleEditCar = async (e) => {
    e.preventDefault();
    await carService.edit(id, car);
    history.push(`/cars/${id}`);
  };

  const handleGetCar = async (id) => {
    const { data } = await carService.getSingleCar(Number(id));
    setCar(data);
  };

  useEffect(() => {
    handleGetCar(id);
  }, [id]);

  return (
    <CarForm
      car={car}
      onChange={setCar}
      handleCar={handleEditCar}
      isCreateMode={false}
      handlePreviewForm={formFunction.previewForm}
      selectbox={formFunction.generateSelectBox}
    />
  );
};
