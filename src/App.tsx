import React from 'react';
import {useState, useEffect} from 'react';
import bezos from'./assets/bezos.png';
import './App.css';

function App() {
  const [wealth, setWealth] = useState(202000000000); // 202 BILLION USD
  const [rent, setRent] = useState(0);

  const handleChange = (numberAdded: number, costPer: number, item: number, setItem: Function): void => {
    // Multiply amount to change by cost per, and add to wealth
    const amountToTakeFromWealth = numberAdded * costPer;

    console.log(amountToTakeFromWealth);
    
    // if we reduce an expense, we add to the wealth and reduce the expenses' count
    if (numberAdded === -1 && item > 0) {
      setWealth(wealth - amountToTakeFromWealth);
      setItem(item - 1);
      return;

    // if we increase an expense, we subtract from the wealth and increase the expenses' count
    } else if (numberAdded === 1) {
      setWealth(wealth - amountToTakeFromWealth);
      setItem(item + 1);
    }

    return;
  }

  return (
    <div className="App">

      {/* HEADER: Header that has a title, no more no less */}
      <section>
        <header className="text-center">Become The Generous Jeff Bezos</header>
      </section>

      {/* SECTION 1:
      Stickied items:
      - Jeff Bezos' Face
      - A money meter that will stick to the top (TEST 1st) */}
      <section className="sticky">
        <div className="image-container">
          <img src={bezos} alt="An image of Jeff Bezos' face" className="image"/>
        </div>
        <div className="wealth-counter text-center">
          <h3>{wealth}</h3>
        </div>
      </section>

      {/* SECTION 2:
      A list of items with +/- counters for each Item
      And also in a grid that changes depending on screen size
      4 cols in desktop
      2 cols on tablet
      1 col on mobile
      This splits the 8 items up nicely */}
      <section>
        <div className="expense-item text-center">
          {/* insert image here */}
          <p>Rent</p>
          <div className="flex-row-center">
            {/* if rent is 0, don't do anything, else decrease */}
            <button onClick={(e) => handleChange(-1, 7316, rent, setRent)}>-</button>
            <p>{rent}</p>
            <button onClick={(e) => handleChange(1, 7316, rent, setRent)}>+</button>
          </div>
        </div>
      </section>

      {/* SECTION 3:
      Footer which says:
      "Made by Isaac Lee"
      With LinkedIn, Twitter, and Github links */}
      <footer className="flex-row-center footer">
        <a href="https://isaaclee.org/">Isaac Lee</a>
        <a href="https://twitter.com/isaacwonhalee" target="_blank" className="icon brands alt fa-twitter"><span className="label">Twitter</span></a>
        <a href="https://www.linkedin.com/in/isaac-lee-621873133/" target="_blank" className="icon brands alt fa-linkedin"><span className="label">LinkedIn</span></a>
        <a href="https://github.com/isaaclee12" target="_blank" className="icon brands alt fa-github"><span className="label">GitHub</span></a>
        <a href="mailto:isaac.wonha.lee@outlook.com" target="_blank" className="icon solid alt fa-envelope"><span className="label">Email</span></a>      </footer>
    </div>
  );
}

export default App;
