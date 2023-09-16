import { IWSData } from "./IWSData";

export interface IResponseFromServer{
    dtoModel: IWSData[],
    message: string
}