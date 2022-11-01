import Image from "next/image"

const About = ({id}: any) => {
    switch (id) {
        case 1:
            return (
                <div className="flex flex-row space-x-4 px-4 md:px-0">
                    <div className="w-2/3 p-2">
                        <p className="text-base text-justify">
                            We offer the best food delivery in all Xeozrodel! 
                            Get your best Xeozrodel food from neighbour restaurants right to your door. 
                            Recommended at 97% by xeozrodadvisor and reviewed at 5/5 by 'xeozrodel fork', the prestigious newspaper.
                        </p>
                    </div>
                    <div className="w-1/3 p-2 justify-center items-center">
                        <p>We offer the best food delivery in all Xeozrodel! 
                            Get your best Xeozrodel food from neighbour restaurants right to your door. 
                            Recommended at 97% by xeozrodadvisor and reviewed at 5/5 by 'xeozrodel fork', the prestigious newspaper.
                        </p>
                    </div>
                </div>
            )
        case 2:
            return (
                <div>FAQ WIP</div>
            )
        default:
            return (
                <div>Oops something went wrong</div>
            )
    }
}

export default About