import type { NextPage } from 'next';
import { NextSeo } from 'next-seo';
import Layout from '../components/Layout';
import { ITeamMember } from '../typings';

const About_us: NextPage = () => {
    const properties: React.CSSProperties = {
        backgroundImage: `url("/images/about.webp")`
    }

    const teamMembers: Array<ITeamMember> = [
        {
            fullName: "Ghoslain Duvigneau",
            position: "Cofounder & CEO",
            url: "/images/ghoslain-duvigneau.jpeg",
        },
        {
            fullName: "Corentin Colsenet",
            position: "Cofounder & CTO",
            url: "/images/corentin-colsenet.jpg",
        },
        {
            fullName: "Léo Henneville",
            position: "Cofounder & COO",
            url: "/images/leo-henneville.jpeg",
        },
    ]

    return (
        <>
            <NextSeo
                title="Xeofood | About page"
                description="This page introduce who we are and what is the relation between us and Xeozrodel"
            />
            <Layout>
                <section>
                    <div className='flex justify-center items-center bg-scroll bg-center bg-cover h-screen' style={properties}>
                        <h2 className='text-white text-7xl md:text-9xl'>Xeofood</h2>
                    </div>
                    <div className="py-16 bg-white">  
                        <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
                            <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
                                <div className="md:h-5/12 lg:w-5/12">
                                    <img className="rounded-xl" src="/images/sushis.webp" alt="food image" loading="lazy" width="" height=""/>
                                </div>
                                <div className="md:h-7/12 lg:w-6/12">
                                    <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">Xeofood aim to provide the best food to your home</h2>
                                    <p className="mt-6 text-gray-600">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum omnis voluptatem accusantium nemo perspiciatis delectus atque autem! Voluptatum tenetur beatae unde aperiam, repellat expedita consequatur! Officiis id consequatur atque doloremque!</p>
                                    <p className="mt-4 text-gray-600"> Nobis minus voluptatibus pariatur dignissimos libero quaerat iure expedita at? Asperiores nemo possimus nesciunt dicta veniam aspernatur quam mollitia.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="py-16 bg-gray-100">  
                        <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
                            <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
                                <div className="md:h-7/12 lg:w-6/12">
                                    <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">Our developers are dedicated to the community</h2>
                                    <p className="mt-6 text-gray-600">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum omnis voluptatem accusantium nemo perspiciatis delectus atque autem! Voluptatum tenetur beatae unde aperiam, repellat expedita consequatur! Officiis id consequatur atque doloremque!</p>
                                    <p className="mt-4 text-gray-600"> Nobis minus voluptatibus pariatur dignissimos libero quaerat iure expedita at? Asperiores nemo possimus nesciunt dicta veniam aspernatur quam mollitia.</p>
                                </div>
                                <div className="md:h-5/12 lg:w-5/12">
                                    <img className='rounded-xl' src="/images/team.webp" alt="image" loading="lazy" width="" height=""/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col justify-center items-center container px-6 py-8 mx-auto">
                        <h2 className="text-3xl font-semibold text-center text-gray-800 capitalize lg:text-4xl">Our Team</h2>

                        <div className="grid gap-y-8 gap-x-20 mt-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
                            {teamMembers.map((teamMember: ITeamMember, index: number) => (
                                <div key={index} className="w-full max-w-xs text-center">
                                    <img className="object-cover object-center w-full h-48 mx-auto rounded-lg" src={teamMember.url} alt={teamMember.fullName} />
                                    <div className="mt-2">
                                        <h3 className="text-lg font-medium text-gray-700">{teamMember.fullName}</h3>
                                        <span className="mt-1 font-medium text-gray-600">{teamMember.position}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </Layout>
        </>
    )
}

export default About_us;