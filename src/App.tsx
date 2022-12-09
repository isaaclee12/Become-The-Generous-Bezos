import React from 'react';
import {useState, useEffect} from 'react';

import bezos from './assets/bezos.png';
// import bezos from'./assets/bezos_peek.png'; // TODO: Make this item mobile-only!

import needsJson from './data/needs.json'

import './App.css';

function App() {

  /*
  
  ISAAC NOTE TO SELF: READ TODO'S IN README.old.md FIRST!!!!!
  
   */
  const [wealth, setWealth] = useState(202000000000); // 202 BILLION USD
  const [rent, setRent] = useState(0);
  const [food, setFood] = useState(0);
  const [transportation, setTransportation] = useState(0);
  const [healthcare, setHealthcare] = useState(0);
  const [entertainment, setEntertainment] = useState(0);
  const [personalCare, setPersonalCare] = useState(0);
  const [education, setEducation] = useState(0);
  const [aparrel, setAparrel] = useState(0);
  
  // TODO: delete this debug
  useEffect(() => {
    console.log(needsJson.needs);
  }, [])

  const handleChange = (numberAdded: number, costPer: number, item: number, setItem: Function): void => {
    const amountToTakeFromWealth = numberAdded * costPer;     // Multiply amount to change by cost per, and add to wealth
    
    console.log("Adding: ", amountToTakeFromWealth)

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

      {/* HEADER: Header that has a title, no more no less
      SECTION 1:
      Stickied items:
      - Jeff Bezos' Face
      - A money meter that will stick to the top (TEST 1st) */}
      <section className="flex-row-center">
        <div className="sticky stretch">
          <header className="text-center title">
            <strong>Become The Generous Jeff Bezos</strong>  
          </header>
          
          <div className="wealth-counter text-center">
            <h3 className="">{wealth}</h3>
          </div>
        </div>

        <div className="flex-row-center bezos-container">
          <img src={bezos} alt="An image of Jeff Bezos' face" className="bezos-face"/>
        </div>

      </section>

      {/* SECTION 2:
      A list of items with +/- counters for each Item
      And also in a grid that changes depending on screen size
      4 cols in desktop
      2 cols on tablet
      1 col on mobile
      This splits the 8 items up nicely */}
      <section className="expense-list">

        {
          needsJson.needs.map(need => {
            return (
              <div className="expense-item text-center">
                <p>{need['item']}</p>
                <div className="flex-row-center">
                  <button onClick={(e) => handleChange(-1, need['cost'], eval(need['item']), eval(need['setItem']))}>-</button>
                  <p>{eval(need['item'])}</p>
                  <button onClick={(e) => handleChange(1, need['cost'], eval(need['item']), eval(need['setItem']))}>+</button>
                </div>
              </div>
            )
          })
        }

        {/* <div className="expense-item text-center">
          <p>Rent</p>
          <div className="flex-row-center">
            <button onClick={(e) => handleChange(-1, 7316, rent, setRent)}>-</button>
            <p>{rent}</p>
            <button onClick={(e) => handleChange(1, 7316, rent, setRent)}>+</button>
          </div>
        </div> */}

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
        <a href="mailto:isaac.wonha.lee@outlook.com" target="_blank" className="icon solid alt fa-envelope"><span className="label">Email</span></a>
      </footer>
    </div>
  );
}

export default App;
