import { Guid } from "guid-typescript";

export interface IWSData{
    id: Guid,
    temperature: number,
    humidity: number,
    pm_1: number,
    pm2_5: number,
    pm_10: number,
    co: number,
    creationDate: Date
}