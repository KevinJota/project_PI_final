import { Link } from "react-router-dom";
import './cardgame.css';

const CardGame = () => {
  return (
    <Link>
    <div className="card-container">
      <div className="flip">
        <div className="front" style={{ backgroundImage: `url(https://i.pinimg.com/564x/ad/c2/99/adc299f14963e6308d7d38e2f3c8a006.jpg)` }}>
        </div>
        
        <div className="back">
          <h2>Free fire</h2>
          <p>Venha jogar o jogo da Gaiada!</p>
        </div>
      </div>
    </div>
    </Link>
  );
};

export default CardGame;
