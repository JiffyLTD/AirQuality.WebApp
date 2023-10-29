import React, { useState, useEffect, Suspense } from 'react';
import { Container } from "react-bootstrap";
import WSDataService from '../../../app/services/WSDataService';
import { IWSData } from './../../../models/IWSData';
import { AQ_Data } from '../../../widgets/AQ_Data';
import { PageLoader } from '../../../widgets/PageLoader';

const MainPage = () => {
  const [wsData, setWsData] = useState<IWSData[]>([]);
  const [networkError, setNetworkError] = useState('');

  const fetchData = async () => {
    try {
      let response = await WSDataService.getAll();
      setWsData(response.data.dtoModel);
    } catch (error) {
      setNetworkError('Network error');
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Container className="mt-5 py-2" style={{ background: "#053566" }}>
      <h3 className="text-light">Главная страница</h3>
      <hr className="text-light" />
      <Container className="py-2">
      <div className="text-center">
          <span className="text-danger">{networkError}</span>
      </div>
        {wsData.length == 0 ?
          <div className="px-2 py-2 text-center" style={{ background: "#00183A" }}>
            <h4 className="text-light">Замеров еще не происходило</h4>
          </div>
          :
          <Suspense fallback={<PageLoader />}>
            {
              wsData.map( (data) => (
                <AQ_Data 
                  id={data.id}
                  temperature={data.temperature}
                  humidity={data.humidity}
                  pm_1={data.pm_1}
                  pm2_5={data.pm2_5}
                  pm_10={data.pm_10}
                  co={data.co}
                  creationDate={data.creationDate}
                />
              ))
            }
          </Suspense>
        }
      </Container>
    </Container>
  )
}

export default MainPage