import React from 'react'
import { H, P } from '../ui-elements/Typography'
import video from '../../asset/images/video.png'
import { teamData, sevicesOptionData } from '../../data/data'

export default function AboutUs() {
  return (
    <div className='container mx-auto grid grid-cols-4 md:grid-cols-12 gap-1 md:gap-2 my-4 px-4'>
      <H as="h1" className=' text-h1 col-span-4 md:col-span-12 text-center mt-3 md:mt-10'>
        About Us
      </H>
      <P weight="Medium" className='col-span-4 md:col-span-6 md:col-start-4 text-center mb-3 md:mb-10'>
        We display products based on the latest products we have, if you want to see our old products please enter the name of the item
      </P>
      <img className='col-span-4 md:col-span-12 mb-5' src={video} alt="video" />
      <div className='col-span-4 md:col-span-12 divider'></div>

      <H as='h5' className='text-secondary col-span-4 md:col-span-12 mt-10'>Our Mission</H>
      <div className='col-span-4 md:col-span-6 flex flex-col'>
        <H as='h2' className='my-4'>Our team dedicated to help find dmart home product</H>
        <div className='flex justify-between my-auto'>
          <div>
            <H as='h2'>20+</H>
            <P>Years Experience</P>
          </div>
          <div>
            <H as='h2'>150+</H>
            <P>Project Finished</P>
          </div>
          <div>
            <H as='h2'>483</H>
            <P>Happy lient</P>
          </div>
        </div>
      </div>
      <div className='col-span-4 md:col-span-6 '>
        {
          sevicesOptionData.map((data) => (
            <Card data={data} key={data.id} />
          ))
        }
      </div>

      <H as='h5' className='text-secondary col-span-4 md:col-span-12 mt-10'>Over Team</H>
      <div className='col-span-4 md:col-span-6'>
        <H as='h2'>Meet our leading and<br />strong team</H>
      </div>
      <div className='col-span-4 md:col-span-6 pt-3'>
        <P>Pellentesque etiam blandit in tincidunt at donec. Eget ipsum dignissim placerat nisi, adipiscing mauris non purus parturient.</P>
      </div>

      {teamData.map((data, index) => (
        <div className='col-span-4 p-4' key={index}>
          <img src={data.img} alt={data.name} />
          <H as='h3' className='pt-4'>{data.name}</H>
          <P>{data.position}</P>
        </div>
      ))}

      <div className='col-span-4 md:col-span-12 md:flex justify-between items-center mt-10'>
        <H as='h2'>Are you interested <br /> work with us?</H>
        <button className='btn btn-primary rounded-none capitalize px-10 my-10 text-white'>Let's Talk</button>
      </div>
    </div>
  )
}

const Card = ({ data: { img, title, description } }) => {
  return (
    <div className='flex p-5 gap-5'>
      <img src={img} alt="icon" />
      <div>
        <H className='text-h3 pb-4'>{title}</H>
        <P>{description}</P>
      </div>
    </div>
  )
}
