import { BsFacebook, BsGithub, BsLinkedin } from "react-icons/bs";
import { MdOutlineEmail } from "react-icons/md";
import { RiMessengerLine, RiTelegram2Line, RiWhatsappLine } from "react-icons/ri";

const Footer = () => {
    return (
        <div>
            <footer className="footer mt-20 footer-center bg-base-200 text-white rounded p-10">
            <nav className="grid grid-flow-col gap-4">
                <a className="link text-2xl link-hover" href="https://www.m.me/AnantaBanik3x/" target="_blank"> <RiMessengerLine/></a>
                <a className="link text-2xl link-hover" href="https://wa.me/01622731790" target="_blank"><RiWhatsappLine/></a>
                <a className="link text-2xl link-hover" href="https://mail.google.com/mail/?view=cm&fs=1&to=anantabanikofficial@gmail.com" target="_blank"><MdOutlineEmail/></a>
                <a href="https://t.me/@anantaj39" className="link text-2xl link-hover"><RiTelegram2Line/></a>
            </nav>
            <nav>
                <div className="grid grid-flow-col gap-4">
                <a target="_blank" href="https://www.facebook.com/AnantaBanik3x/" className="text-2xl">
                    <BsFacebook></BsFacebook>
                </a>
                <a target="_blank" href="https://github.com/AnantaBG" className="text-2xl">
                    <BsGithub></BsGithub>
                </a>
                <a target="_blank" href="https://www.linkedin.com/in/anchba" className="text-2xl">
                    <BsLinkedin></BsLinkedin>
                </a>
                </div>
            </nav>
            <aside>
                <p>Copyright © {new Date().getFullYear()} - All right reserved by InnSight Co Ltd</p>
            </aside>
            </footer>
        </div>
    );
};

export default Footer;