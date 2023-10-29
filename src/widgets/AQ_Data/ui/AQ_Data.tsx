import React from "react";
import { IWSData } from "./../../../models/IWSData";

const AQ_Data = ({ id, temperature, humidity, pm_1, pm2_5, pm_10, co, creationDate }: IWSData) => {
  const getDateAndTime = (creationDate: String) => {
    let date: Date = new Date(creationDate.toString());

    let formattedDate: string = date.toLocaleString("ru-RU");

    return formattedDate;
  }

  return (
    <div className="px-2 py-2 mb-4" style={{ background: "#00183A" }}>
      <h4 className="text-light">
        Дата и время замера: {getDateAndTime(creationDate.toString())}
      </h4>
      <p className="text-light fs-4">Температура: {temperature} °C</p>
      <p className="text-light fs-4">Влажность: {humidity} %</p>
      <p className="text-light fs-4">PM 1: {pm_1} мкг/м³</p>
      <p className="text-light fs-4">PM 2.5: {pm2_5} мкг/м³</p>
      <p className="text-light fs-4">PM 10: {pm_10} мкг/м³</p>
      <p className="text-light fs-4">CO: {co} ppm</p>
    </div>
  );
};

export default AQ_Data;
