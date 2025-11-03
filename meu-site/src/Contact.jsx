import React from "react";

export default function Contact() {
  return (
    <div style={{
      height: "100vh",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      background: "linear-gradient(135deg, #0f1724, #1a2235)",
      color: "#fff",
      fontFamily: "Poppins, Arial, sans-serif",
      textAlign: "center",
      padding: "0 1rem",
    }}>
      <h1 style={{
        color: "#FF7A59",
        fontSize: "2.5rem",
        marginBottom: "1rem",
      }}>
        Fale com a <span style={{ color: "#fff" }}>Clipfy</span> 🎬
      </h1>

      <p style={{ fontSize: "1.2rem", margin: "0.5rem 0" }}>
        📱 <strong>WhatsApp:</strong>{" "}
        <a
          href="https://wa.me/555599316752"
          style={{ color: "#FF7A59", textDecoration: "none" }}
          target="_blank"
          rel="noreferrer"
        >
          +55 55 99931-6752
        </a>
      </p>

      <p style={{ fontSize: "1.2rem", margin: "0.5rem 0" }}>
        ✉️ <strong>Email:</strong>{" "}
        <a
          href="mailto:clipfyoficial@gmail.com"
          style={{ color: "#FF7A59", textDecoration: "none" }}
        >
          clipfyoficial@gmail.com
        </a>
      </p>

      <p style={{ fontSize: "1.2rem", margin: "0.5rem 0" }}>
        📸 <strong>Instagram:</strong>{" "}
        <a
          href="https://instagram.com/clipfy.oficial"
          style={{ color: "#FF7A59", textDecoration: "none" }}
          target="_blank"
          rel="noreferrer"
        >
          @clipfy.oficial
        </a>
      </p>

      <footer style={{
        marginTop: "2rem",
        fontSize: "0.9rem",
        color: "#aaa",
      }}>
        © {new Date().getFullYear()} Clipfy — Dando movimento às suas ideias 🚀
      </footer>
    </div>
  );
}


