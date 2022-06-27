import { Fragment, useRef, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { ExclamationIcon } from '@heroicons/react/outline'
import TestimonialModal from './TestimonialModal';
import morrette from './assets/morrette.jpeg';
import nick from './assets/nick.jpg';
import john from './assets/john.jpg';
import basse from './assets/basse.jpg';
import frei from './assets/frei.jpg';
import tanner from './assets/tanner.JPG';
import jess from './assets/jess.jpeg';
import bernie from './assets/bernie.jpg';

const testimonials = [
    {
      id: 1,
      name: 'Matt Morrette',
      sport: 'Basketball',
      imageSrc: morrette,
      imageAlt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
    },
    {
      id: 2,
      name: 'Nick Potter',
      sport: 'Basketball',
      imageSrc: nick,
      imageAlt: 'Olive drab green insulated bottle with flared screw lid and flat top.',
    },
    {
      id: 3,
      name: 'John Smith',
      sport: 'Basketball',
      imageSrc: john,
      imageAlt: 'Person using a pen to cross a task off a productivity paper card.',
    },
    {
      id: 4,
      name: 'Jessica Hourahaine',
      sport: 'Field Hockey',
      imageSrc: jess,
      imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
    },
    {
      id: 5,
      name: 'Tanner Chassman',
      sport: 'Soccer',
      imageSrc: tanner,
      imageAlt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
    },
    {
      id: 6,
      name: 'Bernie Sander',
      sport: 'Football',
      imageSrc: bernie,
      imageAlt: 'Olive drab green insulated bottle with flared screw lid and flat top.',
    },
    {
      id: 7,
      name: 'Evan Basse',
      sport: 'Basketball',
      imageSrc: basse,
      imageAlt: 'Person using a pen to cross a task off a productivity paper card.',
    },
    {
      id: 4,
      name: 'Alexander Freiburger',
      sport: 'Basketball',
      imageSrc: frei,
      imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
    },
  ]
  
  export default function Testimonials() {
    const [open, setOpen] = useState(false);
    const [curTestimonial, setCurTestimonial] = useState(testimonials[0]);

    return (
      <div id='testimonials' className="bg-white">
        <div className="max-w-2xl mx-auto py-16 px-4 sm:py-16 sm:px-6 lg:max-w-7xl lg:px-8">
          <h2 className="sr-only">Testimonials</h2>
          <p className="my-2 text-3xl leading-8 font-extrabold tracking-tight text-blue-600 sm:text-4xl">
            Testimonials
          </p>
          <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} onClick={() => { setOpen(true); setCurTestimonial(testimonial)} } className="group">
                <div className="w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
                  <img
                    src={testimonial.imageSrc}
                    alt={testimonial.imageAlt}
                    aria-label={testimonial.name}
                    className="w-full h-full object-center object-cover group-hover:opacity-75"
                  />
                </div>
                <h3 className="mt-4 text-sm text-gray-700">{testimonial.name}</h3>
                <p className="mt-1 text-lg font-medium text-gray-900">{testimonial.sport}</p>
              </div>
            ))}
          </div>
        </div>


        <TestimonialModal open={open} setOpen={setOpen} testimonial={curTestimonial}/>
      </div>
    )
  }
  