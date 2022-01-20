import React from 'react'
import axios from 'axios'
import Link from 'next/link'
import { AiOutlineEdit } from 'react-icons/ai';
import { BiZoomIn } from 'react-icons/bi';

const Home = ({ heros }) => {
    console.log(heros)
    return (
        <div className='min-h-[calc(100vh-108px)] max-w-[1100px] mx-auto p-5'>
            <h1 className="text-center text-3xl font-bold">
                Superhero identity manager
            </h1>

            <div className="flex gap-5 flex-wrap mt-8 justify-center">
            {heros.map(hero => (
                <div className="shadow-bs3 hover:shadow-bs1 transition-all duration-300 p-4 rounded-sm w-72 bg-white" key={hero._id}>
                    <h3 className="text-xl font-bold text-center">
                        {hero.superHero}
                    </h3>
                    <div className="flex justify-between mt-5">
                        <Link key={hero.id} href={`/${hero._id}`}>
                            <a className='bg-blue-600 rounded-sm text-white py-1 px-3 flex items-center gap-2'>
                                <BiZoomIn />
                                View
                            </a>
                        </Link>
                        <Link key={hero.id} href={`/${hero.id}`}>
                            <a className='bg-blue-700 rounded-sm text-white py-1 px-3 flex items-center gap-2'>
                                <AiOutlineEdit />
                                Edit
                            </a>
                        </Link>
                    </div>
                </div>
            ))}
            </div>
        </div>
    )
}

export async function getServerSideProps() {
    const { SITE_URL } = process.env
  
    const { data } = await axios.get(`${SITE_URL}/api/hero`)

    return {
        props: {
            heros: data.hero,
        },
    }
}

export default Home
