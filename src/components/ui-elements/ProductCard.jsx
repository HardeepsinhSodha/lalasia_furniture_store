import React from 'react'
// import { Card } from 'flowbite-react'
import { P, H } from './Typography'
export default function ProductCard(props) {
    const {className,data:{id,price, category, product_name, subHeading, img}} = props
  return (
    <a href={`/product/${id}`} className={`card card-compact w-96 shadow-lg hover:shadow-lg dark:hover:shadow-white ${className}`}>
      <figure><img src={img} alt={product_name} /></figure>
      <div className='card-body'>
        <P as='p2' className="mb-3">
          {category}
        </P>
        <H as='h3' className='my-auto'>
          {product_name}
        </H>
        <P as='p2' className="text-p2 mb-3 text-ellipsis overflow-hidden whitespace-nowrap">
          {subHeading}
        </P>
        <H as='h4' className="text-h4 mb-3">
          ${price}
        </H>
      </div>
    </a>
  )
}
