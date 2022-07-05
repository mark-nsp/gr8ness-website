/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { XIcon } from '@heroicons/react/outline';

export default function MarkModal( { open, setOpen } ) {

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={setOpen}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed z-10 inset-0 overflow-y-auto">
          <div className="flex items-end sm:items-center justify-center min-h-full p-4 text-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:max-w-lg sm:w-full">
                <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                  <div className='bg-white rounded-md p-2 inline-flex items-end justify-end text-gray-400 hover:text-gray-500'>
                  <button
                    type="button"
                    className="absolute top-4 right-4 text-gray-400 hover:text-gray-500 sm:top-8 sm:right-6 md:top-6 md:right-6 lg:top-8 lg:right-8"
                    onClick={() => setOpen(false)}
                  >
                    <span className="sr-only">Close</span>
                    <XIcon className="h-6 w-6" aria-hidden="true" />
                  </button>
                  </div>
                  <div className="sm:flex sm:items-start">
                     {/* <div className="mx-auto flex-shrink-0 flex items-start justify-start h-24 w-24 sm:mx-0">
                      <img src={testimonial.imageSrc} alt='athlete' className='overflow-hidden'/>
                    </div> */}
                    <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                      <Dialog.Title as="h3" className="text-lg leading-6 font-medium text-gray-900">
                        Bio
                      </Dialog.Title>
                      <hr />
                      <Dialog.Description as='p' className='font-medium text-gray-700 overflow-auto max-h-96'>
                            <p>For close to twenty-five years Mark has been coaching, training, and mentoring athletes from junior high, high school, college and beyond. 
                                He’s done this across Canada & the United States. For the last ten years he has served as the athletic development coach at North Shore Country Day School. 
                                Working with all the varsity teams and helping them prepare, progress, and then perform at the state championship level in field hockey, soccer, basketball, tennis, golf, and track.<br />
                                <br />
                                Helping athletes pursue their greatness is what Mark loves more than anything, except for his wife of twenty-one years, and his three children. 
                                When he is not in a weight room, on a court or a field, he is usually playing games and spending time with his family.<br />
                                <br />
                            </p>

                      </Dialog.Description>
                      <Dialog.Title as="h3" className="text-lg leading-6 font-medium text-gray-900">
                        Certifications
                      </Dialog.Title>
                      <hr />
                      <Dialog.Description as='p' className='font-medium text-gray-700 max-h-96'>
                                <ul className='list-none'>
                                    <li><b>BS</b> - Youth Ministry</li>
                                    <br />
                                    <li><b>MA</b> - Entreprenurial Leadership</li>
                                    <br />
                                    <li><b>EXOS</b> - Performance Specialist</li>
                                    <br />
                                    <li><b>National Academy of Sports Medicine</b> - Performance Specialist & Corrective Exercise Specialist</li>
                                    <br />
                                    <li><b>National Sports Performance Association</b> - Speed and Agility Coach</li>
                                    <br />
                                    <li>Positive Performance Certified Mindset Coach & Performance Visualization Specialist</li>
                                    <br />
                                    <li>CPR/AED and First Aid Certified</li>
                                    <br />
                                    </ul>
                      </Dialog.Description>
                    </div>
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  )
}
