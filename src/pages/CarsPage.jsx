import { useState, useEffect } from "react";
import { carService } from "../services/CarService";
import { CarsList } from "../components/CarsList.component";

export const CarsPage = () => {
  const [cars, setCars] = useState([]);

  const handleGetCars = async () => {
    const { data } = await carService.getAll();
    setCars(data);
  };

  useEffect(() => {
    handleGetCars();
  }, []);

  return <CarsList data={cars} />;
};
