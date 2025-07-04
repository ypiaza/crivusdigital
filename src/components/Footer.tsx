import {
  FaWhatsapp,
  FaInstagram,
  FaEnvelope,
  FaFacebook,
  FaLinkedin
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-white text-[#161616] py-10">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-6">
        <p className="text-sm">
          © 2025 Crivus Digital. Todos os direitos reservados.
        </p>

        <div className="flex items-center gap-6 text-xl">
          {/* WhatsApp */}
          <a
            href="https://wa.me/55SEUNUMEROAQUI"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-green-400 transition"
          >
            <FaWhatsapp />
          </a>

          {/* Instagram */}
          <a
            href="https://instagram.com/seuusuario"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-400 transition"
          >
            <FaInstagram />
          </a>

          {/* E-mail */}
          <a
            href="mailto:seuemail@dominio.com"
            className="hover:text-blue-400 transition"
          >
            <FaEnvelope />
          </a>

          {/* Facebook */}
          <a
            href="https://facebook.com/seupagina"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-600 transition"
          >
            <FaFacebook />
          </a>

          {/* LinkedIn */}
          <a
            href="https://linkedin.com/in/seuperfil"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-500 transition"
          >
            <FaLinkedin />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
