import React from 'react'
import { Container } from 'react-bootstrap'

const StationPage = () => {
  return (
    <Container className="mt-5 py-2" style={{ background: "#053566" }}>
      <h3 className="text-light">Описание метеостанции</h3>
      <hr className="text-light" />
      <Container className="py-2" style={{ background: "#00183A" }}>
      <div className="px-5 py-3">
            <p className="text-light fs-4">
                В качестве основы была выбрана Arduino-подобная плата с WiFi на борту
            </p>

            <h3 className="text-light">Компоненты</h3>
            <hr className="text-light" />
            <p className="text-light fs-4">
                <ul>
                  <li>Основная плата - NodeMcu v3 Lolin WiFi на ESP8266</li>
                  <li>Датчик температуры и влажности - DHT22</li>
                  <li>Датчик атмосферного давления - BMP180</li>
                  <li>Датчик CO - MQ-7</li>
                  <li>Датчик GPS - NEO-6M</li>
                  <li>Датчик качества воздуха - PMS7003</li>
                </ul>
            </p>

            <h3 className="text-light">Дизайн</h3>
            <hr className="text-light" />
            <p className="text-light fs-4">
                За основу был взят дизайн метеостанции из статьи на Хабре, 
                которую можно почитать <a className='text-light' href="https://habr.com/ru/articles/755586/" target='blank'>тут</a>
                <div className='d-block text-center mt-3'>
                  <img className='text-light me-4' src="static/sensorDesign_1.png" alt="Не удалось загрузить фото" />
                  <p>Вид сверху</p>
                </div>
                <div className='d-block text-center mt-3'>
                  <img className='text-light me-4' src="static/sensorDesign_2.png" alt="Не удалось загрузить фото" />
                  <p>Вид сбоку</p>
                </div>
                <div className='d-block text-center mt-3'>
                  <img className='text-light me-4' src="static/sensorDesign_3.png" alt="Не удалось загрузить фото" />
                  <p>Расположение датчиков внутри</p>
                </div>
            </p>
          </div>
      </Container>
    </Container>
  )
}

export default StationPage