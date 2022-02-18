import QR from "../images/image-qr-code.png";
import "./card.css";

function Card() {
  return (
    <div className="container">
      <div className="card">
        <img src={QR} alt="QR Code" />
        <h1>Improve your front-end skills by building projects</h1>
        <p>
          Scan the QR code to visit Frontend Mentor and take your coding skills
          to the next level
        </p>
      </div>
    </div>
  );
}

export default Card;
