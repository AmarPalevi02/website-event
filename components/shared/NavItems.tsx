"use client"

import React from 'react'
import Link from 'next/link'
import { menuLink } from '@/constants/route'
import { usePathname } from 'next/navigation'

const NavItems = () => {
   const pathName = usePathname()
   return (
      <ul className='w-full flex flex-col gap-5 items-start md:flex-row'>
         {menuLink.map((item) => {
            const isActive = pathName === item.path
            return (
               <li className={`${isActive && 'text-primary-500'} flex-center p-medium-16 whitespace-nowrap`}>
                  <Link
                     key={item.path}
                     href={`${item.path}`}
                  >
                     {item.title}
                  </Link>
               </li>
            )
         })}
      </ul>
   )
}

export default NavItems