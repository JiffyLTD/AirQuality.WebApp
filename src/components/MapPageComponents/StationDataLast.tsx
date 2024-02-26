import React, { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Helper from '../../helpers/Helper'
import InfoByLocationApi from "../../api/InfoByLocationApi";

const StationDataLast = (stationDataLast:any) => {
  const dateTime = Helper.formatDateToCustomString(stationDataLast.stationDataLast.createdAt);
  const [stationDataInfo, setStationDataInfo] = useState<any>({});

  useEffect(() => {
    const getInfo = async () => {
      setStationDataInfo(await InfoByLocationApi.getInfoByLocationFull(stationDataLast.stationDataLast.stationId));
    }
    getInfo();
  }, [stationDataLast]);

  const isOnline = Helper.stationIsOnline(stationDataLast.stationDataLast.createdAt);

  return (
    <Container className='text-light text-center mt-3'>
      {isOnline ?
        <div className='d-flex'>
          <h6 className="text-light text-start">
            Станция Online 
          </h6>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="green" className="bi bi-circle-fill ms-2" viewBox="0 0 16 16">
            <circle cx="8" cy="8" r="8"/>
          </svg>
        </div>
        :
        <div className='d-flex'>
          <h6 className="text-light text-start">
            Станция Offline 
          </h6>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="red" className="bi bi-circle-fill ms-2" viewBox="0 0 16 16">
            <circle cx="8" cy="8" r="8"/>
          </svg>
        </div>
      }
      <h5 className="text-light text-start">Последний замер</h5>
      <hr className="text-light" />
      <Row>
        <Col className='fs-4'>Температура: {stationDataLast.stationDataLast.temperature} &#176;C</Col>
        <Col className='fs-4'>PM1: {stationDataLast.stationDataLast.pm_1} мкг/м³</Col>
        <Col className='fs-4'>СО: {stationDataLast.stationDataLast.co} ppm</Col>
      </Row>
      <Row>
        <Col className='fs-4'>Влажность: {stationDataLast.stationDataLast.humidity} %</Col>
        <Col className='fs-4'>PM2.5: {stationDataLast.stationDataLast.pm_2_5} мкг/м³</Col>
        <Col className='fs-4'></Col>
      </Row>
      <Row>
        <Col className='fs-4'>Давление: {stationDataLast.stationDataLast.pressure} Па</Col>
        <Col className='fs-4'>PM10: {stationDataLast.stationDataLast.pm_10} мкг/м³</Col>
        <Col className='fs-4'>Дата и время замера: {dateTime}</Col>
      </Row>

      <h5 className="text-light text-start">Средние показатели за все время</h5>
      <hr className="text-light" />
      <Row>
        <Col className='fs-4'>Температура: {Math.round(stationDataInfo.avgTemperature)} &#176;C</Col>
        <Col className='fs-4'>PM1: {Math.round(stationDataInfo.avgPm_1)} мкг/м³</Col>
        <Col className='fs-4'>СО: {Math.round(stationDataLast.stationDataLast.co)} ppm</Col>
      </Row>
      <Row>
        <Col className='fs-4'>Влажность: {Math.round(stationDataLast.stationDataLast.humidity)} %</Col>
        <Col className='fs-4'>PM2.5: {Math.round(stationDataInfo.avgPm_2_5)} мкг/м³</Col>
        <Col className='fs-4'></Col>
      </Row>
      <Row>
        <Col className='fs-4'>Давление: {Math.round(stationDataInfo.avgPressure)} Па</Col>
        <Col className='fs-4'>PM10: {Math.round(stationDataInfo.avgPm_10)} мкг/м³</Col>
        <Col className='fs-4'></Col>
      </Row>

      <h5 className="text-start">Советы от ИИ</h5>
      <hr className="text-light" />
      <div className='d-flex justify-content-center'>
        <div className='rounded' style={{ background: "white", width:"90%" }}>
          <Row className='text-light rounded-top px-2'>
            <Col className='fs-4 text-light rounded-top' style={{background: "#29125E"}}>YandexGPT</Col>
          </Row>
          <Row className='px-2 py-2'>
            <Col className='d-flex justify-content-end'>
              <div className='text-end rounded-start' style={{ background: "#A9A9A9" }}>
                <p className='fs-6 px-2 py-2'>Что ты думаешь по этим данным?</p>
              </div>
            </Col>
          </Row>
          <Row className='px-2 py-2'>
            <Col className='d-flex justify-content-start'>
              <div className='text-start rounded-end' style={{ background: "#29125E" }}>
                <p className='fs-6 px-2 py-2'>{stationDataInfo.aiAdvices}</p>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </Container>
  )
}

export default StationDataLast