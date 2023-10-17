import React from 'react';
import '../App.css';

export default function About() {
  return (
    <div className='about-container'>
      <h1 className=" about text-center">Monty Hall Problem</h1>
        <h1>Let's Make A Deal</h1>
        <p>Yes! Monty Hall is a real person. He was the host of the television game show called "Let's Make a Deal". The Monty Hall Problem is probability puzzle and it goes like this:</p>
      <ul>
        <li>One of the three doors contains the prize, in this case, a really nice car. The other two are goats.</li>
        <li>The player chooses one of the three doors.</li>
        <li>After the player chooses, Monty, who knows where the prize (the car) is, opens one of the other two doors that has a goat.</li>
        <li>The player is given option to stay with their original choice or switch to the other unopened door.</li>
      </ul>
      <h2>What is the best strategy?</h2>
        <h3>Let's Break It Down</h3>
        <h5>Initial Scenario</h5>
        <ul>
          <li>There are 3 doors: A, B, C</li>
          <li>A player has a 1/3 chance of choosing a door with a car behind it.</li>
          <li>A player has a 2/3 chance of choosing a door with a goat behind it.</li>
        </ul>
        <h5>Possible Scenarios</h5>
        <ol>
          <li>If the car is behind Door A.</li>
          <ul>
            <li>Player picks Door A, Monty opens Door B or Door C, which has goats. If player switch, player loses.</li>
            <li>Player picks Door B, Monty opens Door C. If player switches, player wins.</li>
            <li>Player picks Door C, Monty opens Door B. If player switches, player wins also.</li>
          </ul>
          <li>If the car is behind Door B.</li>
          <ul>
            <li>Using the same logic. If player picks Door B where the car is, switching leads to a loss. If player picks a Door A or Door C, which have goats and Monty reveals a door with a goat, switching leads to a win. </li>
          </ul>
          <li>If the car is behind Door C.</li>
          <ul>
            <li>Using the same logic. If player picks Door C (has a goat), switching leads to a loss. If player picks Door A or Door B (has a car), Monty reveals a door with a goat. Switching leads to a win.</li>
          </ul>
        </ol>
      <h5>Analysis</h5>
      <ol>
        <li>Scenario 1: 2/3 of the time, if the player picks a door with a goat behind it, switching after Monty reveals the other goat leads to a win.</li>
        <li>Scenario 2: 1/3 of the time, if the player picks a door with a car behind it and switch it leads to a loss. </li>
      </ol>
      <h5>Conclusion</h5>
      <ul>
        <li>Switching gives player 2/3 chance of winning the car, while staying with the original choice gives only 1/3 chance of winning the car.</li>
      </ul>
      
        
    </div>
  )
}