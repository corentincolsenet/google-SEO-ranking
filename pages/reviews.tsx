import type { NextPage } from 'next';
import { NextSeo } from 'next-seo';
import Layout from '../components/Layout';
import Reviews from '../components/Reviews';

const ReviewsPage: NextPage = () => {
  return (
    <>
      <NextSeo
        title="Xeofood | Reviews"
        description="The reviews from our customers in all Xeozrodel ! Check them out !"
      />
      <Layout>
        <Reviews />
      </Layout>
    </>
  )
}

export default ReviewsPage;