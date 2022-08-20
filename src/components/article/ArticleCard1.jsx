import React from 'react'
import { P, H, Span} from '../ui-elements/Typography'

export default function ArticleCard1(props) {
    const { className, data: { id, img, category, title, date, text, author_name, author_img } } = props
    return (
        <a href={`/article/${id}`} className={`flex flex-col overflow-hidden border rounded-lg ${className}`}>
            <img src={img} alt="article" className='my-auto'/>
            <div className='p-4'>
                <P className='pt-3'>{category}</P>
                <H as='h3' className='pt-4 text-ellipsis overflow-hidden whitespace-nowrap'>{title}</H>
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
