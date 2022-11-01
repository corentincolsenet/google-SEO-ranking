import type { NextPage } from 'next';
import { NextSeo } from 'next-seo';
import { useState } from 'react';
import Layout from '../components/Layout';
import About from '../components/About';

const About_us: NextPage = () => {
    const table = [
        {id: 1, text: "About us"},
        {id: 2, text: "FAQ"}
    ]

    const [selected, setSelected] = useState(1);

    return (
        <>
            <NextSeo
                title="Xeofood | About us"
                description="Who are we ?"
            />
            <Layout>
                <div className='flex flex-col max-w-3xl m-auto py-4 min-h-screen'>
                    <h2 className='text-4xl text-center py-10 px-10 md:px-0 select-none'>About us</h2>
                    <ul className='columns-1 md:columns-2 self-center w-3/4 md:w-full text-center pb-2 cursor-pointer'>
                        {table.map((v) => (
                            <li key={v.id} id={v.id.toString()} onClick={() => setSelected(v.id)} className={`border-b-2 mb-2 ${selected == v.id ? 'border-b-tertiary' : 'hover:border-b-tertiary'}`}>{v.text}</li>
                        ))}
                    </ul>
                    <section className='flex justify-center py-14'>
                        <About id={selected}/>
                    </section>
                </div>
            </Layout>
        </>
    )
}

export default About_us;