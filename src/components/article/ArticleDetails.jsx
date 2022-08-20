import React from 'react'
import { H, P, } from '../ui-elements/Typography'
import bedroom from '../../asset/images/bedroom.png'
import article_page_img1 from '../../asset/images/article_page_img1.png'
import bedroom2 from '../../asset/images/bedroom2.png'
import { articleData } from '../../data/data'
import ArticleCard1 from './ArticleCard1'

export default function ArticleDetails() {
    return (
        <div className='container mx-auto grid grid-cols-4 md:grid-cols-12 gap-1 md:gap-2 my-4 px-4'>
            <H as="h1" className='text-h1 col-span-4 md:col-span-12 text-center mt-3 md:mt-10'>
                Bedroom Design is the Most Personal Reflection of the Owner, Really?
            </H>
            <P weight="Medium" className='col-span-4 md:col-span-6 md:col-start-4 text-center mb-3 md:mb-10'>
                Is it true that the bedroom design is the most personal reflection of the owner? Many people believe that to be able to judge a person's personality, it is enough to
            </P>
            <img className='col-span-4 md:col-span-12' src={bedroom} alt="bedroom" />
            <div className='col-span-4 md:col-span-12 md:columns-2 my-5'>
                <P className='leading-7'>
                    Commodo sodales at eget id dignissim amet consectetur adipiscing elit. At cursus magna libero turpis scelerisque tristique scelerisque mi. Sed nunc auctor faucibus vitae. Gravida erat nisi sed vulputate sed cum viverra enim pretium. Sed nunc consequat, tincidunt pharetra. Mattis quis egestas mi, malesuada morbi morbi porttitor porttitor. Faucibus nunc, turpis malesuada blandit feugiat porttitor feugiat pellentesque condimentum. At nisi, cursus sem blandit sed nunc phasellus. Placerat auctor tincidunt commodo auctor placerat viverra tortor quis eu. Pretium velit eu, massa tristique congue egestas. In arcu tellus tellus urna, orci gravida etiam velit, viverra. Convallis nunc sed tellus eget feugiat ultricies purus. Consectetur sollicitudin id eget facilisis hendrerit nibh.
                    <br />
                    <br />
                    Nisi quam mi est et et. Lectus sed imperdiet non vestibulum volutpat tellus odio aliquam. Eu rutrum tincidunt risus felis sagittis, consequat, iaculis tortor bibendum. At nisl, diam a sagittis nulla nec at. Faucibus ultricies pharetra, faucibus erat varius ornare. Viverra pharetra nibh leo et purus in et. Amet felis lectus consectetur duis ut orci. Sed vitae quam vel pretium urna, duis neque. Vitae commodo interdum adipiscing mi ultrices. Aliquam risus nibh tincidunt mauris faucibus gravida eleifend.
                    <br />
                    Ornare tincidunt gravida sed adipiscing vel adipiscing turpis neque elementum. Donec duis malesuada quam vehicula. Mauris sem tellus vitae cursus pellentesque semper nam est erat. Vulputate dui nisi neque, morbi mauris id augue. Habitant ultrices egestas vitae eget mattis ipsum sed. Ornare porttitor lobortis mauris nulla et vitae risus augue commodo. Nunc placerat nascetur semper est facilisis. Arcu cum aliquam vitae sit ultrices. Aliquet amet elit nibh sapien a. Id eu sagittis est eu ornare.
                </P>

                <P className='leading-7'>
                    Faucibus facilisi morbi pharetra quis sed. Vitae suspendisse facilisis facilisis ligula felis et a parturient aenean. Ac maecenas ultricies felis risus scelerisque duis posuere. Lectus tellus montes, ac sed diam. Habitant amet, leo cras dui ac eu magna.
                    <br />
                    Sed neque lorem mi laoreet orci aliquam maecenas. Molestie enim, nulla egestas id metus quisque eget. Tempor ante hendrerit venenatis et pellentesque viverra. Ornare mattis dui viverra suspendisse habitant tempus ornare aliquam. Condimentum tellus cursus diam interdum. Quam dictum pellentesque vestibulum mi. Aliquet laoreet sem proin viverra nec, at. Malesuada aliquam quisque felis, faucibus. Diam duis nunc tincidunt integer risus sit parturient urna. Etiam sed id nisi, tempus fames. Tempor ultrices massa eleifend id aliquet integer. Phasellus felis convallis fames habitasse sagittis, dui tellus.
                </P>
                <img src={article_page_img1} alt="bedroom" className='py-5' />
            </div>
            <H as='h3' className='col-span-4 md:col-span-12'>Bedroom Collection</H>
            <div className='col-span-4 md:col-span-12 md:columns-2 my-4'>
                <P className='leading-7'>
                    Nisi quam mi est et et. Lectus sed imperdiet non vestibulum volutpat tellus odio aliquam. Eu rutrum tincidunt risus felis sagittis, consequat, iaculis tortor bibendum. At nisl, diam a sagittis nulla nec at. Faucibus ultricies pharetra, faucibus erat varius ornare. Viverra pharetra nibh leo et purus in et. Amet felis lectus consectetur duis ut orci.
                    <br />
                    Praesent tempus vel urna suspendisse cursus. Ac proin vitae viverra lorem nulla mattis in. Urna diam accumsan quisque adipiscing sagittis, in. Adipiscing dolor, morbi placerat sit vitae ipsum amet consequat. Imperdiet lacus tempus, nibh eget metus, sed pellentesque mattis aenean.
                </P>
            </div>
            <img className='col-span-4 md:col-span-12' src={bedroom2} alt="bedroom" />
            <H as='h3' className='col-span-4 md:col-span-12 mt-5'>The Knot</H>
            <P className='col-span-4 md:col-span-12 md:columns-2'>
                Nisi quam mi est et et. Lectus sed imperdiet non vestibulum volutpat tellus odio aliquam. Eu rutrum tincidunt risus felis sagittis, consequat, iaculis tortor bibendum. At nisl, diam a sagittis nulla nec at. Faucibus ultricies pharetra, faucibus erat varius ornare. Viverra pharetra nibh leo et purus in et. Amet felis lectus consectetur duis ut orci.
                <br />
                Nisi quam mi est et et. Lectus sed imperdiet non vestibulum volutpat tellus odio aliquam. Eu rutrum tincidunt risus felis sagittis, consequat, iaculis tortor bibendum. At nisl, diam a sagittis nulla nec at. Faucibus ultricies pharetra, faucibus erat varius ornare. Viverra pharetra nibh leo et purus in et. Amet felis lectus consectetur duis ut orci.
            </P>
            <div className='col-span-4 md:col-span-12 text-center mt-10 mb-5'>
                <H as='h5' className='text-secondary dark:text-secondary'>Similar Topics</H>
                <H as='h2'>Maybe you're interested</H>
            </div>
            {
                articleData.map((data) => (
                    <ArticleCard1 data={data} key={data.id} className='col-span-4' />
                ))
            }
            <div className='col-span-4 md:col-span-12 md:flex justify-between items-center mt-10'>
                <H as='h2'>Subscribe our newsletter</H>
                <button className='btn btn-primary rounded-none capitalize px-10 my-10 text-white'>Enter details</button>
            </div>
        </div>
    )
}

