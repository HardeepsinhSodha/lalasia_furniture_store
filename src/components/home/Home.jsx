import React from 'react'
import Card1 from '../ui-elements/Card1'
import Card2 from '../ui-elements/Card2'

import dining_room from '../../asset/images/dining_room.png'

import ProductsList from './ProductsList'
import { centerContainerData, articalsData, benefitsCardData } from '../../data/data'

import "./hideScrollbar.css";
import TestimonialsList from './TestimonialsList'
import MyCarousel from './MyCarousel'
import { P, H } from '../ui-elements/Typography'

export default function Home() {
  return (
    <div className='container mx-auto grid grid-cols-4 md:grid-cols-12 gap-1 md:gap-2 my-4 px-4'>
      <H as="h1" className='col-span-4 md:col-span-12 text-center mt-3 md:mt-10'>
        Discover Furniture With<br /> High Quality Wood
      </H>
      <P weight="Medium" className='col-span-4 md:col-span-6 md:col-start-4 text-center mb-3 md:mb-10'>
        Pellentesque etiam blandit in tincidunt at donec. Eget ipsum dignissim placerat nisi, adipiscing mauris non. Purus parturient viverra nunc, tortor sit laoreet. Quam tincidunt aliquam adipiscing tempor.
      </P>
      <MyCarousel />
      <H className='text-h5 text-secondary dark:text-secondary col-span-4 md:col-span-12 mt-20'>Benefits</H>
      <H as='h2' className='text-h2 col-span-4 md:col-span-6'>
        Benefits when using our services
      </H>
      <P className='col-span-4 md:col-span-6 flex items-center'>
        Pellentesque etiam blandit in tincidunt at donec.
        Eget ipsum dignissim placerat nisi, adipiscing mauris non purus parturient.
      </P>
      {
        benefitsCardData?.map((data, index) => (
          <Card1 className='col-span-4 my-8' key={index}
            icon={data.icon}
            heading={data.heading}
            text={data.text}
          />
        ))
      }
      <CenterContainer data={centerContainerData[0]} />
      <div className='col-span-4 md:col-span-12 -mx-12 my-5 '>
        <ProductsList />
      </div>
      <CenterContainer data={centerContainerData[1]} />
      <div className='col-span-4 md:col-span-12 -mx-12 my-5 '>
        <TestimonialsList />
      </div>
      <h5 className='text-h5 text-secondary col-span-4 md:col-span-12'>Articles</h5>
      <div className='col-span-4 md:col-span-6 flex flex-col'>
        <H as='h2'>The best furniture comes from Lalasia</H>
        <P className='my-4'>Pellentesque etiam blandit in tincidunt at donec. </P>
        <div className='flex flex-col flex-1 overflow-hidden p-4 mr-4 bg-no-repeat bg-center bg-cover my-3 justify-end' style={{ backgroundImage: `url(${dining_room})` }}>
          <P className='text-white dark:text-white'>Tips and Trick</P>
          <H as='h3' className='pt-6 pb-2 dark:text-white text-white'>Create Cozy Dinnig Room Vibes</H>
          <P className='text-white dark:text-white text-ellipsis overflow-hidden whitespace-nowrap'>
            Decorating with neutrals brings balance to the dining room. With eclectic decoration on the sides, Caruso Dining Table and Cyrillo Dining Chairs elevate the tonal base of the room. The modern furniture set gives personality to any space in all types of architecture.‎ The wide volume enables everyone to sit back and relax, be it in the dining room, conference, or office.
          </P>
          <a href='/article/12' className='text-l3 text-white my-3'>Read More</a>
        </div>
      </div>

      <div className='col-span-4 md:col-span-6 flex flex-col gap-y-8'>
        {
          articalsData.map((data,) => (
            <Card2 data={data} key={data.id} />
          ))
        }
      </div>
      <div className='col-span-4 md:col-span-12 md:flex justify-between items-center mt-10'>
        <H as='h2'>Join with me to get special discount</H>
        <button className='btn btn-primary rounded-none capitalize px-10 my-10 text-white'>Learn More</button>
      </div>
    </div>
  )
}
const CenterContainer = ({ data: { category, heading, text } }) => {
  return (
    <div className='col-span-4 md:col-span-12 text-center '>
      <H as='h5' className='text-secondary dark:text-secondary'>{category}</H>
      <H as='h2' >{heading}</H>
      <P className='w-100 md:w-1/2 mx-auto my-3'>{text}</P>
    </div>
  )
}

