export default function About() {
    return (
        <div className="bg-green-50 border-t-4 border-green-300">
            <div className="container m-auto px-6 text-green-900 md:px-12 xl:px-6">
                <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12 p-6 rounded-xl border border-green-200 shadow-md bg-white/70 backdrop-blur">
                    {/* Left Image */}
                    <div className="md:w-5/12 lg:w-5/12">
                        <img
                            src="/About.png"
                            alt="Panda and Vulture"
                            className="rounded-xl shadow-xl w-96 ms-12 py-20 sm:ms-0 sm:py-0"
                        />
                    </div>

                    {/* Right Text Content */}
                    <div className="md:w-7/12 lg:w-6/12">
                        <h2 className="text-2xl text-green-700 font-extrabold md:text-4xl">
                            Dedicated to Protecting and Caring for Wildlife
                        </h2>
                        <p className="mt-6 text-green-800 leading-relaxed">
                            At Wildlife Rescue Foundation, our mission is to rescue, rehabilitate, and provide
                            a safe haven for vulnerable creatures like pandas, vultures, and many others.
                        </p>
                        <p className="mt-4 text-green-800 leading-relaxed">
                            Through dedicated conservation efforts, education programs, and community action,
                            we’re working to create a future where all wildlife is respected and protected.
                            Join us in safeguarding nature’s most precious lives.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
