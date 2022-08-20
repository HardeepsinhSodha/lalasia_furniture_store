import React from 'react'
import { Link } from 'react-router-dom'
import LogoIcon from '../../asset/icons/logo.svg'
import { Label } from './Typography'
export default function Logo({className}) {
    return (
        <Link to='/' className={`flex flex-wrap items-center ${className}`}>
            <img src={LogoIcon} alt='lalasia Logo' width='25px' />
            <Label as='l1' weight='Medium' className='px-3'>Lalasia</Label>
        </Link>
    )
}
