import axios from "axios";

export class ApiService {
    
  static async getAll() {
    const response = await axios.get(
      "https://192.168.50.170:4430/api/wsd/getAll"
    );

    return response;
  }
}
