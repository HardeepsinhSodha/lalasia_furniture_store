import React, { useState, useMemo } from 'react'
import { P, H } from '../ui-elements/Typography'
import { Dropdown, Badge } from 'react-daisyui'
import { productData } from '../../data/data'
import { Search, Filter, X, BarChart } from 'react-feather'
import ProductCard from '../ui-elements/ProductCard'
import MyPagination from '../ui-elements/Pagination'
import MyCarousel from '../home/MyCarousel'
const sortByOptions = {
  1: {
    id: 1,
    label: 'Price (Low->High)'
  },
  2: {
    id: 2,
    label: 'Price (High->Low)'
  },
  3: {
    id: 3,
    label: 'Category'
  },
  4: {
    id: 4,
    label: 'New Collection'
  }
}

export default function Product() {
  const [data, setData] = useState(productData)
  const [sortBy, setSortBy] = useState(4)
  const [pageNo, setPageNo] = useState(1)
  const [search, setSearch] = useState("")
  const newSortByOptions = useMemo(() => Object.values(sortByOptions), [])

  const onPageChange = (page) => {
    setPageNo(page)
  }
  const handleSearch = ({ target: { value } }) => {
    setSearch(value)
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    const v = search.toLowerCase()
    const newProductData = productData.filter((obj) => obj?.product_name?.toLowerCase()?.includes(v))
    setData(newProductData)
  }
  const handleClearSearch = () => {
    setSearch('')
    setData(productData)
  }


  const handleSorting = (id) => {
    if (id === 1) {
      data.sort((a, b) => Number(a.price) > Number(b.price) ? 1 : -1)
    } else if (id === 2) {
      data.sort((a, b) => Number(a.price) > Number(b.price) ? -1 : 1)
    } else if (id === 3) {
      data.sort((a, b) => a.category > b.category ? 1 : -1)
    }
    setData([...data])
    setSortBy(id)
  }
  return (
    <div className='container mx-auto grid grid-cols-4 md:grid-cols-12 gap-1 md:gap-2 my-4 px-4'>
      <H as="h1" className=' text-h1 col-span-4 md:col-span-12 text-center mt-3 md:mt-10'>
        Products
      </H>
      <P weight="Medium" className='col-span-4 md:col-span-6 md:col-start-4 text-center mb-3 md:mb-10'>
        We display products based on the latest products we have, if you want
        to see our old products please enter the name of the item
      </P>
      <MyCarousel />
      <form onSubmit={handleSubmit} id='searchForm' className="col-span-4 md:col-span-12 flex flex-col gap-y-4 md:flex-row my-3">
        <div className='relative flex items-center w-full flex-1'>
          <Search className='absolute mx-3 dark:text-white' size="24px" />
          <input value={search} onChange={handleSearch} type="text" placeholder="Search..." className="pl-12 text-p1 text-black dark:text-white dark:placeholder:text-white input w-full rounded-none ring-2 bg-transparent ring-gray-400" />
          {search && <X className='absolute right-0 mx-3' size="24px" onClick={handleClearSearch} />}
        </div>
        <div className='flex flex-1'>
          <button type='submit' form='searchForm' className='btn btn-primary rounded-none'>Find Now</button>
          <button className='btn btn-outline ml-auto mr-3 dark:hover:bg-primary dark:border-white dark:text-white'>
            <Filter className='mr-2' /><P className='hidden sm:inline'>Filter</P>
          </button>
          <Dropdown vertical='end'>
            <Dropdown.Toggle button={false} className='btn btn-outline dark:hover:bg-primary dark:border-white dark:text-white'>
              <BarChart className='mr-2 -rotate-90' /><P className='hidden sm:inline'>Sort By</P>
            </Dropdown.Toggle>
            <Dropdown.Menu className="w-52 dark:bg-gray-900 dark:border">
              {newSortByOptions.map((obj) => (
                <Dropdown.Item key={obj.id} onClick={() => handleSorting(obj.id)}>
                  <P className={`${sortBy === obj.id ? 'text-primary dark:text-white text-h5' : ''} `}>{obj.label}</P>
                </Dropdown.Item>
              ))}
            </Dropdown.Menu>
          </Dropdown>

        </div>
      </form>
      <div className='col-span-4 md:col-span-12 flex'>
        <H as="h2" className="inline-block px-2">Total Product </H>
        <Badge variant='outline' color='primary' size='lg' className='text-l1'>{data?.length}</Badge>
      </div>
      <div className='m-1 col-span-4 md:col-span-12 flex flex-row flex-wrap'>
        {data.map((data) => (
          <ProductCard
            key={data.id}
            data={data}
            className='m-2 w-72 rounded-none'
          />
        ))}
      </div>
      <MyPagination
        currentPage={pageNo}
        totalRecords={data?.length ?? 1}
        pageSize={5}
        handlePageChange={onPageChange}
        divClassName='col-span-4 md:col-span-12 mx-auto my-6'
      />
    </div>
  )
}
