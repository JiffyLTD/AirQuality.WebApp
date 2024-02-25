import axios from "axios";
import { Endpoint, Headers } from "./Api";
import Helper from "../helpers/Helper";

export default class StationApi{
    static getStationsCount = async () => {
        try {
            let dateNow = Helper.getDateNow();

            const response = await axios.post(Endpoint,
                {
                    query: `query{ stations(where: {updatedAt: {gt: "${dateNow}" }}){ nodes{ id }} }`
                },
                {
                    headers: Headers
                }
            );

            if(response.data.errors){
                return -1;
            }

            return response.data.data.stations.nodes.length;
        } catch (error) {
            return -1;
        }
    }

    static getStationsWithLocation = async () => {
        try {
            const response = await axios.post(Endpoint,
                {
                    query: `query{ stations(where: {location: { ncontains: "Invalid" }}){ nodes{ id, location }} }`
                },
                {
                    headers: Headers
                }
            );

            if(response.data.errors){
                return -1;
            }

            return response.data.data.stations.nodes;
        } catch (error) {
            return -1;
        }
    }
}