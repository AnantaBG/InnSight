
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
            <div className="flex flex-col gap-5 md:flex-row justify-between w-11/12 md:w-full lg:w-11/12 mx-auto">
            <div className="card  bg-base-100 lg:w-1/3 shadow-xl">
            <figure className="px-10 pt-10">
                <img
                src={Student1}
                alt="Natsuki"
                className="rounded-xl h-48" />
            </figure>
            <div className="card-body  items-start text-center">
                <h2 className="card-title">Natsuki</h2>
                <p className="text-left">I recently used [InnSight] to book a weekend getaway at a charming hotel in the countryside. The website was incredibly user-friendly. The booking process was seamless, and I received a confirmation email immediately. I would highly recommend [InnSight] to anyone looking for a hassle-free travel experience.</p>
            </div>
            </div>
            <div className="card bg-base-100 lg:w-1/3 shadow-xl">
            <figure className="px-10 pt-10">
                <img
                src={Student2}
                alt="Ryōta"
                className="rounded-xl h-48" />
            </figure>
            <div className="card-body items-start text-center">
                <h2 className="card-title">Ryōta</h2>
                <p className="text-left">I&apos;ve used [InnSight] for years, and I&apos;ve always been impressed with their service. Their website is easy to navigate, and they have a wide selection of hotels to choose from. I would definitely recommend [InnSight] to anyone looking for a reliable and convenient way to book their travel.</p>
            </div>
            </div>
            <div className="card bg-base-100 lg:w-1/3 shadow-xl">
            <figure className="px-10 pt-10">
                <img
                src={Student3}
                alt="Ken"
                className="rounded-xl h-48" />
            </figure>
            <div className="card-body items-start text-center">
                <h2 className="card-title ">Ken</h2>
                <p className="text-left">I was planning a surprise trip for my partner, and I wanted to find a unique and romantic hotel. [InnSight] had a huge selection of hotels to choose from, including boutique hotels, luxury resorts, and even treehouses!I received a confirmation email immediately.</p>
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