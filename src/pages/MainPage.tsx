import React, { useState, useEffect, Suspense } from 'react';
import { Container, Spinner } from "react-bootstrap";
import StationApi from '../api/StationApi';

const MainPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [stationsCount, setStationsCount] = useState(0);

  useEffect( () =>{
    setIsLoading(true);
    const getCount = async () => {
      setStationsCount(await StationApi.getStationsCount());
    }
    
    getCount();
    setIsLoading(false);
  }, [])
  
  return (
    <Container className="mt-5 py-2" style={{ background: "#053566" }}>
      <h3 className="text-light">Главная страница</h3>
      <hr className="text-light" />
      <Container className="py-2" style={{ background: "#00183A" }}>
        <h3 className="text-light text-center">Количество станций онлайн</h3>
        <div className="mt-2 border rounded text-center">
          <p className="text-light mt-2 fs-1">
            {isLoading ?
              <Spinner animation='grow'/>
              :
              (stationsCount === -1 ? 
                <p className="text-danger mt-2 fs-3">Ошибка при загрузке...</p> 
                :
                <h1 className="text-light text-center">{stationsCount}</h1>)
            }
          </p>
          <p className="text-light text-end align-text-bottom me-1">*Станция считается онлайн, если она отправила данные в течение последних 24 часов</p>
        </div>

        <h3 className="text-light mt-5">Что такое качество воздуха?</h3>
        <hr className="text-light" />
        <p className="text-light fs-4">
          Качество воздуха - это важный фактор, влияющий на здоровье, благополучие и качество жизни людей. 
        </p>

        <h3 className="text-light mt-5">Для чего нужно знать качество воздуха в котором ты находишься?</h3>
        <hr className="text-light" />
        <p className="text-light fs-4"> 
          Загрязнение воздуха может вызывать ряд заболеваний, таких как астма, рак легких, инфекции дыхательных путей и сердечно-сосудистые заболевания. 
          По оценкам Всемирной организации здравоохранения (ВОЗ), загрязнение воздуха ежегодно уносит жизни около 7 миллионов человек во всем мире.
          Чтобы защитить себя и своих близких от вредного воздействия загрязненного воздуха, необходимо знать его уровень и источники в вашем регионе.
        </p>

        <h3 className="text-light mt-5">Что предлагает наш сайт?</h3>
        <hr className="text-light" />
        <p className="text-light fs-4"> 
          Наш сайт предоставляет вам актуальную и достоверную информацию о качестве воздуха в разных городах России.
          (Если в вашем городе есть метеостанция которая замеряет и передает информацию о качестве воздуха)
          Вы можете отслеживать показатели качества воздуха, такие как:
          <ul>
            <li>PM1</li>
            <li>PM2.5</li>
            <li>PM10</li>
            <li>CO</li>
            <li>Температура</li>
            <li>Влажность</li>
            <li>Атмосферное давление</li>
          </ul>
        </p>

        <h3 className="text-light mt-5">Что такое PM1, PM2.5, PM10 и CO?</h3>
        <hr className="text-light" />
        <p className="text-light fs-4"> 
          <ul>
            <li>
              PM1 - это твердые или жидкие частицы в воздухе с диаметром менее 1 микрометра (мкм).
              Они могут проникать в самые глубокие отделы легких и кровеносных сосудов, вызывая воспаление и повреждение тканей.
            </li>
            <li>
              PM2.5 - это твердые или жидкие частицы в воздухе с диаметром менее 2.5 мкм.
              Они могут проникать в бронхи и альвеолы, ухудшая функцию дыхания и увеличивая риск развития хронических заболеваний дыхательных путей, сердца и сосудов.
            </li>
            <li>
              PM10 - это твердые или жидкие частицы в воздухе с диаметром менее 10 мкм.
              Они могут оседать в верхних дыхательных путях, раздражая слизистую оболочку и способствуя развитию аллергии, астмы и инфекций.
            </li>
            <li>
              CO - это монооксид углерода, бесцветный и без запаха газ, образующийся при неполном сгорании углеродсодержащих веществ.
              Он сильно связывается с гемоглобином крови, уменьшая перенос кислорода к тканям и органам, что может привести к головной боли, утомлению и гипоксии.
            </li>
          </ul>
        </p>
      </Container>
    </Container>
  )
}

export default MainPage