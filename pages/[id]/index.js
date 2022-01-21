import React from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';
import { BsFillTrashFill } from 'react-icons/bs';
import Link from 'next/link';
import { AiOutlineEdit } from 'react-icons/ai';

const { SITE_URL } = process.env

const Hero = ({ hero }) => {
    const router = useRouter()
    const heroId = router.query.id

    const deleteHero = async() => {
        try {
            const heroDelete = await axios(`${SITE_URL}/api/hero/${heroId}`, {
                method: "DELETE"
            })
            router.push("/")
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className='min-h-[calc(100vh-108px)] max-w-[1100px] mx-auto p-5'>

            <h1 className="text-center text-3xl font-bold">
                Superhero Detail
            </h1>

            <div className="bg-white shadow-lg rounded-md mt-10 p-5 max-w-[300px] mx-auto w-full flex justify-center items-center flex-col gap-5">
                <h2 className="text-xl font-bold">
                    {hero.superHero}
                </h2>
                <p className="text-xl font-semibold">
                    {hero.realname}
                </p>
                <div className="flex justify-between items-center gap-4 w-full">
                    <Link key={hero.id} href={`/${hero._id}/edit`}>
                        <a className='bg-blue-500 text-white px-3 py-1 rounded-sm flex items-center gap-2'>
                            <AiOutlineEdit />
                            Edit
                        </a>
                    </Link>
                    <button className='bg-red-600 text-white px-3 py-1 rounded-sm flex items-center gap-2' onClick={deleteHero}>
                        <BsFillTrashFill />
                        Delete
                    </button>
                </div>
            </div>
        </div>
    );
};

export async function getServerSideProps({ params }) {
    const { SITE_URL } = process.env
  
    const { data } = await axios.get(`${SITE_URL}/api/hero/${params.id}`)

    return {
        props: {
            hero: data.hero,
        },
    }
}

export default Hero;
