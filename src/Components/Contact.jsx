import { MdOutlineEmail } from "react-icons/md";
import { RiMessengerLine, RiTelegramLine, RiWhatsappLine } from "react-icons/ri";
import Navbar from "./Navbar";
import Footer from "./Footer";


const Contact = () => {


    return (
        <div>
          <Navbar></Navbar>
          <div className="mx-auto w-11/12">
        <div className="flex mb-10 flex-col justify-center mx-auto text-center">
            
            <h2 className=" text-4xl font-bold mt-4 text-[#a2d5fd] ">Contact Me</h2>
        </div>
            <div className="grid gap-8">
                {/* Contact Options */}
                <div className="dark:bg-[#1f1f38] flex flex-col  justify-center mx-auto transition duration-[600ms] ease-in-out md:grid md:grid-cols-2 gap-2">
                <div className="card hover:brightness-75 items-center flex flex-col  mb-2">
                    <div className=" card-body bg-transparent min-w-full border-transparent shadow-md shadow-orange-500 dark:shadow-blue-400 ">
                    <MdOutlineEmail className="text-3xl" />
                    <h4 className="text-base">Email</h4>
                    <h5 className="text-sm">anantabanikofficial@gmail.com</h5>
                    <a className="btn" href="https://mail.google.com/mail/?view=cm&fs=1&to=anantabanikofficial@gmail.com" target="_blank">Send Message</a>
                    </div>
                    
                </div>
                <div className="card hover:brightness-75 items-center flex flex-col mb-2 ">
                    
                    <div 
                    className="card-body bg-transparent min-w-full border-transparent shadow-md shadow-orange-500 dark:shadow-blue-400">
                    <RiWhatsappLine className="text-3xl"/>
                    <h4 className="text-base">Whatsapp Messenger</h4>
                    <h5 className="text-sm">Ananta Banik</h5>
                    <a className="btn" href="https://wa.me/01622731790" target="_blank">Send Message</a>
                    </div>
                    
                </div>
                <div className="card  hover:brightness-75 items-center flex flex-col mb-2 ">
                    
                    <div 
                    className="card-body bg-transparent min-w-full border-transparent shadow-md shadow-orange-500 dark:shadow-blue-400">
                    <RiMessengerLine className="text-3xl"/>
                    <h4 className="text-base">Facebook Messenger</h4>
                    <h5 className="text-sm">RM Ananta Banik</h5>
                    <a className="btn" href="https://www.m.me/AnantaBanik3x/" target="_blank">Send Message</a>
                    </div>
                    
                </div>
                <div className="card  hover:brightness-75 items-center flex flex-col mb-2 ">
                    
                    <div 
                    className="card-body bg-transparent min-w-full border-transparent shadow-md shadow-orange-500 dark:shadow-blue-400">
                    <RiTelegramLine className="text-3xl"/>
                    <h4 className="text-base">Telegram Messenger</h4>
                    <h5 className="text-sm">@anantaj39</h5>
                    <a className="btn" href="https://t.me/@anantaj39" target="_blank">Send Message</a>
                    </div>
                    
                </div>
                </div>

            </div>
        </div>
        <Footer></Footer>
        </div>
    );
};

export default Contact;