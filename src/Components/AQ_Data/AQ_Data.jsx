import React from "react";

const AQ_Data = ({ aq_data }) => {
  const formatDate = (str) => {
    // Создать объект Date из строки с помощью конструктора
    var date = new Date(str);

    // Добавить ведущий ноль к числу, если он меньше 10
    function pad(n) {
      return n < 10 ? "0" + n : n;
    }

    // Получить компоненты даты и времени из объекта Date
    var day = pad(date.getDate());
    var month = pad(date.getMonth() + 1); // Месяцы начинаются с 0
    var year = date.getFullYear();
    var hour = pad(date.getHours());
    var minute = pad(date.getMinutes());
    var second = pad(date.getSeconds());

    // Соединить компоненты в одну строку с разделителями
    return (
      day + "." + month + "." + year + " " + hour + ":" + minute + ":" + second
    );
  };

  return (
    <div className="px-2 py-2 mb-4" style={{ background: "#00183A" }}>
      <h4 className="text-light">
        Дата и время замера: {formatDate(aq_data.creationDate)}
      </h4>
      <p className="text-light fs-4">Температура: {aq_data.temperature} °C</p>
      <p className="text-light fs-4">Влажность: {aq_data.humidity} %</p>
    </div>
  );
};

export default AQ_Data;
