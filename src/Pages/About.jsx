import React from 'react'
import { Container } from 'react-bootstrap'

const About = () => {
  return (
    <Container className='mt-5 py-2' style={{background: '#053566'}}>
        <h3 className='text-light'>Информация о сайте</h3>
        <hr className='text-light' />
        <Container className='py-2' style={{background: '#00183A'}}>
            <h3 className='text-light'>Содержимое страницы</h3>
        </Container>
    </Container>
  )
}

export default About