import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import {useState, useEffect} from 'react';
import React from 'react';

import About from './Pages/About';
import Nav from './components/Nav';
import Layout from './Pages/Layout';
import Modal from './components/Modal';
import Button from './components/Button';
import Footer from './components/Footer';

//function for shuffling the card prizes
function shuffle(array) {
  let currentIndex = array.length, randomIndex;
  while (currentIndex !== 0) {
    //pick remaining element to shuffle
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    //and swap it with the current element
    [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
  }
  return array;
}

export default function App() {
  const [doorNames, setDoorNames] = useState(['A', 'B', 'C']);
  const [chosenCard, setChosenCard] = useState(null);
  const [prizes, setPrizes] = useState(shuffle(['Goat', 'Goat', 'Car']));
  const [hasPicked, setHasPicked] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState(null);
  const [revealedCards, setRevealedCards] = useState([]);
  
  
  //this reveals a card with a goat behind it 'monty's choice'
  const handleCardReveal = (userChoice) => {
    console.log("user's choice: ", userChoice);
    setModalContent({
      title: "Monty's Reveal",
      body: "Your choice has 1/3 chance of winning the car. Monty will try to help and give you a chance and reveal a card. After, decide whether you want to stay with your choice or switch.",
      footer: (
        <>
          <Button color="gray" text="Open Monty's Door" onClick={() => {
          //fetch the correct prize for each door and see if it has a goat
            console.log("user's choice: ", userChoice);
            const nonChosenCards = doorNames.filter(door => door !== userChoice && door !==revealedCards.includes(door));
            console.log("Cards not chosen by user: ", nonChosenCards);
            const goatCards = doorNames.filter((door, index) => door !== userChoice && prizes[doorNames.indexOf(door)] === 'Goat'); 
            const randomGoatCard = goatCards[Math.floor( Math.random() * goatCards.length)];
            setRevealedCards(randomGoatCard);
            setShowModal(false); // close monty's modal
          //wait 3 sec before showing the choice modal
          setTimeout(() => {
            showChoiceModal(userChoice, randomGoatCard); //show the stay / switch modal
          }, 1000);
          }}/>
        </>
      )
    });
    setShowModal(true);
  };
  
  //handle the stay choice
  const handleStay = (userChoice) => {
    setRevealedCards(prevCards => [...prevCards, userChoice]); // reset revealedCard before revealing the user's choice
    setShowModal(false);
    setTimeout(showResultModal(userChoice), 500);
  }
  
  //handle the switch choice
  const handleSwitch = (userChoice, montyChoice) => {
    console.log("handleSwitch userChoice value: ", userChoice);
    const otherCards = doorNames.filter(door => door !== userChoice && door !== montyChoice);
    console.log("handleSwitch otherCards value: ", otherCards);
    const newChosenCard = otherCards[0];
    setChosenCard(newChosenCard);//switch to the other unrevealed card
    setRevealedCards(prevCards => [...prevCards, otherCards[0]]);
    setShowModal(false);
    setTimeout(showResultModal(newChosenCard), 500);
  };
  
  // handles the modal for switch/stay modal
  const showChoiceModal = (userChoice, montyChoice) => {
    setModalContent({
      title: "Make Your Choice",
      body: "Do you want to stay with your initial choice or switch to the other door?",
      footer: (
        <>
          <Button color="red" text="Stay" onClick={() => handleStay(userChoice)}/>
          <Button color="green" text="Switch" onClick={() => handleSwitch(userChoice, montyChoice)}/>
        </>
      )
    });
    setShowModal(true);
  }

  //this handles a card that the user picks 
  const handleCardClick = (name) => {
    console.log('Card clicked: ', name);
    //if hasPicked is true
    if (!hasPicked) {
      setChosenCard(name);
      console.log('Setting chosen card to: ', name);
      setHasPicked(true); 
      handleCardReveal(name);
    }
  };

  //resets the game
  const resetGame = () => {
    setChosenCard(null);
    setPrizes(shuffle(['Goat', 'Goat', 'Car']));
    setHasPicked(false);
    setShowModal(false);
    setModalContent(null);
    setRevealedCards([]);
  };

  // winner / loser alert
  const showResultModal = (finalChoice) => {
    console.log("final choice: ", finalChoice);
    const index = doorNames.indexOf(finalChoice);
    console.log("index of final choice: ", index);
    console.log("prizes: ", prizes);
    const finalPrize = prizes[doorNames.indexOf(finalChoice)];
    setModalContent({
      title: finalPrize === 'Car' ? "WINNER!" : "LOSER!",
      body: finalPrize === 'Car' ? `You have won the ${finalPrize}!`: `You have a ${finalPrize}!`,
      footer: (
        <>
          <Button color="steelblue" text="Play Again" onClick={resetGame}/>
        </>
      )
    });
    setShowModal(true);
  };
  
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<Layout 
          doorNames = {doorNames} 
          chosenCard={chosenCard} 
          prizes={prizes}
          handleCardClick = {handleCardClick}
          revealedCards = {revealedCards}
          />}
        />
        <Route path="about" element={<About />}/>
      </Routes>
      <Modal 
        show={showModal}
        onClose={ () => setShowModal(false) }
        title={modalContent?.title}
        >
        {modalContent?.body}
        <div className='modal-footer'>
          {modalContent?.footer}
        </div>
      </Modal>
      <Footer />
    </Router>
  );
};
