import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
    return (
        <div className="bg-green-50 border-t-4 border-green-300 min-h-screen">
            <div className="container mx-auto px-6 md:px-12 xl:px-6">

                {/* Outer wrapper with light green background and padding */}
                <div className="p-4 sm:p-6 bg-green-100 rounded-2xl">
                    <div
                        className="flex flex-col sm:flex-row items-center gap-8 p-4 sm:p-6 rounded-xl border border-green-200 shadow-md bg-white"
                        style={{ position: 'relative' }} // added relative position
                    >
                        {/* Image on the left - no extra bg */}
                        <div className="sm:w-5/12 px-2 sm:px-4" style={{ backgroundColor: '#def7de' }}>
                            <img
                                src="/Home.png"
                                alt="Panda Illustration"
                                className="rounded-xl shadow-xl w-full max-w-md mx-auto"
                            />
                        </div>

                        {/* Text and Donate button on the right */}
                        <div
                            className="sm:w-7/12 text-center sm:text-right px-2 sm:px-0"
                            style={{ backgroundColor: '#f0fff0', minWidth: '300px' }} // debug bg & min width
                        >
                            <h2
                                className="text-3xl sm:text-5xl font-extrabold text-green-700 leading-tight"
                                style={{ position: 'relative', zIndex: 10, backgroundColor: 'white' }}
                            >
                                Join the Cause
                                <span className="block text-green-900 text-2xl sm:text-4xl mt-2">
                                    Help Save Wildlife Today
                                </span>
                            </h2>

                            <div className="mt-8">
                                <Link
                                    to="/donate"
                                    className="inline-flex items-center px-8 py-4 text-lg sm:text-xl text-white font-semibold bg-green-700 rounded-lg hover:bg-green-800 transition duration-300 shadow-md"
                                >
                                    <svg
                                        fill="white"
                                        width="28"
                                        height="28"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                    >
                                        <path d="M1.571 23.664l10.531-10.501 3.712 3.701-12.519 6.941c-.476.264-1.059.26-1.532-.011l-.192-.13zm9.469-11.56l-10.04 10.011v-20.022l10.04 10.011zm6.274-4.137l4.905 2.719c.482.268.781.77.781 1.314s-.299 1.046-.781 1.314l-5.039 2.793-4.015-4.003 4.149-4.137zm-15.854-7.534c.09-.087.191-.163.303-.227.473-.271 1.056-.275 1.532-.011l12.653 7.015-3.846 3.835-10.642-10.612z" />
                                    </svg>
                                    <span className="ml-3">Donate Now</span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Tagline */}
                <h1 className="text-center text-2xl sm:text-5xl font-semibold text-green-700 py-8 px-4">
                    Compassion for Every Creature
                </h1>
            </div>
        </div>
    );
}
