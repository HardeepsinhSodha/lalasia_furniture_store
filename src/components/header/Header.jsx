import React from 'react'
import { NavLink } from 'react-router-dom'
import { User, ShoppingCart, Menu } from 'react-feather'
import Logo from '../ui-elements/Logo'
import ToggleThemeButton from '../ui-elements/ToggleThemeButton'
import { Dropdown, Indicator, Badge, Button, Card } from 'react-daisyui'

export default function Header() {
  return (
    <nav className='container sticky top-0 z-50 bg-white dark:bg-gray-900 mx-auto flex p-4 items-center '>
      <Logo />
      <div className="hidden md:flex-1 md:flex justify-evenly">
        <MyNavLink to='/product'>Product</MyNavLink>
        <MyNavLink to='/services'>Services</MyNavLink>
        <MyNavLink to='/article'>Article</MyNavLink>
        <MyNavLink to='/about-us'>About Us</MyNavLink>
      </div>
      <div className="ml-auto">
        <ToggleThemeButton />
        <CartDropdown />
        <div className='hidden md:inline'>
          <Dropdown vertical="end" >
            <button className='btn btn-square btn-link text-black dark:text-white'>
              <User />
            </button>
            <Dropdown.Menu className="w-52 menu-compact">
              <Dropdown.Item>Profile</Dropdown.Item>
              <Dropdown.Item>Settings</Dropdown.Item>
              <Dropdown.Item>Logout</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
        <div className='inline md:hidden'>
          <Dropdown vertical="end" >
            <button className='btn btn-square btn-link text-black dark:text-white'>
              <Menu />
            </button>
            <Dropdown.Menu className="w-40 menu-compact">
              <Dropdown.Item href='/product' className='text-p1'>Product</Dropdown.Item>
              <Dropdown.Item href='/services' className='text-p1'>Services</Dropdown.Item>
              <Dropdown.Item href='/article' className='text-p1'>Article</Dropdown.Item>
              <Dropdown.Item href='/about-us' className='text-p1'>About Us</Dropdown.Item>
              <div className='divider'></div>
              <Dropdown.Item>Profile</Dropdown.Item>
              <Dropdown.Item>Settings</Dropdown.Item>
              <Dropdown.Item>Logout</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </div>
    </nav>
  )
}

const label = 'text-l1 font-EMedium hover:text-secondary dark:hover:text-secondary'
const activeLabel = `${label} text-secondary dark:text-secondary`
const inactiveLable = `${label} dark:text-white`

const MyNavLink = ({ children, to }) => {
  return (
    <NavLink
      className={({ isActive }) => isActive ? activeLabel : inactiveLable}
      to={to}
    >
      {children}
    </NavLink>
  )
}
const CartDropdown = () => {
  return (
    <Dropdown vertical="end">
      <button className='btn btn-square btn-link text-black dark:text-white'>
        <Indicator item={<Badge size="sm">8</Badge>}>
          <ShoppingCart />
        </Indicator>
      </button>
      <Dropdown.Menu
        tabIndex={0}
        className="mt-3 card card-compact  w-52 bg-base-100 !p-0"
      >
        <Card.Body className="card-body">
          <span className="font-bold text-lg">8 Items</span>
          <span className="text-info">Subtotal: $999</span>
          <Card.Actions>
            <Button color="primary" fullWidth>
              View cart
            </Button>
          </Card.Actions>
        </Card.Body>
      </Dropdown.Menu>
    </Dropdown>
  )
}