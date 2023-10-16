import Button from '../components/Button'

export default function Card({name, onClick, chosen, prize, revealedCards}) {
  const imageSrcMap = {
    'Goat':'/goat.svg',
    'Car':'/car.svg'
  };
  const shouldReveal = revealedCards.includes(name);
  return (
    <div 
      className="card" 
      style={{ 
        width: '18rem',  
        border: chosen ? '3px solid red' : 'none'
      }} 
      onClick={onClick}
      >
      <img src={shouldReveal ? imageSrcMap[prize] : "/door.svg"} className="card-img-top" alt="prize" />
      <div className="card-body">
        <h5 className="card-title">Door {name} </h5>
        <p className="card-text"></p>
      </div>
    </div>
  )
};