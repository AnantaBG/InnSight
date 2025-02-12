import { MdOutlineEmail } from "react-icons/md";
import { RiMessengerLine, RiTelegramLine, RiWhatsappLine } from "react-icons/ri";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";
import img1 from '../assets/1.png'
import img2 from '../assets/21.png'

const Contact = () => {
const { theme } = useContext(ThemeContext);
        const getBackgroundImage = () => {
            return theme === 'light' ? img2 : img1;
        };

    return (
      <div className={`-mt-20 pt-20 ${theme === 'dark' ? 'dark' : ''} min-h-screen`}
      style={{
        backgroundImage: `url(${getBackgroundImage()})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        transition: 'background-image 0.3s ease'
      }}>
          <Navbar></Navbar>
          <div className="mx-auto w-11/12">
        <div className="flex mb-10 flex-col justify-center mx-auto text-center">
            
            <h2 className=" text-4xl font-bold mt-4 text-white dark:text-[#a2d5fd] ">Contact Me</h2>
        </div>
            <div className="grid gap-8">
                {/* Contact Options */}
                <div className="dark:bg-[#1f1f38] flex flex-col  justify-center mx-auto transition duration-[600ms] ease-in-out md:grid dark:text-white md:grid-cols-2 gap-2">
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