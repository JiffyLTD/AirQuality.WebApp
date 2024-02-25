import axios from "axios";
import { Endpoint, Headers } from "./Api";

export default class StationDataApi{
    static getStationDataLast = async (stationId: any) => {
        try {
            const response = await axios.post(Endpoint,
                {
                    query: `query{ stationDataLast(stationId: "${stationId}" ){ 
                        temperature,
                        humidity,
                        pressure, 
                        co, 
                        pm_1, 
                        pm_2_5, 
                        pm_10, 
                        createdAt
                    } }`
                },
                {
                    headers: Headers
                }
            );

            if(response.data.errors){
                return -1;
            }

            return response.data.data.stationDataLast;
        } catch (error) {
            return -1;
        }
    }
}