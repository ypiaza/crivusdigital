import { useEffect, useState } from "react";
import { FaAngleUp } from "react-icons/fa";
import { Link } from "react-scroll";
import logo from '/crivus.svg'

const ScrollButton = () => {
    const [show, setShow] = useState(false);
    const [hover, setHover] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 300) {
                setShow(true);
            } else {
                setShow(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div>
            <Link
                to="home"
                smooth={true}
                duration={500}
                offset={-500}>
                <button
                    className={`fixed z-30 bottom-10 right-6 p-4 bg-[#57C690]/50 hover:bg-[#57C690]/80 transition-all border-2 border-white/20 backdrop-blur-sm text-white rounded-full shadow-lg cursor-pointer duration-300 ${show ? "opacity-100" : "opacity-0 pointer-events-none"
                        }`}
                >
                    <FaAngleUp className="text-2xl" />
                </button>
            </Link>
        </div>
    );
};

export default ScrollButton;
