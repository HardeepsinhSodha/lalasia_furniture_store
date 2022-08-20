import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../ui-elements/Logo'
import { P, H } from '../ui-elements/Typography'

export default function Footer() {
  return (
    <>
      <div className="divider"></div> 
      <div className='container mx-auto px-4 py-10 grid grid-cols-4 md:grid-cols-12 gap-1 md:gap-2'>
        <div className='col-span-4 md:col-span-6'>
          <Logo />
          <P className='py-3'>Lalasia is digital agency that help you make better experience iaculis cras in.</P>
        </div>
        <div className='col-span-4 md:col-span-6 flex justify-between'>
          <FooterList data={productData}/>
          <FooterList data={servicesData}/>
          <FooterList data={followUsData}/>
        </div>
      </div>
    </>
  )
}

const FooterList = (props)=>{
  const {data:{header,child}} = props
  return (
    <div className='gap-4'>
      <H className='uppercase my-2 text-h6'>{header.title}</H>
      {child?.map((obj,index)=>(
        <Link key={index} to={obj.link} className="block py-1  link link-hover text-p1 text-gray-800 dark:text-gray-400">{obj.title}</Link>
      ))}
    </div>
  )
}
const productData = {
  header:{
    title:'Product',
  },
  child:[
    {
      title:'New Arrivals',
      link:'/product',
    },
    {
      title:'Best Selling',
      link:'/product',
    },
    {
      title:'Home Decor',
      link:'/product',
    },
    {
      title:'Kitchen Set',
      link:'/product',
    }
  ]
}
const servicesData = {
  header:{
    title:'Services',
  },
  child:[
    {
      title:'Catalog',
      link:'/services',
    },
    {
      title:'Blog',
      link:'/services',
    },
    {
      title:'FaQ',
      link:'/services',
    },
    {
      title:'Pricing',
      link:'/services',
    }
  ]
}
const followUsData = {
  header:{
    title:'Follow Us',
  },
  child:[
    {
      title:'Facebook',
      link:'/facebook',
    },
    {
      title:'Instagram',
      link:'/instagram',
    },
    {
      title:'Twitter',
      link:'/twitter',
    }
  ]
}
