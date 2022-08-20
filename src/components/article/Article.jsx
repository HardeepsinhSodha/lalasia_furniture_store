import React, { useState } from 'react'
import { H, P } from '../ui-elements/Typography'
import { todayTopHeadlinesData } from '../../data/data'
import ArticleCard1 from './ArticleCard1'
import { articleData } from '../../data/data'
import Card2 from '../ui-elements/Card2'

const category = {
  1: { name: 'all' },
  2: { name: 'Tips and Trick' },
  3: { name: 'Interior Design' },
  4: { name: 'Design Inspiration' },
  5: { name: 'Color Guide' },
}

export default function Article() {
  const [activeTab, setActiveTab] = useState(1)
  const [articleList, setArticleList] = useState(articleData)
  const handleTab = (value) => {
    setActiveTab(value)
    if (value === 1) {
      setArticleList(articleData)
    } else {
      setArticleList(articleData.filter((data) => data.category === category[value].name))
    }
  }
  console.log(activeTab, activeTab === 1)
  return (
    <div className='container mx-auto grid grid-cols-4 md:grid-cols-12 gap-1 md:gap-2 my-4 px-4'>
      <H as="h1" className=' text-h1 col-span-4 md:col-span-12 text-center mt-3 md:mt-10'>
        Article
      </H>
      <P weight="Medium" className='col-span-4 md:col-span-6 md:col-start-4 text-center mb-3 md:mb-10'>
        We display products based on the latest products we have, if you want to see our old products please enter the name of the item
      </P>
      <div className='col-span-4 md:col-span-12'>
        <H as='h5' className='text-secondary dark:text-secondary'>Daily News</H>
        <H as='h2'>Today top headlines</H>
      </div>
      {
        todayTopHeadlinesData.map((data) => (
          <ArticleCard1 data={data} className='col-span-4 md:col-span-6' key={data.id} />
        ))
      }
      <div className='col-span-4 md:col-span-12 my-10'>
        <H as='h5' className='text-secondary dark:text-secondary'>Trending Topics</H>
        <H as='h2'>Popular last week</H>
      </div>
      <div className='col-span-4 md:col-span-12 tabs'>
        <button className={`text-h5 tab ${activeTab === 1 ? 'tab-active dark:text-white' : 'dark:text-gray-800'}`} onClick={() => handleTab(1)}>All</button>
        <button className={`text-h5 tab ${activeTab === 2 ? 'tab-active dark:text-white' : 'dark:text-gray-800'}`} onClick={() => handleTab(2)}>Tips and Trick</button>
        <button className={`text-h5 tab ${activeTab === 3 ? 'tab-active dark:text-white' : 'dark:text-gray-800'}`} onClick={() => handleTab(3)}>Interior Design</button>
        <button className={`text-h5 tab ${activeTab === 4 ? 'tab-active dark:text-white' : 'dark:text-gray-800'}`} onClick={() => handleTab(4)}>Design Inspiration</button>
        <button className={`text-h5 tab ${activeTab === 5 ? 'tab-active dark:text-white' : 'dark:text-gray-800'}`} onClick={() => handleTab(5)}>Color Guide</button>
      </div>
      {
        articleList.map((data) => (
          <Card2 data={data} key={data.id} className='col-span-4 md:col-span-12' />
        ))
      }
      {
        articleList.length === 0 && (
          <div className='col-span-4 md:col-span-12 text-center my-10'>
            <P as='h5'>no result</P>
            <H as='h3'>Try some other category</H>
          </div>
        )
      }

      <div className='col-span-4 md:col-span-12 md:flex justify-between items-center mt-10'>
        <H as='h2'>Are you interested <br /> work with us?</H>
        <button className='btn btn-primary rounded-none capitalize px-10 my-10 text-white'>Let's Talk</button>
      </div>
    </div>
  )
}
