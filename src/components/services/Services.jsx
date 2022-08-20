import React from 'react'

import { P, H } from '../ui-elements/Typography'
import ServicesCard from './ServicesCard'

import living_room3 from '../../asset/images/living_room3.png'
import siska_bedroom from '../../asset/images/siska_bedroom.png'
import coworking_space from '../../asset/images/coworking_space.png'
import jeruk_living_room from '../../asset/images/jeruk_living_room.png'

import { servicesCardData } from '../../data/data'

export default function Services() {
  return (
    <div className='container mx-auto grid grid-cols-4 md:grid-cols-12 gap-1 md:gap-2 my-4 px-4'>
      <H as="h1" className=' text-h1 col-span-4 md:col-span-12 text-center mt-3 md:mt-10'>
        Services
      </H>
      <P weight="Medium" className='col-span-4 md:col-span-6 md:col-start-4 text-center mb-3 md:mb-10'>
        The product crafted by talented crafter and using high quality<br /> material with love inside
      </P>
      <img className='col-span-4 md:col-span-12 mb-5' src={living_room3} alt="living room" />
      <div className='col-span-4 md:col-span-12 divider'></div>
      {
        servicesCardData.map((data) => (
          <ServicesCard key={data.id} data={data} />
        ))
      }
      <H as='h5' className='text-secondary col-span-4 md:col-span-12 mt-10'>portofolio</H>
      <div className='col-span-4 md:col-span-6'>
        <H as='h2'>Amazing project we've <br /> done before</H>
      </div>
      <div className='col-span-4 md:col-span-6 pt-3'>
        <P>Pellentesque etiam blandit in tincidunt at donec. Eget ipsum dignissim placerat nisi, adipiscing mauris non.</P>
        <button className='btn btn-link btn-primary mx-0 px-0 capitalize text-h5 '>View Portofolio</button>
      </div>

      <div className='col-span-4 md:col-span-5 relative mt-10'>
        <Container img={siska_bedroom} title="Siska Kohl's Bedroom" />
      </div>

      <div className='col-span-4 md:col-span-7 flex flex-col justify-between mt-10'>
        <div className='relative py-4 md:py-0'>
          <Container title='Jeruk Veldevana Living Room Design' img={jeruk_living_room} />
        </div>
        <div className='relative py-4 md:py-0'>
          <Container title='Cozy Co-working space' img={coworking_space} />
        </div>
      </div>

      <div className='col-span-4 md:col-span-12 md:flex justify-between items-center mt-10'>
        <H as='h2'>Are you interested<br />work with us?</H>
        <button className='btn btn-primary rounded-none capitalize px-10 my-10 text-white'>Let's Talk</button>
      </div>

    </div>
  )
}

const Container = ({ img, title }) => {
  return (
    <>
      <img src={img} alt="living decoration" />
      <div className='absolute bottom-0 p-3 w-full'>
        <H as='h3' className='text-white'>{title}</H>
        <P className='text-ellipsis overflow-hidden whitespace-nowrap text-gray-400 w-full'>
          We start renovating her bedroom with minimalist concept and using combination white and wooden material
        </P>
        <button className='btn btn-link mx-0 px-0 text-white capitalize'>See Details</button>
      </div>
    </>
  )
}

