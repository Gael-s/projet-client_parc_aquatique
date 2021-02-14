import React from "react";
import "./Footer.css";
import PropTypes from "prop-types";
import facebook from "./icone.png";
import trip from "./tripadvisor.png";

const Footer = ({ admin }) => {
  return (
    <>
      {admin && (
        <section className="container-footer">
          {/* Column1 */}
          <div className="reseaux">
            <h3>Suivez-nous sur les réseaux sociaux</h3>
            <br />
            <a
              className="social"
              href="https://fr-fr.facebook.com/pages/category/Public-Swimming-Pool/Parc-Aquatique-du-Perche-396648667456552/"
              target="_blank"
              rel="noreferrer"
            >
              <img alt="logo facebook" src={facebook} />
            </a>
            <a
              className="social"
              href="https://www.tripadvisor.fr/Attraction_Review-g4551386-d4548310-Reviews-Parc_Aquatique_du_Perche-Fontaine_Simon_Eure_et_Loir_Centre_Val_de_Loire.html"
              target="_blank"
              rel="noreferrer"
            >
              <img alt="logo facebook" src={trip} />
            </a>
          </div>

          {/* Column2 */}
          <div className="contact">
            <h3>Contacts</h3>
            <div className="list">
              <div>5 Rue de la Ferrière, 28240 Fontaine-Simon</div>
              <br />
              <div>02 37 81 88 79</div>
              <div>parc-aquatique-du-perche@orange.fr</div>
            </div>
          </div>

          {/* Column3 */}
          <div className="mymap">
            <div className="mymap2">
              <iframe
                title="myframe"
                className="iframe"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2643.069667341831!2d1.0167970950076182!3d48.51272916237181!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e3c27e95a0d4e5%3A0xef2895d8afed7b11!2sWater%20Park%20of%20Perche!5e0!3m2!1sen!2sfr!4v1608284680270!5m2!1sen!2sfr"
                frameBorder="0"
                height="140"
                width="300"
                allowFullScreen=""
                aria-hidden="false"
              />
            </div>
          </div>
        </section>
      )}
    </>
  );
};

Footer.propTypes = {
  admin: PropTypes.bool.isRequired,
};

export default Footer;
