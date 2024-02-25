import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Helper from '../../helpers/Helper'

const StationDataLast = (stationDataLast:any) => {
  const dateTime = Helper.formatDateToCustomString(stationDataLast.stationDataLast.createdAt);

  return (
    <Container className='text-light text-center mt-3'>
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
    </Container>
  )
}

export default StationDataLast