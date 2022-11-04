import type { GetServerSideProps } from 'next'
import { NextSeo } from 'next-seo'
import { useRouter } from 'next/router'
import moment from "moment"

import { sanityClient, urlFor } from "../../sanity"
import { Post } from '../../typings'
import Layout from '../../components/Layout'

interface Props {
    posts: [Post];
}

const Blog = ({ posts }: Props) => {
    const router = useRouter()

    return (
        <>
            <NextSeo
                title="Xeofood blog | Informations about Xeofood and Xeozrodel"
                description="All available articles to learn more about what Xeofood is and the world of Xeozrodel. Check this out!"
            />
            <Layout>
                <section className="bg-white">
                    <div className="container px-6 py-10 lg:py-20 mx-auto">
                        <div className="text-center">
                            <h1 className="text-3xl font-semibold text-gray-800 capitalize lg:text-4xl">From the Xeofood blog</h1>

                            <p className="max-w-lg mx-auto mt-4 text-gray-500">
                                All the information about Xeofood and Xeozrodel to see on our different articles we made for you
                            </p>
                        </div>
                        <div className="flex flex-wrap items-center justify-center gap-8 mt-8 md:mt-16">
                            {posts.map((post) => {
                                const createdPostDate = moment(post._createdAt).format('dddd MMMM D Y')
                                return (
                                    <div
                                        key={post._id}
                                        className="group w-96 cursor-pointer"
                                        onClick={() => router.push(`/blog/${post.slug.current}`)}
                                    >
                                        <div className="relative group-hover:scale-105 transition-transform duration ease-in-out">
                                            <img 
                                                className="object-cover object-center w-full h-64 rounded-lg"
                                                src={urlFor(post.mainImage).url()!}
                                                loading="lazy"
                                                alt=""
                                            />
                                            <div className="absolute bottom-0 flex p-3 bg-white">
                                                <img 
                                                    className="relative object-cover object-center w-10 h-10 rounded-full"
                                                    src={urlFor(post.author.image).url()!}
                                                    loading="lazy"
                                                    alt={post.author.name}
                                                />
                                                <div className="mx-4">
                                                    <h1 className="text-sm text-gray-700">{post.author.name}</h1>
                                                    <p className="text-sm text-gray-500">{post.author.description}</p>
                                                    <p className="text-xs text-gray-400">{createdPostDate}</p>
                                                </div>
                                            </div>
                                        </div>

                                        <h1 className="mt-6 text-xl md:text-2xl font-semibold text-gray-800">
                                            {post.title}
                                        </h1>

                                        <hr className="w-32 my-6 text-blue-500" />

                                        <p className="text-md text-gray-500">
                                            {post.description}
                                        </p>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </section>
            </Layout>
        </>
    )
}

export default Blog

export const getServerSideProps: GetServerSideProps = async () => {
    const query = `
        *[_type == "post"] {
            _id,
            title,
            slug,
            _createdAt,
            author -> {
                name,
                description,
                image
            },
            mainImage,
            description
        }
    `
    const posts = await sanityClient.fetch(query)

    return {
        props: {
            posts
        }
    }
}