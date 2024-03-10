import Link from "next/link"
import Image from 'next/image'

const Footer = () => {
   return (
      <footer className="border-t">
         <div className="flex flex-col gap-4 p-5 text-center flex-center flex-between wrapper sm:flex-row">
            <Link href={'/'} className="flex gap-2">
               <Image
                  src={'/assets/icons/logo.png'}
                  width={32}
                  height={30}
                  alt='logo'
               />
               <h3 className='text-2xl font-bold text-[#FF00FF]'>Marzkyy</h3>
            </Link>
            <p>2024 Evently. All Rights reserved.</p>
         </div>
      </footer>
   )
}

export default Footer