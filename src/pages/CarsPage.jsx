import { useState, useEffect } from "react";
import { carService } from "../services/CarService";
import { CarsTable } from "../components/CarsTable.component";

export const CarsPage = () => {
  const [cars, setCars] = useState([]);

  const handleGetCars = async () => {
    const { data } = await carService.getAll();
    setCars(data);
  };

  useEffect(() => {
    handleGetCars();
  }, []);

  return <CarsTable data={cars} />;
};
