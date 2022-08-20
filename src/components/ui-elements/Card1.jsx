import React from 'react'
import { H, P } from './Typography'
export default function Card1(props) {
    const { className, heading, icon, text } = props
    return (
        <div className={className}>
            <img src={icon} alt={heading} className='w-16' />
            <H as='h3' className='py-3'>{heading}</H>
            <P >{text}</P>
        </div>
    )
}
