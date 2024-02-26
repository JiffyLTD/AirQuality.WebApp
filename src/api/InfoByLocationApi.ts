import axios from "axios";
import { Endpoint, Headers } from "./Api";

export default class StationApi{
    static getInfoByLocation = async (stationId: any) => {
        try {
            const response = await axios.post(Endpoint,
                {
                    query: `query{ infoByLocation(stationId: "${stationId}" ){ avgPm_1, avgPm_2_5, avgPm_10 } }`
                },
                {
                    headers: Headers
                }
            );

            if(response.data.errors){
                return -1;
            }

            return response.data.data.infoByLocation;
        } catch (error) {
            return -1;
        }
    }

    static getInfoByLocationFull = async (stationId: any) => {
        try {
            const response = await axios.post(Endpoint,
                {
                    query: `query{ infoByLocation(stationId: "${stationId}" ){ 
                        avgPm_1,
                        avgPm_2_5,
                        avgPm_10,
                        aiAdvices,
                        avgTemperature,
                        avgHumidity,
                        avgCo,
                        avgPressure
                     } }`
                },
                {
                    headers: Headers
                }
            );

            if(response.data.errors){
                return -1;
            }

            return response.data.data.infoByLocation;
        } catch (error) {
            return -1;
        }
    }
}