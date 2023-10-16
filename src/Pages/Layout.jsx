import React from 'react';
import Card from '../components/Card';
import '../App.css';

export default function Layout({doorNames, chosenCard, prizes, revealedCards, handleCardClick}) {
  return (
    <div>
      <div className="p-5">
        <h1 className="text-center">Win A Car!</h1>
        <h2 className="text-center">Monty Hall Problem</h2>
      </div>
      <section className="darkContainer bg-dark text-light px-5 p-lg-0 pt-lg-5 py-lg-5 text-center text-sm-start">
        <div className="container text-center d-lg-flex justify-content-center ">
          <div className="row text-center justify-content-center g-4 p-sm-5">
            {doorNames.map((name, index) => (
                <div className="col-md" key={index}>
                  <Card 
                    name={name} 
                    onClick={() => handleCardClick(name)}
                    chosen={chosenCard === name}
                    prize={prizes[index]}
                    revealedCards={revealedCards}
                  />
                </div>
            ))}
          </div>
        </div>
      </section>
    </div> 
  );
};
