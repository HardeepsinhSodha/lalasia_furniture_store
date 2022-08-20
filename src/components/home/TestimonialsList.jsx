import React from 'react'
import quoteUp from '../../asset/icons/quoteUp.svg'
import { testimonialData } from '../../data/data'
import HorizontalScrollingMenu from '../ui-elements/HorizontalScrollingMenu'
import { Star } from 'react-feather'
import { Span, P, Label } from '../ui-elements/Typography'
export default function TestimonialsList(props) {
    
    return (
        <HorizontalScrollingMenu scrollButtonPostion="side">
            {testimonialData.map((data) => (
                <TestimonialsCard
                    key={data.id}
                    data={data}
                    className='mx-3'
                />
            ))}
        </HorizontalScrollingMenu>
    )
}

function TestimonialsCard(props){
    const {className, data:{rating, customer_name, text, customer_img}} =props
    return (
        <div className={`w-96 p-3 rounded-lg border shadow-md md:flex-row md:max-w-xl ${className}`}>
            <img src={quoteUp} width="24px" alt="icon" />
            <P className='pt-6 pb-3'>{text}</P>
            <div className='flex justify-between items-center'>
                <div className='flex items-center'>
                    <img src={customer_img} alt={`${customer_name}'s`} width='28px' height='28px'/>
                    <Label as='l2' className='px-3 tracking-wide'>
                        {customer_name}
                    </Label>
                </div>
                <div className='text-secondary flex'><Star /><Span weight='Medium'>{rating}</Span></div>
            </div>
        </div>
    )
}
