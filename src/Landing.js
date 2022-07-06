/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'
import logo from './logo.svg';
import collage from './assets/collage.jpg';
// import collage1 from './assets/collage1.jpg';
// import collage2 from './assets/collage2.jpg';


const navigation = [
  { name: 'Methodology', href: 'methodology' },
  { name: 'Testimonials', href: 'testimonials' },
]

export default function Landing( {testFunc} ) {
  return (
    <div className="relative bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
          <svg
            className="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-white transform translate-x-1/2"
            fill="currentColor"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <polygon points="50,0 100,0 50,100 0,100" />
          </svg>

          <Popover>
            <div className="relative pt-6 px-4 sm:px-6 lg:px-8">
              <div className="relative flex items-center justify-between sm:h-10 lg:justify-start" aria-label="Global">
                <div className="flex items-center flex-grow flex-shrink-0 lg:flex-grow-0">
                  <div className="flex items-center justify-between w-full md:w-auto">
                    <div href="#">
                      <span className="sr-only">Workflow</span>
                      <img
                        alt="PGR8"
                        className="h-14 w-auto sm:h-14"
                        src={logo}
                      />
                    </div>
                    <div className="-mr-2 flex items-center md:hidden">
                      <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                        <span className="sr-only">Open main menu</span>
                        <MenuIcon className="h-6 w-6" aria-hidden="true" />
                      </Popover.Button>
                    </div>
                  </div>
                </div>
                  {navigation.map((item) => (
                    <div 
                        href={item.href} 
                        onClick={() => testFunc ? testFunc() : document.getElementById(item.href).scrollIntoView({behavior: 'smooth'})} 
                        className="hidden font-medium text-gray-500 hover:text-gray-900 pr-5 md:block hover:cursor-pointer"
                        aria-label={item.name + 'Full'}
                        >
                      {item.name}
                    </div>
                  ))}
                  <div data-testid='contact' href="contact" onClick={() => testFunc ? testFunc() : document.getElementById('contact').scrollIntoView({behavior: 'smooth'})} className="hidden md:contents font-medium text-blue-600 hover:text-yellow-500 hover:cursor-pointer">
                    Contact
                  </div>
              </div>
            </div>

            <Transition
              as={Fragment}
              enter="duration-150 ease-out"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="duration-100 ease-in"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Popover.Panel
                focus
                className="absolute z-10 top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
              >
                <div className="rounded-lg shadow-md bg-white ring-1 ring-black ring-opacity-5 overflow-hidden">
                  <div className="px-5 pt-4 flex items-center justify-between">
                    <div>
                      <img
                        className="h-8 w-auto"
                        src={logo}
                        alt=""
                      />
                    </div>
                    <div className="-mr-2">
                      <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                        <span className="sr-only">Close main menu</span>
                        <XIcon className="h-6 w-6" aria-hidden="true" />
                      </Popover.Button>
                    </div>
                  </div>
                  <div className="px-2 pt-2 pb-3 space-y-1">
                    {navigation.map((item) => (
                      <div
                        key={item.name}
                        href={item.href}
                        aria-label={item.name + "Small"}
                        onClick={() => testFunc ? testFunc() : document.getElementById(item.href).scrollIntoView({behavior: 'smooth'})}
                        className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 hover:cursor-pointer"
                      >
                        {item.name}
                      </div>
                    ))}
                  </div>
                  <div
                    href="contact" onClick={() => testFunc ? testFunc() : document.getElementById('contact').scrollIntoView({behavior: 'smooth'})}
                    className="block w-full px-5 py-3 text-center font-medium text-blue-600 bg-gray-50 hover:bg-gray-100 hover:cusor-pointer"
                  >
                    Contact
                  </div>
                </div>
              </Popover.Panel>
            </Transition>
          </Popover>

          <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
            <div className="sm:text-center lg:text-left">
              <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-5xl">
                <span className="block inline">Helping Aspiring Athletes</span>
                <br />
                <span className="block text-blue-600 inline">Unlock Their Greatness</span>
              </h1>
              <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
              Training their <b>Body & Mind</b> while connecting to their <b>Heart</b> <br />
              Tapping into their <b>Limitless Potential</b> <br /> 
              {/* Empowering them to bring <b>Their Best</b> when it <b>Matters Most</b> <br />
              <b>On & Off</b> the playing field */}

              </p>
              <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                <div className="rounded-md shadow">
                  <div
                    href="contact" onClick={() => testFunc ? testFunc() : document.getElementById('contact').scrollIntoView({behavior: 'smooth'})}
                    className="w-full flex items-/center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-gray-500 md:py-4 md:text-lg md:px-10 hover:cursor-pointer"
                  >
                    Get in touch
                  </div>
                </div>
                <div className="mt-3 sm:mt-0 sm:ml-3">
                  <div
                    href='testimonials' onClick={() => testFunc ? testFunc() : document.getElementById('testimonials').scrollIntoView({behavior: 'smooth'})}
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-blue-700 bg-yellow-300 hover:bg-gray-200 md:py-4 md:text-lg md:px-10 hover:cursor-pointer"
                    aria-label='testimonialsButton'
                  >
                    Testimonials
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
      <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
        <img
          className="h-56 w-full object-cover overflow-auto sm:h-72 md:h-96 lg:w-full lg:h-full"
          src={collage}
          alt=""
        />

      </div>
    </div>
  )
}
