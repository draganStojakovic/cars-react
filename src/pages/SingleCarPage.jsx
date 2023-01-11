import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { SingleCarData } from "../components/SingleCarData.component";
import { carService } from "../services/CarService";

export const SingleCarPage = () => {
  const { id } = useParams();
  const [car, setCar] = useState([]);

  const handleGetSingleCar = async (id) => {
    const { data } = await carService.getSingleCar(Number(id));
    setCar(data);
  };

  useEffect(() => {
    handleGetSingleCar(id);
  }, [id]);

  return <SingleCarData data={car} />;
};
