import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { BsLinkedin } from 'react-icons/bs';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_9tkk13k', 'template_ltd23uc', form.current, 'lXcXRP9Iow46XsrCa')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <div id='contact' className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className='grid grid-flow gap-4 justify-items-end'>
            <div className='col-span-2 ' >
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-blue-600 sm:text-4xl ">
            Contact Me
          </p>
            </div>
            <div className='row-span-1'>
                <div>
                    Mark Medurst
                </div>
                <div>
                    Personal Trainer
                </div>
                <div >
                    <BsLinkedin />
                </div>
                <form ref={form} onSubmit={sendEmail}>
                    <label className="block text-sm font-medium text-gray-700">
                    Name
                    </label>
                    <div className="mt-1 relative rounded-md shadow-sm mb-1">
                        <input 
                            type="text" 
                            name="name" 
                            className="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
                            placeholder='John Smith'
                        />
                    </div>
                    <label className="block text-sm font-medium text-gray-700">
                        Email
                    </label>
                    <div className="mt-1 relative rounded-md shadow-sm border-red-500 mb-2">
                    <input 
                        type="email" 
                        name="email"
                        className="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
                        placeholder='you@example.com'
                    />
                    </div>
                    <input 
                    type="submit"
                    value="Send"
                    className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    />
                </form>
            </div>
            <div className='col-span-1 row-span-2'>
                <div className="w-fit aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
                    <img 
                        className="w-6/12 h-full object-center object-cover group-hover:opacity-75" 
                        src='https://i.insider.com/5dc062b0e0ee7e11ec66b543?width=1136&format=jpegs'
                        />
                    </div>
            </div>

        </div>
    </div>
  );
};

export default Contact;