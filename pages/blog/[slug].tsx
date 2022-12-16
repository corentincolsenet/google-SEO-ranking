import type { GetStaticProps, GetStaticPaths } from 'next'
import { NextSeo } from 'next-seo'
import React from 'react'
import Link from 'next/link'
import PortableText from "react-portable-text"
import moment from "moment"

import { sanityClient, urlFor } from "../../sanity"
import { IPost } from '../../typings'
import Layout from '../../components/Layout'

interface Props {
  post: IPost;
}

const Post = ({ post }: Props) => {
  console.log(post.publishedAt)
  const createdPostDate = moment(post.publishedAt).format('dddd MMMM D Y')

  return (
    <>
      <NextSeo
        title={`Xeofood blog | ${post.title}`}
        description={post.description}
      />
      <Layout>
        <article className="py-10 lg:py-20 max-w-screen-md mx-auto px-6">
          <div className="mb-4 md:mb-0 w-full relative" style={{ height: "24em" }}>
            <div className="absolute left-0 bottom-0 w-full h-full z-10" style={{ backgroundImage: "linear-gradient(180deg, transparent, rgba(0,0,0,.7))" }}></div>
            <img
              src={urlFor(post.mainImage).url()!}
              className="absolute left-0 top-0 w-full h-full z-0 object-cover"
              loading="lazy"
              alt=""
            />
            <div className="p-4 absolute bottom-0 left-0 z-20">
              <h2 className="text-4xl font-semibold text-gray-100 leading-tight">
                {post.title}
              </h2>
              <div className="flex mt-3">
                <img
                  src={urlFor(post.author.image).url()!}
                  className="h-10 w-10 rounded-full mr-2 object-cover"
                  loading="lazy"
                  alt={post.author.name}
                />
                <div>
                  <p className="font-semibold text-gray-200 text-sm">{post.author.name}</p>
                  <p className="font-semibold text-gray-400 text-xs">{createdPostDate}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 leading-relaxed">
            <PortableText
              dataset={process.env.NEXT_PUBLIC_SANITY_DATASET}
              projectId={process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}
              content={post.body}
              serializers={{
                h1: (props: any) => <h1 className="text-2xl font-bold text-gray-900" {...props} />,
                h2: (props: any) => <h2 className="text-2xl font-bold text-gray-900" {...props} />,
                normal: (props: any) => <p className="text-md font-medium text-justify text-gray-700 py-2" {...props} />,
                li: ({ children }: any) => <li className="ml-4 list-disc font-medium">{children}</li>,
                link: ({ href, children }: any) => <a href={href} className="text-secondary hover:underline">{children}</a>,
              }}
            />
          </div>

          <Link href="/blog">
            <a className="inline-block mt-12 text-secondary underline hover:text-tertiary">See other articles</a>
          </Link>

        </article>
      </Layout>
    </>
  )
}

export default Post

export const getStaticPaths: GetStaticPaths = async () => {
  const query = `
    *[_type == "post"] {
      _id,
      slug {
        current
      }
    }
  `

  const posts = await sanityClient.fetch(query)

  const paths = posts.map((post: IPost) => ({
    params: {
      slug: post.slug.current
    }
  }))

  return {
    paths,
    fallback: "blocking"
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const query = `
    *[_type == "post" && slug.current == $slug][0] {
      _id,
      publishedAt,
      title,
      author -> {
          name,
          description,
          image
      },
      description,
      mainImage,
      slug,
      body,
    }
  `
  const post = await sanityClient.fetch(query, {
    slug: params?.slug
  })

  if (!post) {
    return {
      notFound: true
    }
  }

  return {
    props: {
      post
    }
  }
}