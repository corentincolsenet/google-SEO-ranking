import type { NextPage } from 'next';
import { NextSeo } from 'next-seo';
import Layout from '../components/Layout';
import Reviews from '../components/Reviews'; 

const ReviewsPage: NextPage = () => {
    const reviews: Array<{ fullName: string, position: string, url: string }> = [
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
                title="Xeofood | Reviews page"
                description="The reviews from our customers in all Xeozrodel! Check this out!"
            />
            <Layout>
                <Reviews />
            </Layout>
        </>
    )
}

export default ReviewsPage;