import React, { useEffect, useState } from "react";
import { Container, Spinner } from "react-bootstrap";
import AQ_Data from "../Components/AQ_Data/AQ_Data";
import { ApiService } from "../Components/API/ApiService";

const Main = () => {
  const [wsData, setWsData] = useState([]);
  const [isLoad, setIsLoad] = useState(false);
  const [networkError, setNetworkError] = useState('');

  const fetchData = async () => {
    setIsLoad(true);
    try {
      let response = await ApiService.getAll();
      setWsData(response.data.dtoModel);
    } catch (error) {
      setNetworkError(error.message);
    }
    setIsLoad(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Container className="mt-5 py-2" style={{ background: "#053566" }}>
      <h3 className="text-light">Главная страница</h3>
      <hr className="text-light" />
      <Container className="py-2">
        {isLoad ? (
          <div className="text-center">
            <Spinner animation="border" variant="light" />
            <br />
            <span className="text-danger">{networkError}</span>
          </div>
        ) : wsData !== null ? (
          wsData.map((data) => <AQ_Data key={data.id} aq_data={data} />)
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
