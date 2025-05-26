import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
    return (
        <div className="mx-auto w-full max-w-7xl">
            {/* Hero Section */}
            <aside className="relative bg-green-50 text-green-900 rounded-lg border border-green-300 overflow-hidden sm:mx-16 mx-2 sm:py-24 py-20 shadow-md min-h-[700px] sm:min-h-[750px]">
                <div className="relative z-10 max-w-screen-xl px-4 pt-10 pb-20 sm:pt-28 sm:pb-32 mx-auto sm:px-6 lg:px-8">
                    <div className="max-w-xl mt-[30rem] sm:mt-1 space-y-10 text-center sm:text-right sm:ml-auto">
                        <h2 className="text-5xl sm:text-6xl font-extrabold text-green-700 leading-snug">
                            Join the Cause
                            <span className="block text-green-900 text-3xl sm:text-5xl mt-2">
                                Help Save Wildlife Today
                            </span>
                        </h2>

                        <Link
                            to="/donate"
                            className="inline-flex items-center px-7 py-4 text-lg text-white font-semibold bg-green-700 rounded-lg hover:bg-green-800 transition duration-300"
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

                {/* Image on the left — preserved with increased width */}
                <div className="absolute inset-0 flex items-center sm:my-20 sm:pt-1 pt-12 justify-start">
                    <img
                        src="/Home.png"
                        alt="Panda Illustration"
                        className="w-[20rem] sm:w-[32rem] opacity-95 ms-4 sm:ms-16"
                    />
                </div>
            </aside>

            {/* Tagline */}
            <h1 className="text-center text-3xl sm:text-6xl font-semibold text-green-700 py-12 sm:py-16 px-4">
                Compassion for Every Creature
            </h1>
        </div>
    );
}
