import React, { useState } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';

const { SITE_URL } = process.env

const AddHero = () => {
    const [form, setForm] = useState({
        superHero: '',
        realname: ''
    })

    console.log(form)

    const router = useRouter()

    const handelChange = e => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    const handelForm = async(e) => {
        e.preventDefault()
        try {
            const res = await axios(`${SITE_URL}/api/hero`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                data: JSON.stringify(form)
            })
            router.push("/")
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className='min-h-[calc(100vh-108px)] max-w-[1100px] mx-auto p-5'>
            <h1 className="text-center text-xl sm:text-2xl md:text-3xl font-bold">
                Add a New Superhero Identity
            </h1>
            <form onSubmit={handelForm}>
                <div className="shadow overflow-hidden sm:rounded-md max-w-[500px] w-full mx-auto mt-10">
                    <div className="px-4 py-5 bg-white sm:p-6">
                        <div className="flex flex-col justify-center items-center gap-6">
                            <div className="w-full">
                                <label htmlFor="superHero" className="block text-sm font-medium text-gray-700">
                                    SuperHero Name
                                </label>
                                <input
                                    type="text"
                                    name="superHero"
                                    id="super-hero"
                                    className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-2 border-slate-300 rounded-md"
                                    onChange={handelChange}
                                />
                            </div>

                            <div className="w-full">
                                <label htmlFor="realname" className="block text-sm font-medium text-gray-700">
                                    Real Name
                                </label>
                                <input
                                    type="text"
                                    name="realname"
                                    id="real-name"
                                    className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-2 border-slate-300 rounded-md"
                                    onChange={handelChange}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="px-4 pb-5 bg-gray-50 text-center sm:px-6">
                        <button
                            type="submit"
                            className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                            Save
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default AddHero;
