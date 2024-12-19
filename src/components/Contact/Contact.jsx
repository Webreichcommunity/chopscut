import React, { useState } from 'react';
import { motion } from 'framer-motion';
// import { Pagination } from '../pagination/Pagination';

export const Contact = () => {
  const [messageSent, setMessageSent] = useState(false);

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "49dfa941-0704-4a4a-9210-872f1bb719c0");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      console.log("Success", res);
      setMessageSent(true);
      event.target.reset(); // Reset the form
    }
  };

  const encodedAddress = encodeURIComponent('Lahariya Nagar Kaulkhed Akola Maharashtra');
  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodedAddress}`;

  return (
    <>
      <div className="mx-auto max-w-7xl px-4 bg-white text-gray-900 py-2">
        <div className="mx-auto max-w-7xl py-12 md:py-24">
          <div className="grid items-center justify-items-center gap-x-4 gap-y-10 lg:grid-cols-2">
            <motion.div
              className="flex items-center justify-center"
              initial={{ opacity: 0, y: -100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              <div className="px-5 md:px-12 bg-white py-10 rounded-lg text-black">
                <p className="text-2xl font-bold text-gray-900 md:text-4xl">Get in touch</p>
                <p className="mt-4 text-lg text-gray-600">
                  Our friendly team would love to hear from you.
                </p>
                {messageSent ? (
                  <p className="text-green-500">Message sent successfully!</p>
                ) : (
                  <form onSubmit={onSubmit} className="mt-8 space-y-4">
                    <div className="grid w-full items-center gap-1.5">
                      <label
                        className="text-sm font-medium leading-none text-gray-700"
                        htmlFor="first_name"
                      >
                        Name
                      </label>
                      <input
                        className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 text-gray-800"
                        type="text"
                        name='name'
                        id="first_name"
                        placeholder="First Name"
                      />
                    </div>
                    <div className="grid w-full items-center gap-1.5">
                      <label
                        className="text-sm font-medium leading-none text-gray-700"
                        htmlFor="email"
                      >
                        Email
                      </label>
                      <input
                        className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 text-gray-800"
                        type="email"
                        name="email"
                        id="email"
                        placeholder="Your Email"
                      />
                    </div>
                    <div className="grid w-full items-center gap-1.5">
                      <label
                        className="text-sm font-medium leading-none text-gray-700"
                        htmlFor="phone_number"
                      >
                        Phone number
                      </label>
                      <input
                        className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 text-gray-800"
                        type="tel"
                        id="phone_number"
                        name='phone_number'
                        placeholder="Your Phone Number"
                      />
                    </div>
                    <div className="grid w-full items-center gap-1.5">
                      <label
                        className="text-sm font-medium leading-none text-gray-700"
                        htmlFor="message"
                      >
                        Message
                      </label>
                      <textarea
                        className="flex w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 text-gray-800"
                        id="message"
                        name="message"
                        placeholder="Your Message"
                        rows={3}
                      />
                    </div>
                    <button
                      type="submit"
                      className="w-full rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                    >
                      Send Message
                    </button>
                  </form>
                )}
              </div>
            </motion.div>
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: -100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              <p className="text-lg font-semibold text-gray-400">Address</p>
              <p className="mt-2 text-base text-gray-400">
                Lahariya Nagar, Kaulkhed, Akola, Maharashtra
              </p>
              <a
                href={mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 block text-blue-400 hover:underline"
              >
                Open in Google Maps
              </a>
              <p className="mt-4 text-lg font-semibold text-gray-400">Contact</p>
              <p className="mt-2 text-base text-gray-400">+91-8668722207</p>
            </motion.div>
          </div>
        </div>
        {/* <Pagination result={"About"} next={"/coffee"} prev={"/projects"} className='my-10 p-10'/> */}
      </div>
    </>
  );
};