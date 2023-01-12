import ApiService from "./ApiService";

class CarService extends ApiService {
  async getAll() {
    return await this.client.get("/cars");
  }
  async getSingleCar(id) {
    return await this.client.get(`/cars/${id}`);
  }
  async add(car) {
    await this.client.post("/cars", car);
  }
  async edit(id, car) {
    await this.client.put(`/cars/${id}`, car);
  }
}

export const carService = new CarService();
