import React from 'react'
import ProductCard from '../ui-elements/ProductCard';
import { productData } from '../../data/data';
import HorizontalScrollingMenu from '../ui-elements/HorizontalScrollingMenu'

export default function ProductsList() {

    return (
        <HorizontalScrollingMenu scrollButtonPostion="side">
            {productData.map((data) => (
                <ProductCard
                    key={data.id}
                    data={data}
                    className='m-3 max-w-80 w-80'
                />
            ))}
        </HorizontalScrollingMenu>
    )
}
