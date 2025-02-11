import teacher1 from "../src/assets/teacher1.png"
import teacher2 from "../src/assets/teacher2.png"
import teacher3 from "../src/assets/teacher3.png"

const Companies = () => {
    return (
        <div className="mt-10">
            <div className="mb-5">
                <h2 className="text-3xl justify-center items-center text-center mx-auto font-semibold text-transparent bg-clip-text bg-gradient-to-r from-yellow-900 to-green-500"> Meet Our Direct Partners </h2>
            </div>
            <div className="flex gap-5 flex-col md:flex-row justify-between w-11/12 mx-auto">
            <div className="card bg-base-100 md:w-96 shadow-xl">
            <figure className="px-10 pt-10">
                <img
                src={teacher1}
                alt="Sishui_Nakamoto"
                className="rounded-xl" />
            </figure>
            <div className="card-body items-start text-center">
                <h2 className="card-title">Globetrotter Getaways Inc.</h2>
                <p className="text-left">

                Slogan: Your Passport to Amazing Deals!
                Founded: 1992
                HQ: Sunnyvale, CA
                Focus: Luxury, all-inclusive, adventure
                Unique: Globetrotter Guarantee, 24/7 support, Secret Deals, travel advisors
                Stats: 10M+ customers, 5-star reviews, 10K+ partners.

                </p>
            </div>
            </div>
            <div className="card  bg-base-100 md:w-96 h-1/2 shadow-xl">
            <figure className="px-10 pt-10">
                <img
                src={teacher2}
                alt="Michiko_Nishio"
                className="rounded-xl" />
            </figure>
            <div className="card-body items-start text-center">
                <h2 className="card-title text-left">Guest-Centric Technology Solutions</h2>
                <p className="text-left">
                GuestConnect: Smart room control, mobile app, personalized recommendations
                Culinary Adventures: VR experiences
                Wellness Oasis: Fitness trackers, in-room amenities
                Language Immersion: Language app access, in-room resources, language exchange
                Sustainable Travel: Carbon offsetting, eco-friendly info, sustainable practices
                </p>

            </div>
            </div>
            <div className="card bg-base-100 md:w-96 shadow-xl">
            <figure className="px-10 pt-10">
                <img
                src={teacher3}
                alt="Daichi_Taro"
                className="rounded-xl" />
            </figure>
            <div className="card-body items-start text-center">
                <h2 className="card-title text-left">Strategic Community Alliances</h2>
                <p className="text-left"> 
                Pawsome Staycation: Pets welcome, store discounts, dog park access
                Art & Appetite: Art tour, cooking class, gourmet dinner
                Family Fun: Amusement park, museum, kids activities
                Romantic Getaway: Wine tasting, massage, romantic dinner
                Eco-Adventure: Nature walks, rentals, eco-friendly amenities
                </p>

            </div>
            </div>
            </div>

        </div>
    );
};

export default Companies;