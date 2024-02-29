import React from 'react'
import { NavLink } from 'react-router-dom'

const Home = () => {
    return (
        <div>
            {/* Login Navbar */}
            <nav className="bg-gray-900 p-4 text-white text-2xl">
                <div className="container mx-auto flex items-center justify-between">
                    <div className="text-white">Logo / Brand</div>
                    <div className="flex space-x-4">
                        <NavLink to="/login" activeClassName="text-red-500" className="text-white">
                            Login
                        </NavLink>
                        <NavLink to="/signup" activeClassName="text-red-500" className="text-white">
                            signUp
                        </NavLink>
                    </div>
                </div>
            </nav>

            {/* Main Content */}
            <div className="container mx-auto mt-8">
                <h1 className="text-4xl font-bold mb-4">Welcome to My Website</h1>
                <p className="text-gray-800">This is the main content of your home page.</p>
            </div>

            {/* Extra Navbar */}
            <nav className="bg-blue-500 p-4">
                <div className="container mx-auto flex items-center justify-between">
                    <div className="text-white">Extra Navbar</div>
                    <div className="flex space-x-4">
                        <a className="text-white">Page 1</a>
                        <a className="text-white">Page 2</a>
                    </div>
                </div>
            </nav>

            <div className='bg-zinc-900 w-full h-screen'>
                <div className='p-4 flex gap-6 justify-center'>
                    <div className='w-[20vw] h-[20vw] bg-sky-900 rounded-lg'></div>

                    <div className='w-[20vw] h-[20vw] bg-sky-900 rounded-lg'></div>

                    <div className='w-[20vw] h-[20vw] bg-sky-900 rounded-lg'></div>


                </div>
            </div>
        </div>


    )
}

export default Home
