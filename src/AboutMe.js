/* This example requires Tailwind CSS v2.0+ */
import { GiStrong } from 'react-icons/gi';
import { BiBrain } from 'react-icons/bi';
import { FaRegHeart } from 'react-icons/fa';

const features = [
  {
    name: 'Training the Body',
    description:
      'Maximize your athleticism to be able to do what you want to do on the playing field',
    icon: GiStrong,
  },
  {
    name: 'Training the Mind',
    description:
      'Developing the Mindset & Mental Skills so that you consistently bring your best when it matters most to you', //I believe this piece is the most important and the least trained. It’s what sets apart the best from the rest',
    icon: BiBrain,
  },
  {
    name: 'Connecting to the Heart',
    description:
      'Know who you are and who desire to become',// This is what I believe enables us to tap into our limitless potential. The desires that lie within and are unique to each one of us. Uncovering what is in your heart (who you truly are and desire to be) I believe is the first step towards realizing who you are capable of becoming',
    icon: FaRegHeart,
  },
]

export default function AboutMe() {
  return (
    <div id='about-me' className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 data-testid='mark' className="text-base text-blue-600 font-semibold tracking-wide uppercase">
            {/* Mark Medhurst */}
          </h2>
          <p aria-label='description' className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-blue-600 sm:text-4xl">
            {/* More than a personal trainer */}
            Keys to limitless potential
          </p>
          <p aria-label='content' className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
          {/* For over 20 years Mark has been coaching, training, and mentoring athletes from junior high through college and beyond */}
          </p>
        </div>

        <div className="mt-10">
          <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-1 md:gap-x-8 md:gap-y-10">
            {features.map((feature) => (
              <div 
                  key={feature.name} 
                  className="relative"
                  aria-label={feature.name}
              >
                <dt>
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-blue-600 text-white">
                    <feature.icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <p className="ml-16 text-lg leading-6 font-medium text-gray-900">{feature.name}</p>
                </dt>
                <dd className="mt-2 ml-16 text-lg text-gray-500">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}
