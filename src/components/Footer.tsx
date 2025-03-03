import React, { memo } from "react";
import "../styles/Footer.css";
import TG from "../assets/TG.png";
import WA from "../assets/WA.png";
import footerImage from "../assets/footer.jpg";

const Footer: React.FC = memo(() => {
  return (
    <footer
      className="footer"
      aria-label="Контактная информация, социальные сети компании и изображение"
    >
      <div className="footer-content">
        <div className="footer-left">
          <div className="footer-top">
            <h2>Мы на связи!</h2>
          </div>
          <div className="footer-bottom">
            <div className="social-icons">
              <a
                href="https://t.me/Snos_SPB"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Telegram компании"
              >
                <div className="social-circle telegram">
                  <img src={TG} alt="Иконка Telegram" loading="lazy" />
                </div>
              </a>
              <a
                href="https://wa.me/qr/TUAHMMTAHWAQG1"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp компании"
              >
                <div className="social-circle whatsapp">
                  <img src={WA} alt="Иконка WhatsApp" loading="lazy" />
                </div>
              </a>
            </div>
            <div className="contact-info">
              <a href="tel:+79119271855" aria-label="Позвонить +79119271855">
                <p>+79119271855</p>
              </a>
              <a
                href="mailto:9271855@mail.ru"
                aria-label="Написать на 9271855@mail.ru"
              >
                <p>9271855@mail.ru</p>
              </a>
            </div>
          </div>
        </div>
        <div className="footer-image">
          <img
            src={footerImage}
            alt="Изображение футера, иллюстрирующее деятельность компании"
            loading="lazy"
          />
        </div>
      </div>
    </footer>
  );
});

export default Footer;
