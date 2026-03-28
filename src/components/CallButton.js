import { FaPhone } from "react-icons/fa";

function CallButton() {
  return (
    <a
      href="tel:+918006651693" // 🔴 replace your number
      style={{
        position: "fixed",
        bottom: "80px",
        right: "20px",
        background: "#facc15",
        color: "black",
        padding: "15px",
        borderRadius: "50%",
        fontSize: "20px",
        zIndex: 999,
        boxShadow: "0px 0px 15px rgba(0,0,0,0.3)",
      }}
    >
      <FaPhone />
    </a>
  );
}

export default CallButton;