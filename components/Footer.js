import React from 'react'

const Footer = () => {
    return (
        <footer className='p-3 flex justify-center items-center gap-1 flex-col sm:flex-row bg-white border-t-2 border-slate-200'>
            <span>
                &copy; {new Date().getFullYear()}
            </span>
            {" - "}
            <span>Made with ❤ {'& '}
                <a 
                    className='ml-1 font-semibold' 
                    href="https://github.com/Mridul2820/superhero-app"
                    target='_blank'
                    rel='noreferrer'
                >
                    {'<Code/>'}
                </a>
            </span>
        </footer>
    )
}

export default Footer
