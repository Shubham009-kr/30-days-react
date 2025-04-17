import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <div className="mx-auto flex flex-col align-center justify-between w-full max-w-7xl">
            <aside className="relative overflow-hidden text-black rounded-lg sm:mx-16 mx-2 sm:py-16">
                <div className="relative z-10 max-w-screen-xl px-4  pb-20 pt-10 sm:py-24 mx-auto sm:px-6 lg:px-8">
                    <div className="max-w-xl sm:mt-1 mt-80 space-y-8 text-center sm:text-right sm:ml-auto">
                        <h2 className="text-4xl font-bold sm:text-5xl">
                            Download Now
                            <span className="hidden sm:block text-4xl">Lorem Ipsum</span>
                        </h2>
                        <Link
                            className="inline-flex text-white items-center px-6 py-3 font-medium bg-orange-700 rounded-lg hover:opacity-75"
                            to="/"
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
                            &nbsp; Download now
                        </Link>
                    </div>
                </div>
                <div className="absolute inset-0 w-full rounded-xl sm:my-20 sm:pt-1 pt-12 h-full ">
                    <img className="w-96 rounded-xl mask-t-from-45%" src="https://instagram.fixr3-2.fna.fbcdn.net/v/t39.30808-6/470219207_18380455741110052_4501889507584950888_n.jpg?stp=dst-jpg_e35_p640x640_sh0.08_tt6&efg=eyJ2ZW5jb2RlX3RhZyI6IkNBUk9VU0VMX0lURU0uaW1hZ2VfdXJsZ2VuLjE0NDB4MTgwMC5zZHIuZjMwODA4LmRlZmF1bHRfaW1hZ2UifQ&_nc_ht=instagram.fixr3-2.fna.fbcdn.net&_nc_cat=104&_nc_oc=Q6cZ2QE3sxyHotZTUF8293MAxmI2ypBSRDfNrqwHSJmxbVrh0Ceg36q5_enQoIFFerrbSDyoVqgEBHYdYJHTd35ViAYw&_nc_ohc=0jIhMN0-76cQ7kNvwHaSi-7&_nc_gid=u1hWKLpupLTYxvGKdsH1Gw&edm=AP4sbd4AAAAA&ccb=7-5&ig_cache_key=MzI2NDExNTQ2OTk5MTQ1MTcxMA%3D%3D.3-ccb7-5&oh=00_AfFrjIYP4O3iIoTS2I2yV1g2qWowObGFRmo4V_sXW_rDLQ&oe=68069683&_nc_sid=7a9f4b" alt="image1" />
                </div>
            </aside>

            <div className="flex align-center justify-between gap-10 px-16 place-items-center sm:mt-20">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit assumenda dolores maxime incidunt rem voluptates dignissimos aliquid amet libero. Animi fugit aut reprehenderit aliquam voluptatum sint impedit possimus voluptate deserunt, obcaecati quidem quos fuga rem qui quod iure quasi facilis dicta sit voluptates cupiditate! Suscipit autem molestiae quis ea corporis!</p>
                <img className="rounded-xl mask-b-from-75% sm:w-96 w-48" src="https://instagram.fixr3-2.fna.fbcdn.net/v/t39.30808-6/470207359_18380455729110052_4924487063217313309_n.jpg?stp=dst-jpg_e35_p640x640_sh0.08_tt6&efg=eyJ2ZW5jb2RlX3RhZyI6IkNBUk9VU0VMX0lURU0uaW1hZ2VfdXJsZ2VuLjE0NDB4MTgwMC5zZHIuZjMwODA4LmRlZmF1bHRfaW1hZ2UifQ&_nc_ht=instagram.fixr3-2.fna.fbcdn.net&_nc_cat=104&_nc_oc=Q6cZ2QE3sxyHotZTUF8293MAxmI2ypBSRDfNrqwHSJmxbVrh0Ceg36q5_enQoIFFerrbSDyoVqgEBHYdYJHTd35ViAYw&_nc_ohc=AH9wS9RagusQ7kNvwHiV8qx&_nc_gid=u1hWKLpupLTYxvGKdsH1Gw&edm=AP4sbd4AAAAA&ccb=7-5&ig_cache_key=MzI2NDExNTQ2OTk5MTQ5ODIyNw%3D%3D.3-ccb7-5&oh=00_AfGcx9S7QQbnJok-h1BdDGhnI8dTosPC_DR10G4veKJc1Q&oe=68069831&_nc_sid=7a9f4b" alt="image2" />
            </div>

            <h1 className="text-center text-2xl sm:text-5xl py-10 font-medium">Lorem Ipsum Yojo</h1>
        </div>
    )
}

export default Home