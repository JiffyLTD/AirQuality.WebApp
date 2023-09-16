import { Guid } from "guid-typescript";

export interface IWSData{
    id: Guid,
    temperature: number,
    humidity: number,
    creationDate: Date
}