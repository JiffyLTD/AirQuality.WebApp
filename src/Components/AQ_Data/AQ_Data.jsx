import React from 'react'

const AQ_Data = ({aq_data}) => {
  return (
    <div className='px-2 py-2 mb-4' style={{background: '#00183A'}}>
        <h4 className='text-light'>Дата и время замера: {aq_data.creationDate}</h4>
        <p className='text-light fs-4'>Температура: {aq_data.temperature} °C</p>
        <p className='text-light fs-4'>Влажность: {aq_data.humidity} %</p>
    </div>
  )
}

export default AQ_Data