import React from 'react'
import './loader.css'

export default function Loader() {
  return (
    <div className='h-screen'>
      <div className="gooey rounded-lg bg-black dark:bg-white">
          <span className="dot bg-white dark:bg-black"></span>
          <div className="dots ">
              <span className='bg-white dark:bg-black'></span>
              <span className='bg-white dark:bg-black'></span>
              <span className='bg-white dark:bg-black'></span>
          </div>
      </div>
    </div>
  )
}
