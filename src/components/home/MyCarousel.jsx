import React from 'react'
import {Carousel} from 'react-daisyui'
import { carouseHomePage } from '../../data/data'

const buttonStyle = (value) => {
    return <button className='btn btn-xs'>{value}</button>
}

export default function MyCarousel() {
  return (
    <div className="col-span-4 md:col-span-12">
        <Carousel buttonStyle={buttonStyle} display='sequential' snap='start' className="rounded-box">{
          carouseHomePage.map((data) => (
            <Carousel.Item key={data.id} src={data.img} alt={data.name} className='my-auto'/>
          ))}
        </Carousel>
      </div>
  )
}
