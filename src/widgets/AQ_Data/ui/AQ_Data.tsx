import React from "react";
import { IWSData } from "./../../../models/IWSData";

const AQ_Data = ({ id, temperature, humidity, creationDate }: IWSData) => {
  return (
    <div className="px-2 py-2 mb-4" style={{ background: "#00183A" }}>
      <h4 className="text-light">
        Дата и время замера: {creationDate.toString()}
      </h4>
      <p className="text-light fs-4">Температура: {temperature} °C</p>
      <p className="text-light fs-4">Влажность: {humidity} %</p>
    </div>
  );
};

export default AQ_Data;
