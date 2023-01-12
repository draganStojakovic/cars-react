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
  async delete(id) {
    await this.client.delete(`/cars/${id}`);
  }
  // async pagination(page, perPage) {
  //   return await this.client.get(`/cars/?page=${page}&per_page=${perPage}`);
  // }
  // async search(term) {
  //   return await this.client.get(`/posts?filter={"include":{"brand":"term"}}`);
  // }
}

export const carService = new CarService();
