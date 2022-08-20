import React from 'react'
import { H, P } from '../ui-elements/Typography'
export default function ServicesCard(props) {
    const {data:{id,title,text}} = props
    return (
        <div className='col-span-4'>
            <H as='h1' className='pb-3 text-primary'>0{id}</H> 
            <H as='h3'>{title}</H>
            <P>{text}</P>
        </div>
    )
}
