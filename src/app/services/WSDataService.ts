import axios, { AxiosResponse } from "axios";
import { IResponseFromServer } from "../../models/IResponseFromServer";

export default class WSDataService {
    static async getAll(): Promise<AxiosResponse<IResponseFromServer>>{
        return axios.get<IResponseFromServer>('https://192.168.50.170:4430/api/wsd/getAll');
    }
}