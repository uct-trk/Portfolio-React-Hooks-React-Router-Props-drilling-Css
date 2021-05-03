import React from "react";
import "./Footer.css";
import { Button } from "./Button";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer-container">
      <section className="footer-subscription">
        <p className="footer-subscription-heading"></p>
        <p className="footer-subscription-text"></p>
        <div className="input-areas">
          <form>
            <input
              type="email"
              className="footer-input"
              placeholder="E-mail Adresiniz"
            />
            <Button buttonStyle="btn--outline">Gönder</Button>
          </form>
        </div>
      </section>
      <div className="footer-links">
        <div className="footer-link-wrapper">
          <div className="footer-link-items">
            <h2>Hakkımızda</h2>
            <Link to="/">Nasıl Çalışırız</Link>
            <Link to="/">Referanslar</Link>
            <Link to="/">Kariyer</Link>
            <Link to="/">Hizmet Şartları</Link>
          </div>

          <div className="footer-link-items">
            <h2>Bize Ulaşın</h2>
            <Link to="/">Nasıl Çalışırız</Link>
            <Link to="/">Referanslar</Link>
            <Link to="/">Kariyer</Link>
            <Link to="/">Hizmet Şartları</Link>
          </div>

          <div className="footer-link-items">
            <h2>Hizmetlerimiz</h2>
            <Link to="/">Nasıl Çalışırız</Link>
            <Link to="/">Referanslar</Link>
            <Link to="/">Kariyer</Link>
            <Link to="/">Hizmet Şartları</Link>
          </div>

          <div className="footer-link-items">
            <h2>Personel</h2>
            <Link to="/">Nasıl Çalışırız</Link>
            <Link to="/">Referanslar</Link>
            <Link to="/">Kariyer</Link>
            <Link to="/">Hizmet Şartları</Link>
          </div>
        </div>
      </div>

      <section className="social-media">
        <div className="social-media-wrap">
          <div className="footer-logo">
            <Link className="social-logo">
              UGRCNTRK <i class="fas fa-film"></i>
            </Link>
          </div>
          <small className= "website-rights">UGURCAN © 2021</small>
          <div className="social-icons">
            <Link
              className="social-icon-link facebook"
              to="/"
              target="_blank"
              aria-label="Facebook"
            >
              <i className="fab fa-facebook-f" />
            </Link>
            <Link
              className="social-icon-link instagram"
              to="/"
              target="_blank"
              aria-label="Instagram"
            >
              <i className="fab fa-instagram" />
            </Link>
            <Link
              className="social-icon-link youtube"
              to="/"
              target="_blank"
              aria-label="Youtube"
            >
              <i className="fab fa-youtube" />
            </Link>
            <Link
              className="social-icon-link twitter"
              to="/"
              target="_blank"
              aria-label="Twitter"
            >
              <i className="fab fa-twitter" />
            </Link>
            <Link
              className="social-icon-link twitter"
              to="/"
              target="_blank"
              aria-label="LinkedIn"
            >
              <i className="fab fa-linkedin" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Footer;
