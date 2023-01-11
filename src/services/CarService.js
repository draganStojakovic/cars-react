import ApiService from "./ApiService";

class CarService extends ApiService {
  async getAll() {
    return await this.client.get("/cars");
  }
  async getSingleCar(id) {
    return await this.client.get(`/cars/${id}`);
  }
}

export const carService = new CarService();
