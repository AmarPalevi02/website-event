
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

import { SignedOut, SignedIn, UserButton } from '@clerk/nextjs'
import { Button } from '../ui/button'
import NavItems from './NavItems'
import MobileNav from './MobileNav'

const Header = () => {
   return (
      <header className="w-full border-b">
         <div className="wrapper flex items-center justify-between ">
            <Link
               href={'/'}
               className='flex gap-2'
            >
               <Image
                  src={'/assets/icons/logo.png'}
                  width={32}
                  height={30}
                  alt='logo'
               />
               <h3 className='text-2xl font-bold text-[#FF00FF]'>Marzkyy</h3>
            </Link>
            
            <SignedIn>
               <nav className='hidden md:flex-between w-full max-w-xs'>
                  <NavItems />
               </nav>
            </SignedIn>

            <div className="flex justify-end w-32 ">
               <SignedIn >
                     <UserButton afterSignOutUrl="/" />
                     <MobileNav />
               </SignedIn>
               <SignedOut>
                  <Button className='rounded-full' size={'lg'}>
                     <Link href={'/sign-in'}>
                        Sign-in
                     </Link>
                  </Button>
               </SignedOut>
            </div>
         </div>
      </header>
   )
}
   
export default Header