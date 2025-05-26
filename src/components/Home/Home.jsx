import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
    return (
        <div className="mx-3 w-full max-w-7xl">
            {/* Hero Section */}
            <aside className="relative bg-green-50 text-green-900 rounded-lg border border-green-300 overflow-hidden sm:mx-16 mx-2 sm:py-20 py-4 shadow-md min-h-[600px] sm:min-h-[700px]">
                <div className="relative z-10 max-w-screen-xl px-1 pt-2 sm:pt-10 pb-8 sm:pb-12 mx-auto sm:px-6 lg:px-8">
                    {/* Text block - hidden on mobile */}
                    <div className="hidden sm:block max-w-xl space-y-8 text-right ml-auto">
                        <h2 className="text-4xl sm:text-5xl font-extrabold text-green-700 leading-tight">
                            Join the Cause
                            <span className="block text-green-900 text-3xl sm:text-4xl mt-2">
                                Help Save Wildlife Today
                            </span>
                        </h2>
                    </div>

                    {/* Donate button - always visible */}
                    <div className="mt-6 sm:mt-10 text-center sm:text-right sm:ml-auto">
                        <Link
                            to="/donate"
                            className="inline-flex items-center px-6 py-3 text-white font-semibold bg-green-700 rounded-lg hover:bg-green-800 transition duration-300"
                        >
                            <svg
                                fill="white"
                                width="24"
                                height="24"
                                xmlns="http://www.w3.org/2000/svg"
                                fillRule="evenodd"
                                clipRule="evenodd"
                            >
                                <path d="M1.571 23.664l10.531-10.501 3.712 3.701-12.519 6.941c-.476.264-1.059.26-1.532-.011l-.192-.13zm9.469-11.56l-10.04 10.011v-20.022l10.04 10.011zm6.274-4.137l4.905 2.719c.482.268.781.77.781 1.314s-.299 1.046-.781 1.314l-5.039 2.793-4.015-4.003 4.149-4.137zm-15.854-7.534c.09-.087.191-.163.303-.227.473-.271 1.056-.275 1.532-.011l12.653 7.015-3.846 3.835-10.642-10.612z" />
                            </svg>
                            <span className="ml-2">Donate Now</span>
                        </Link>
                    </div>
                </div>

                {/* Image — left aligned, slightly smaller */}
                <div>
                    <img
                        src="/Home.png"
                        alt="Panda Illustration"
                        className="w-[16rem] sm:w-[24rem] opacity-95 ms-4 sm:ms-16"
                    />
                </div>
            </aside>

            {/* Tagline */}
            <h1 className="text-center text-2xl sm:text-5xl font-semibold text-green-700 py-8 sm:py-12 px-4">
                Compassion for Every Creature
            </h1>
        </div>
    );
}
