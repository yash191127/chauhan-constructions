import { FaWhatsapp } from "react-icons/fa";

function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/918006651693" // 🔴 replace with your number
      target="_blank"
      rel="noopener noreferrer"
      style={{
        position: "fixed",
        bottom: "20px",
        right: "20px",
        background: "#25D366",
        color: "white",
        padding: "15px",
        borderRadius: "50%",
        fontSize: "24px",
        zIndex: 999,
        boxShadow: "0px 0px 15px rgba(0,0,0,0.3)",
      }}
    >
      <FaWhatsapp />
    </a>
  );
}

export default WhatsAppButton;