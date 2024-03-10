import { Button } from "@/components/ui/button";
import Image from 'next/image'
import Link from 'next/link'


export default function Home() {
  return (
    <>
      <section className="bg-primary-50 bg-dotted-pattern bg-contain py-5 md:py-10">
        <div className="wrapper grid grid-cols-1 gap-5 md:grid-cols-2 2xl:gap-0">
          <div className="flex flex-col gap-8 justify-center">
            <h1 className="h1-bold">Host, Connect, Celebrate: Your Events, Our Platform!</h1>
            <p className="p-regular-20 md:p-regular-24">Book and learn helpful tips from 3,168+ mentors in world-class companies with our global community.</p>
            <Button size={'lg'} className="button w-full sm:w-fit">
              <Link href={'/'}>
                Explore Now
              </Link>
            </Button>
          </div>

          <Image
            src={'/assets/images/herro.png'}
            width={1000}
            height={1000}
            alt="herro"
            className="max-h-[70vh] object-contain object-center 2zl:-h-[50vh]"
          />
        </div>
      </section>

      <section className="wrapper my-8 flex flex-col gap-8 md:gap-12">
        <h2 className="h2-bold">Trust by <br /> Thousands of Events</h2>
        <div className="w-full flex flex-col md:flex-row">
          <p>Search</p>
          <p>Catgeory</p>
        </div>
      </section>
    </>
  );
}
