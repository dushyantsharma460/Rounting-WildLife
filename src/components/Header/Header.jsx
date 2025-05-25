import { Link, NavLink } from "react-router-dom";

export default function Header() {
    return (
        <header className="shadow-md sticky z-50 top-0 bg-green-50">
            <nav className="bg-green-100 border-b border-green-300 px-6 py-3">
                <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
                    <Link to="/" className="flex items-center">
                        <img
                            src="public/Logo.png"
                            className="mr-4 h-16 rounded-lg shadow"
                            alt="Animal Welfare Logo"
                        />
                        <span className="text-green-700 text-2xl font-extrabold tracking-wide">Animal Welfare</span>
                    </Link>
                    <div className="flex items-center lg:order-2 space-x-3">
                        <Link
                            to="#"
                            className="text-green-700 border border-green-700 hover:bg-green-700 hover:text-white focus:ring-4 focus:ring-green-200 font-semibold rounded-lg text-sm px-5 py-2.5 focus:outline-none transition duration-300"
                        >
                            Volunteer
                        </Link>
                        <Link
                            to="#"
                            className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-200 font-semibold rounded-lg text-sm px-5 py-2.5 focus:outline-none transition duration-300"
                        >
                            Donate
                        </Link>
                    </div>
                    <div className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1" id="mobile-menu-2">
                        <ul className="flex flex-col mt-5 font-semibold lg:flex-row lg:space-x-10 lg:mt-0">
                            <li>
                                <NavLink
                                    to="/"
                                    className={({ isActive }) =>
                                        `block py-3 px-4 rounded-md ${
                                            isActive
                                                ? "text-green-700 bg-green-200"
                                                : "text-green-800 hover:text-green-700 hover:bg-green-100"
                                        } transition duration-300`
                                    }
                                >
                                    Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/about"
                                    className={({ isActive }) =>
                                        `block py-3 px-4 rounded-md ${
                                            isActive
                                                ? "text-green-700 bg-green-200"
                                                : "text-green-800 hover:text-green-700 hover:bg-green-100"
                                        } transition duration-300`
                                    }
                                >
                                    Our Mission
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/contact"
                                    className={({ isActive }) =>
                                        `block py-3 px-4 rounded-md ${
                                            isActive
                                                ? "text-green-700 bg-green-200"
                                                : "text-green-800 hover:text-green-700 hover:bg-green-100"
                                        } transition duration-300`
                                    }
                                >
                                    Contact Us
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/github"
                                    className={({ isActive }) =>
                                        `block py-3 px-4 rounded-md ${
                                            isActive
                                                ? "text-green-700 bg-green-200"
                                                : "text-green-800 hover:text-green-700 hover:bg-green-100"
                                        } transition duration-300`
                                    }
                                >
                                    Adopt
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
}
