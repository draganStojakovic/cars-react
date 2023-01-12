import { useState, useEffect } from "react";
import { carService } from "../services/CarService";
import { CarsList } from "../components/CarsList.component";
import { useHistory } from "react-router-dom";

export const CarsPage = () => {
  const [cars, setCars] = useState([]);
  const history = useHistory();

  const handleGetCars = async () => {
    const { data } = await carService.getAll();
    setCars(data);
  };

  const redirect = (id) => {
    history.push(`/edit/${id}`);
  };

  const deleteCar = async (id) => {
    await carService.delete(Number(id));
    setCars(cars.filter((car) => id !== car.id));
  };

  useEffect(() => {
    handleGetCars();
  }, []);

  return (
    <CarsList
      data={cars}
      handleRedirect={redirect}
      handleDeleteCars={deleteCar}
    />
  );
};
