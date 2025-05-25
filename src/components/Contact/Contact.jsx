import React from 'react';

export default function Contact() {
    return (
        <div className="relative flex items-top justify-center min-h-[400px] bg-green-50 sm:items-center sm:pt-0">
            <div className="max-w-6xl mx-auto sm:px-6 lg:px-8">
                <div className="mt-8 overflow-hidden">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="p-6 bg-green-800 rounded-lg shadow-md">
                            <h1 className="text-4xl text-green-100 font-extrabold tracking-tight">
                                Get in Touch
                            </h1>
                            <p className="text-lg font-medium text-green-200 mt-2">
                                We'd love to hear from you
                            </p>

                            <div className="flex items-center mt-8 text-green-200">
                                <svg
                                    fill="none"
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="1.5"
                                    viewBox="0 0 24 24"
                                    className="w-7 h-7"
                                >
                                    <path d="M17.657 16.657L13.414 20.9a2 2 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                    <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                                <span className="ml-4 text-md font-semibold tracking-wide">
                                    City Thana Road Near Union Bank, H No. 7/1
                                </span>
                            </div>

                            <div className="flex items-center mt-4 text-green-200">
                                <svg
                                    fill="none"
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="1.5"
                                    viewBox="0 0 24 24"
                                    className="w-7 h-7"
                                >
                                    <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                </svg>
                                <span className="ml-4 text-md font-semibold tracking-wide">
                                    +91 9350511159
                                </span>
                            </div>

                            <div className="flex items-center mt-4 text-green-200">
                                <svg
                                    fill="none"
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="1.5"
                                    viewBox="0 0 24 24"
                                    className="w-7 h-7"
                                >
                                    <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                                <span className="ml-4 text-md font-semibold tracking-wide">
                                    manuchintubhaibhai@gmail.com
                                </span>
                            </div>
                        </div>

                        <form className="p-6 bg-white rounded-lg shadow-md flex flex-col justify-center">
                            <div className="flex flex-col">
                                <label htmlFor="name" className="sr-only">
                                    Full Name
                                </label>
                                <input
                                    type="text"
                                    name="name"
                                    id="name"
                                    placeholder="Full Name"
                                    className="mt-2 py-3 px-4 rounded-lg border border-green-300 text-green-900 font-medium focus:border-green-600 focus:outline-none"
                                />
                            </div>

                            <div className="flex flex-col mt-4">
                                <label htmlFor="email" className="sr-only">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    placeholder="Email"
                                    className="mt-2 py-3 px-4 rounded-lg border border-green-300 text-green-900 font-medium focus:border-green-600 focus:outline-none"
                                />
                            </div>

                            <div className="flex flex-col mt-4">
                                <label htmlFor="tel" className="sr-only">
                                    Telephone
                                </label>
                                <input
                                    type="tel"
                                    name="tel"
                                    id="tel"
                                    placeholder="Telephone Number"
                                    className="mt-2 py-3 px-4 rounded-lg border border-green-300 text-green-900 font-medium focus:border-green-600 focus:outline-none"
                                />
                            </div>

                            <button
                                type="submit"
                                className="bg-green-700 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-lg mt-6 transition duration-300"
                            >
                                Submit
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
