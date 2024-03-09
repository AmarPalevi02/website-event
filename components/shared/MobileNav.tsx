import React from 'react'
import Image from 'next/image'

import {
   Sheet,
   SheetContent,
   SheetDescription,
   SheetHeader,
   SheetTitle,
   SheetTrigger,
} from "@/components/ui/sheet"
import { Separator } from '../ui/separator'
import NavItems from './NavItems'

const MobileNav = () => {
   return (
      <nav className='md:hidden'>
         <Sheet>
            <SheetTrigger className='align-middle'>
               <Image
                  src={'/assets/icons/menu.svg'}
                  alt='menu'
                  width={24}
                  height={24}
                  className='cursor-pointer'
               />
            </SheetTrigger>
            <SheetContent className='flex flex-col bg-white gap-6 md:hidden '>
               <div className="flex gap-2">
                  <Image
                     src={'/assets/icons/logo.png'}
                     width={32}
                     height={30}
                     alt='logo'
                  />
                  <h3 className='text-2xl font-bold text-[#FF00FF]'>Marzkyy</h3>
               </div>
               <Separator className='border border-gray-50' />
               <NavItems />
            </SheetContent>
         </Sheet>

      </nav>
   )
}

export default MobileNav