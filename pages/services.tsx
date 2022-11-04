import { NextPage } from "next";
import Layout from "../components/Layout";
import { NextSeo } from "next-seo";

const Services: NextPage = () => {
    const food: React.CSSProperties = {
        backgroundImage: `url("/images/order.jpg")`,
    }
    const deliver: React.CSSProperties = {
        backgroundImage: `url("/images/deliver.jpg")`,
    }
    const enjoy: React.CSSProperties = {
        backgroundImage: `url("/images/eat.jpg")`,
    }

    return (
        <>
        <NextSeo
            title="Xeofood | Services"
            description="We provide the best food delivery in Xeozrodel. We garantee your food delivered 
            within 10 minutes after your order"
        />
        <Layout>
            <section className="text-gray-600 body-font h-screen">
                {/* Title */}
                <div className="flex justify-center items-center pt-8">
                    <h2 className="text-4xl">How it's working ?</h2>
                </div>
                <div className="container h-full px-5 py-24 mx-auto">
                    {/* First element */}
                    <div className="flex items-center lg:w-3/5 mx-auto border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col">
                        <div className="sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center rounded-full flex-shrink-0 bg-cover" style={food}>
                        </div>
                        <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
                            <h2 className="text-gray-900 text-lg title-font font-medium mb-2">Start ordering</h2>
                            <p className="leading-relaxed text-base">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum omnis voluptatem accusantium nemo perspiciatis delectus atque autem! Voluptatum tenetur beatae unde aperiam, repellat expedita consequatur! Officiis id consequatur atque doloremque!</p>
                        </div>
                    </div>
                    {/* Second element */}
                    <div className="flex items-center lg:w-3/5 mx-auto border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col">
                        <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
                            <h2 className="text-gray-900 text-lg title-font font-medium mb-2">Your food is on it way !</h2>
                            <p className="leading-relaxed text-base">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum omnis voluptatem accusantium nemo perspiciatis delectus atque autem! Voluptatum tenetur beatae unde aperiam, repellat expedita consequatur! Officiis id consequatur atque doloremque!</p>
                        </div>
                        <div className="sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center rounded-full flex-shrink-0 bg-cover" style={deliver}/>
                    </div>
                    {/* Third element */}
                    <div className="flex items-center lg:w-3/5 mx-auto sm:flex-row flex-col">
                        <div className="sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center rounded-full flex-shrink-0 bg-cover" style={enjoy}/>
                        <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
                            <h2 className="text-gray-900 text-lg title-font font-medium mb-2">Enjoy your meal</h2>
                            <p className="leading-relaxed text-base">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum omnis voluptatem accusantium nemo perspiciatis delectus atque autem! Voluptatum tenetur beatae unde aperiam, repellat expedita consequatur! Officiis id consequatur atque doloremque!</p>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
        </>
    )
}

export default Services;