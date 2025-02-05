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
                <h2 className="card-title">Visa Pod</h2>
                <p className="text-left">The Bangladesh Online MRV Portal is a website where you can apply for a visa to Bangladesh online.</p>
                <div className="card-actions">
                <button className="btn btn-primary">Contact</button>
                </div>
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
                <h2 className="card-title">Visa 360</h2>
                <p className="text-left">Visa360 is a leading provider of visa services. We provide comprehensive visa services for travelers from all over the world.Australian permanent resident or eligible New Zealand citizen live in .</p>
                <div className="card-actions">
                <button className="btn btn-primary">Contact</button>
                </div>
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
                <h2 className="card-title ">Partner Visa</h2>
                <p className="text-left"> This visa lets the de facto partner or spouse of an Australian citizen, Australian permanent resident or eligible New Zealand citizen live in .</p>
                <div className="card-actions">
                <button className="btn btn-primary">Contact</button>
                </div>
            </div>
            </div>
            </div>

        </div>
    );
};

export default Companies;