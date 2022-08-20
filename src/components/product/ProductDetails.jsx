import React, { useState, useMemo } from 'react'
import { useParams } from 'react-router-dom'
import { productData } from '../../data/data'
import ProductCard from '../ui-elements/ProductCard'
import { P, H, Label } from '../ui-elements/Typography'
export default function ProductDetails() {
    const { id } = useParams()
    const [color, setColor] = useState("1")
    const { img, imgBig, product_name, price, subHeading, description, category } = useMemo(() => (productData.filter((obj) => obj.id === id.toString())?.[0] ?? {}), [id])
    const relatedProducts = useMemo(() => (productData.filter((obj) => obj.category === category && obj.id !== id)), [id,category])
    const handleColorChange = ({ target: { value } }) => {
        setColor(value)
    }
    if(!product_name){
        return (
            <center className='my-12'>
                <H as='h5'>Product is removed</H>
                <a href='/product' className='p-3 underline block'><P> Go To Products</P></a>
            </center>
        )
    }
    return (
        <div className='container mx-auto my-12 px-4'>
            <div className='flex flex-col md:flex-row max-w-6xl mx-auto'>
                <div className='md:f-1'>
                    <img className='mx-auto md:max-w-md' src={imgBig ?? img} alt={product_name} />
                </div>
                <div className='flex flex-col gap-y-4 md:f-1 md:mx-8'>
                    <H as='h2'>{product_name}</H>
                    <P>{subHeading}</P>
                    <Label>Color</Label>
                    <div className='inline space-x-3'>
                        <input type="radio" name="color" value="1" class="radio rounded-none radio-primary w-10 h-10" checked={color === "1"} onClick={handleColorChange} />
                        <input type="radio" name="color" value="2" class="radio rounded-none radio-secondary w-10 h-10" checked={color === "2"} onClick={handleColorChange} />
                        <input type="radio" name="color" value="3" class="radio rounded-none radio-accent w-10 h-10" checked={color === "3"} onClick={handleColorChange} />
                    </div>
                    <P>{description}</P>
                    <H as='h2'>${price}</H>
                    <div className='flex gap-x-5'>
                        <button className='btn btn-primary rounded-none'>Buy Now</button>
                        <button className='btn btn-outline btn-primary rounded-none'>Add to Cart</button>
                    </div>
                </div>
            </div>
            <div className='divider'></div>
            <H as='h3' className='my-5'>Related Items</H>
            <div className='m-1 flex flex-row flex-wrap'>
                {
                    relatedProducts?.map((obj) => (
                        <ProductCard key={obj.id} data={obj} className='m-2 w-72 rounded-none' />
                    ))
                }
            </div>
            { relatedProducts?.length === 0 && <center>
                <H as='h5'>No related items</H>
                <a href='/product' className='p-3 underline block'><P> Go To Products</P></a>
            </center>}
        </div>
    )
}
