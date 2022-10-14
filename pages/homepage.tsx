import Svg from '../components/svg';

export default function Homepage() {
    const properties: React.CSSProperties = {
        backgroundImage: `url("/images/back.jpg")`
    }

    return (
        <main className='flex flex-col justify-center'>
            <section className='w-full'>
                <div className='p-8 w-full flex flex-wrap items-center justify-center'>
                    <div className='whitespace-pre-wrap max-w-md'>
                        <h2 className='text-4xl font-bold leading-relaxed break-words'>Grab your <span className='text-tertiary'>FOOD</span> anywhere at anytime !</h2>
                        <p className="visible mx-0 mt-2 mb-0 text-sm leading-relaxed text-left text-secondary">
                            Food from your favorite restaurants, delivered to your door
                        </p>
                    </div>
                    <div className='hidden md:block p-3'>
                        <Svg color="#399982"/>
                    </div>
                </div>
            </section>

            <section className="flex flex-col w-full h-[500px] bg-cover bg-fixed bg-center justify-center items-center p-8" style={properties}>
                <h2 className="text-white text-center text-3xl font-semibold mt-20 mb-10">
                    Looking for some sushis ?
                </h2>
                <p className='text-white justify-center text-lg font-medium'>XeoFood is available across the whole country ! We garuantee your delivery within 15 minutes.</p>
            </section>

            <section className='space-y-8 p-20'>
                <h1 className="text-4xl text-center my-20">Tempor sit labore nostrud</h1>
                <p className='text-justify'>
                    Exercitation non Lorem exercitation tempor amet ad esse velit. Anim
                    deserunt id nulla quis ex magna culpa exercitation. Mollit consequat
                    enim eiusmod cupidatat commodo eiusmod nulla. Id quis amet incididunt
                    cillum dolore consectetur nulla incididunt laborum excepteur
                    consectetur consectetur sunt tempor. Minim fugiat sint sunt ad elit
                    laboris est sit est laboris labore do velit. Cillum aliquip pariatur
                    deserunt eiusmod. Consequat irure nulla adipisicing deserunt culpa.
                    Veniam enim deserunt sint consequat labore. Enim ullamco ea aute duis
                    et nostrud voluptate fugiat consectetur et velit cillum anim dolore.
                    In exercitation proident proident nostrud voluptate. Fugiat elit esse
                    labore pariatur ex. Ex labore esse voluptate nisi in. Ad anim deserunt
                    reprehenderit est. Aliquip pariatur nulla dolor amet quis aliqua sit
                    nisi officia enim velit. Ad enim eu dolor quis ipsum. Nulla amet
                    consectetur adipisicing ullamco qui tempor dolor excepteur dolore anim
                    pariatur quis laboris consequat. Consectetur ullamco consectetur minim
                    eiusmod quis veniam esse consectetur anim nostrud est pariatur
                    laborum. Mollit tempor minim amet esse. Lorem officia consequat
                    eiusmod sunt. Proident occaecat velit et consequat irure est cupidatat
                    tempor ullamco. Aliquip est pariatur ea ut qui ad sit dolor laboris
                    adipisicing officia eiusmod sit. Proident Lorem ex cillum sint
                    cupidatat amet nulla veniam laborum velit pariatur. Fugiat excepteur
                    culpa sunt est anim sunt. Ea voluptate non do proident sunt ad cillum
                    enim esse.
                </p>
            </section>
        </main>
    )
}