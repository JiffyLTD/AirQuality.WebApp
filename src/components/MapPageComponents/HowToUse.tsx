import React from 'react'

const HowToUse = () => {
  return (
    <div className="mt-5">
          <h3 className="text-light">Как пользоваться?</h3>
          <hr className="text-light" />
          <div className="px-5 py-3">
            <p className="text-light fs-4">
                На карте вы сможете найти метки, которые укажут местоположение метеостанций. Они могут быть 3х видов.
            </p>
            <div className='d-flex justify-content-center'>
                <img className='text-light me-4' src="static/okMarker.png" alt="Не удалось загрузить фото" />
                <img className='text-light me-4' src="static/mediumMarker.png" alt="Не удалось загрузить фото" />
                <img className='text-light' src="static/badMarker.png" alt="Не удалось загрузить фото" />
            </div>
            <p className="text-light fs-4">
                Цвет метки зависит от среднего показателя взвешенных частиц в воздухе, цифра внутри метки и есть показатель
                <ul>
                    <li>Зеленый - воздух чистый</li>
                    <li>Оранжевый - воздух относительно чистый</li>
                    <li>Красный - воздух загрязнен</li>
                </ul>
            </p>
            <p className="text-light fs-4">
                Вы можете кликнуть по метке и посмотреть на полные показатели о воздухе от данной метеостанции
            </p>
          </div>
        </div>
  )
}

export default HowToUse