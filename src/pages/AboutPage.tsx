import React from 'react';
import { Container } from 'react-bootstrap';

const AboutPage = () => {
  return (
    <Container className='mt-5 py-2' style={{background: '#053566'}}>
        <h3 className='text-light'>Информация о сайте</h3>
        <hr className='text-light' />
        <Container className='py-2' style={{background: '#00183A'}}>
          <div className="px-5 py-3">
            <p className="text-light fs-4">
                Сайт разработан студентом 4 курса в качестве дипломной работы
            </p>

            <h3 className="text-light">Идея</h3>
            <hr className="text-light" />
            <p className="text-light fs-4">
                Идея для выбора такой темы дипломной работы пришла после прочтения статьи на Хабре. 
                Статья вдохновила на 'попробовать сделать самому' из-за чего я многому научился.
                <br />
                Саму статью можно почитать <a className='text-light' href="https://habr.com/ru/articles/755586/" target='blank'>тут</a>
            </p>

            <h3 className="text-light">Какие технологии использовались?</h3>
            <hr className="text-light" />
            <h4 className="text-light">Frontend</h4>
            <p className="text-light fs-4">
                <ul>
                  <li>TypeScript</li>
                  <li>React</li>
                </ul>
            </p>
            <h4 className="text-light">Backend</h4>
            <p className="text-light fs-4">
                <ul>
                  <li>C#</li>
                  <li>.NET 8</li>
                </ul>
            </p>
            <h4 className="text-light">Database</h4>
            <p className="text-light fs-4">
                <ul>
                  <li>PostgreSql</li>
                </ul>
            </p>
            <h4 className="text-light">Метеостанция</h4>
            <p className="text-light fs-4">
                <ul>
                  <li>C++</li>
                  <li>Более подробно можно посмотреть <a className='text-light' href="/station" target='blank'>здесь</a></li>
                </ul>
            </p>

            <h3 className="text-light">Исходный код</h3>
            <hr className="text-light" />
            <p className="text-light fs-4">
                Исходный код вы сможете найти на GitHub по данным ссылкам
                <ul>
                  <li>Frontend - <a className='text-light' href="https://github.com/JiffyLTD/AirQuality.WebApp" target='blank'>здесь</a></li>
                  <li>Backend - <a className='text-light' href="https://github.com/JiffyLTD/AirQuality.Server" target='blank'>здесь</a></li>
                  <li>Скетч метеостанции - <a className='text-light' href="https://github.com/JiffyLTD/AirQuality.Sensor" target='blank'>здесь</a></li>
                </ul>
            </p>
          </div>
        </Container>
    </Container>
  )
}

export default AboutPage