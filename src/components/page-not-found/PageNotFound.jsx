import React from 'react';
import pageNotFound from '../../asset/images/page-not-found.png'
import { Link } from 'react-router-dom';
import { P, H } from '../ui-elements/Typography';

export default function PageNotFound() {
    return (
        <div className='pt-5 text-center h-screen dark:bg-gray-900'>
            <img className='mx-auto mt-20' src={pageNotFound} alt="ball" />
            <H className='text-h2'>Page Not Found</H>
            <P>Sorry, the page you’re looking for can’t be found</P>
            <Link to='/' className='btn btn-primary px-3 my-3 shadow-2'>Go Home</Link>
        </div>
    )
}
