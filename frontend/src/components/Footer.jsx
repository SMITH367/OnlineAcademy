import React from "react";
import "./styles/footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <p>Creado de 💙 para la comunidad, libre acceso.</p>
      <p>
        Autor: Brayan Puentes sigueme en{" "}
        <a
          style={{ fontWeight: "bold" }}
          href="https://google.com"
          target="_blank"
          rel="noreferrer"
        >
          Linkedin
        </a>
      </p>
    </footer>
  );
};

export { Footer };
