import React from 'react'
import { Heading } from '../elements/Heading'
import { List } from '../elements/List'

export default function NavbarLayout() {
  const navItems = [
    { to: '', title: 'About' },
    { to: '', title: 'Articles' },
    { to: '', title: 'Services' },
    { to: '', title: 'Contact' },
  ]

  return (
    <>
      <nav className="flex justify-evenly items-center mb-12 py-5 shadow bg-gray-100">
        <div className="flex items-center space-x-2">
          <Heading title='Tuxedo Labs' className='text-xl font-bold' />
        </div>
        <ul className="flex space-x-6">
          {navItems.map((item, index) => (
            <List
              key={index}
              className='text-gray-600 hover:text-gray-800 cursor-pointer'
              to={item.to}
              title={item.title}
            />
          ))}
        </ul>
      </nav>
    </>
  )
}

