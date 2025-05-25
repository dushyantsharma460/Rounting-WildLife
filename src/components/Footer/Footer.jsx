import { Link } from 'react-router-dom';

function Footer() {
    return (
        <footer className="bg-green-50 border-t border-green-300 shadow-inner">
            <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
                <div className="md:flex md:justify-between">
                    <div className="mb-6 md:mb-0">
                        <Link to="/" className="flex items-center">
                            <img
                                src="public/Logo.png"
                                className="mr-3 h-16 rounded-md shadow-sm"
                                alt="Vulture and Panda Logo"
                            />
                            <span className="self-center text-2xl font-semibold whitespace-nowrap text-green-700">
                                Animal Welfare
                            </span>
                        </Link>
                        <p className="mt-2 text-sm text-green-900">
                            © 2025 dushyantsharma460. All Rights Reserved.
                        </p>
                    </div>
                    <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-green-700 uppercase">Resources</h2>
                            <ul className="text-green-900 font-medium">
                                <li className="mb-4">
                                    <Link to="/" className="hover:underline hover:text-green-600 transition duration-200">
                                        Home
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/about" className="hover:underline hover:text-green-600 transition duration-200">
                                        About
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-green-700 uppercase">Follow us</h2>
                            <ul className="text-green-900 font-medium">
                                <li className="mb-4">
                                    <a
                                        href="https://github.com/dushyantsharma460"
                                        className="hover:underline hover:text-green-600 transition duration-200"
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        Github
                                    </a>
                                </li>
                                <li>
                                    <Link to="/" className="hover:underline hover:text-green-600 transition duration-200">
                                        Research Papers
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-green-700 uppercase">Legal</h2>
                            <ul className="text-green-900 font-medium">
                                <li className="mb-4">
                                    <Link to="#" className="hover:underline hover:text-green-600 transition duration-200">
                                        Privacy Policy
                                    </Link>
                                </li>
                                <li>
                                    <Link to="#" className="hover:underline hover:text-green-600 transition duration-200">
                                        Terms &amp; Conditions
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <hr className="my-6 border-green-300 sm:mx-auto lg:my-8" />
            </div>
        </footer>
    );
}

export default Footer;
