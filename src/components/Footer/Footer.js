import {IoLogoWhatsapp, IoLogoInstagram} from "react-icons/io";
import {IoLogoTiktok} from "react-icons/io5";
import "./Footer.css";

const Footer = () => {

  return (
    <div className="container ctn-footer">
      <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top div-footer">
        <div className="col-md-4 d-flex align-items-center">
          <span className="rights">©Hecho por <a className="link-gitHub" href="https://github.com/FranCamposAmoedo" target="_blank" rel="noopener noreferrer">Fran Campos.</a> 2022 Todos los derechos reservados</span>
        </div>
        <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
          <li className="ms-3"><a className="text-muted" href="https://web.whatsapp.com/" target="_blank" rel="noopener noreferrer"><IoLogoWhatsapp size={25} className="soc-net"/></a></li>
          <li className="ms-3"><a className="text-muted" href="https://www.instagram.com/jademosaico/" target="_blank" rel="noopener noreferrer"><IoLogoInstagram size={25} className="soc-net"/></a></li>
          <li className="ms-3"><a className="text-muted" href="https://www.tiktok.com/@jademosaico?lang=es" target="_blank" rel="noopener noreferrer"><IoLogoTiktok size={25} className="soc-net"/></a></li>
        </ul>
      </footer>
    </div>
  )
}

export default Footer;