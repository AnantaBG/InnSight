
import Student1 from "../src/assets/Student1.png"
import Student2 from "../src/assets/Student2.png"
import Student3 from "../src/assets/Student3.png"

const Students = () => {
    return (
        <div>
        <div className="mt-5 bg-base-200">
            <div className="mb-5">
                <h2 className="text-3xl justify-center items-center text-center mx-auto font-semibold text-transparent bg-clip-text bg-gradient-to-r from-red-900 to-green-900"> Meet Our Consumers </h2>
            </div>
            <div className="flex flex-col gap-5 md:flex-row justify-between w-11/12 mx-auto">
            <div className="card  bg-base-100  shadow-xl">
            <figure className="px-10 pt-10">
                <img
                src={Student1}
                alt="Natsuki"
                className="rounded-xl" />
            </figure>
            <div className="card-body items-start text-center">
                <h2 className="card-title">Natsuki</h2>
                <p className="text-left">This is a service provider of their word. I am so happy when it comes to timeliness. I would like to recommend that if you need a flight reservation then this is the service provider to approach without any doubt.</p>
            </div>
            </div>
            <div className="card bg-base-100  h-1/2 shadow-xl">
            <figure className="px-10 pt-10">
                <img
                src={Student2}
                alt="Ryōta"
                className="rounded-xl" />
            </figure>
            <div className="card-body items-start text-center">
                <h2 className="card-title">Ryōta</h2>
                <p className="text-left">My main concern is about whether after care support is good or not. So once I got chance to contact the support and it was mind blowing service that they resolved my issue of booking cancellation without any excuses. So that’s what I want from online sites.</p>
            </div>
            </div>
            <div className="card bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img
                src={Student3}
                alt="Ken"
                className="rounded-xl" />
            </figure>
            <div className="card-body items-start text-center">
                <h2 className="card-title ">Ken</h2>
                <p className="text-left">Main thing about this site is their services and customer support. When I have problem with cancellation or changing the booking there never had any excuse and resolved my issue without creating any hurdle.</p>
            </div>
            </div>
            </div>
            <div className="mb-5  mt-16">

            </div>
        </div>
        
        </div>
    );
};

export default Students;