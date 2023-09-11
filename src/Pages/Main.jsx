import React from "react";
import { Container } from "react-bootstrap";
import AQ_Data from "../Components/AQ_Data/AQ_Data";

const Main = () => {
  const data = [
    {
      id: 1,
      creationDate: "02.02.2023 18:34:43",
      temperature: 25.5,
      humidity: 45.4,
    },
    {
        id: 2,
        creationDate: "02.02.2023 18:35:43",
        temperature: 26.5,
        humidity: 47.4,
      },
  ];

  return (
    <Container className="mt-5 py-2" style={{ background: "#053566" }}>
      <h3 className="text-light">Главная страница</h3>
      <hr className="text-light" />
      <Container className="py-2">
        {data !== null ? (
          data.map((data) => <AQ_Data key={data.id} aq_data={data} />)
        ) : (
          <div className="px-2 py-2" style={{ background: "#00183A" }}>
            <h4 className="text-light">Замеров еще не происходило</h4>
          </div>
        )}
      </Container>
    </Container>
  );
};

export default Main;
