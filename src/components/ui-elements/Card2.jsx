import React from 'react'
import { P, H, Span } from './Typography'

export default function Card2(props) {
    const { className, data: { id, img, category, title, date, text, author_name, author_img } } = props
    return (
        <a href={`/article/${id}`} className={`flex flex-col items-center rounded-lg border md:flex-row overflow-hidden  ${className}`}>
            <img src={img} alt="article img" className='object-cover w-full h-96 md:h-auto md:w-52' />
            <div className='flex flex-col w-full justify-between p-4 leading-normal overflow-hidden'>
                <P>{category}</P>
                <H as='h3' className='pt-6 text-ellipsis overflow-hidden whitespace-nowrap'>{title}</H>
                <P className='text-ellipsis overflow-hidden whitespace-nowrap py-3'>{text}</P>
                <div className='flex justify-between items-center'>
                    <div className='flex items-center'>
                        <img src={author_img} alt={`${author_name}'s`} width='28px' height='28px' />
                        <Span as="l3" weight="Bold" className='text-black px-3'>
                            By {author_name}
                        </Span>
                    </div>
                    <Span>{date}</Span>
                </div>
            </div>
        </a>
    )
}
