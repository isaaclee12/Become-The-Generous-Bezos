import React from 'react';
import {useState, useEffect} from 'react';

import bezos from './assets/bezos.png';
// import bezos from'./assets/bezos_peek.png'; // TODO: Make this item mobile-only!

import { // Note: didn't end up needing these, but good practice for pics that don't need to be iterated over
  Housing,
  Food,
  Transportation,
  Healthcare,
  Entertainment,
  PersonalCare,
  Education,
  Aparrel
} from './assets'

import needsJson from './data/needs.json'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faTwitter, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

import './App.css';

function App() {

  const [wealth, setWealth] = useState(202000000000); // 202 BILLION USD
  const [housing, setHousing] = useState(0);
  const [food, setFood] = useState(0);
  const [transportation, setTransportation] = useState(0);
  const [healthcare, setHealthcare] = useState(0);
  const [entertainment, setEntertainment] = useState(0);
  const [personalCare, setPersonalCare] = useState(0);
  const [education, setEducation] = useState(0);
  const [aparrel, setAparrel] = useState(0);

  const reset = (): void => {
    setWealth(202000000000);
    setHousing(0);
    setFood(0);
    setTransportation(0);
    setHealthcare(0);
    setEntertainment(0);
    setPersonalCare(0);
    setEducation(0);
    setAparrel(0);
  }
  
  const addToAll = (amountToAdd: number): void => {

    const tempWealth = wealth - (49991 * amountToAdd);
    if (tempWealth >= 0) {

      // increment count for all needs
      setHousing(housing + amountToAdd);
      setFood(food + amountToAdd);
      setTransportation(transportation + amountToAdd);
      setHealthcare(healthcare + amountToAdd);
      setEntertainment(entertainment + amountToAdd);
      setPersonalCare(personalCare + amountToAdd);
      setEducation(education + amountToAdd);
      setAparrel(aparrel + amountToAdd);

      // set subtracted total wealth to original variable
      setWealth(tempWealth);

    } else {
    }
  }

  const fixName = (name: string, isImage: boolean): string => {

    // if name all lowercase, return string w/ first letter uppercase
    if (name === name.toLowerCase()) {
      name = name.charAt(0).toUpperCase() + name.substring(1);
      return name;
    } 

    // if dealing with an image name that's more than one word (e.g. Personal Care), return word not split w/ spaces
    if (isImage) {
      return name.replace(/([A-Z])/g, '$1').replace(/^./, function(str){ return str.toUpperCase(); })
    }
    // if name has an uppercase, return string split by words with uppercase 1st letters
    return name.replace(/([A-Z])/g, ' $1').replace(/^./, function(str){ return str.toUpperCase(); })
  }

  const handleChange = (numberAdded: number, costPer: number, item: number, setItem: Function): void => {
    const amountToTakeFromWealth = numberAdded * costPer;     // Multiply amount to change by cost per, and add to wealth
    
    const tempWealth = wealth - amountToTakeFromWealth;
    if (tempWealth >= 0) {
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
            <h3 className="">{"$" + wealth.toLocaleString("en-US")}</h3>
          </div>
        </div>

        <div className="flex-row-center bezos-container">
          <img src={bezos} alt="An image of Jeff Bezos' face" className="bezos-face"/>
        </div>

      </section>

      <section>
          <div className="expense-item text-center">        
            <button className="counter-button minus-button" onClick={(e) => reset()}>Reset</button>

            <p>People helped: {Math.min(housing, food, transportation, healthcare, entertainment, personalCare, education, aparrel).toLocaleString("en-US")}</p>
                {/* <img src={require('./assets/' + need['image'])} className="image" alt={"Picture for item " + need['item']}/> */}
                <p>Add all for one person</p>
                <div className="flex-row-center counter-container">
                  <button className="counter-button plus-button" onClick={(e) => addToAll(1)}>Add 1</button>
                </div>
                <div className="flex-row-center counter-container">
                  <button className="counter-button plus-button" onClick={(e) => addToAll(10)}>Add 10</button>
                </div>
                <div className="flex-row-center counter-container">
                  <button className="counter-button plus-button" onClick={(e) => addToAll(100)}>Add 100</button>
                </div>
                <div className="flex-row-center counter-container">
                  <button className="counter-button plus-button" onClick={(e) => addToAll(1000)}>Add 1,000</button>
                </div>
                <div className="flex-row-center counter-container">
                  <button className="counter-button plus-button" onClick={(e) => addToAll(1000000)}>Add 1,000,000</button>
                </div>
              </div>
      </section>

      {/*A list of items with +/- counters for each Item
      And also in a grid that changes depending on screen size
      4 cols in desktop
      2 cols on tablet
      1 col on mobile
      This splits the 8 items up nicely */}
      <section className="expense-list">

        {
          needsJson.needs.map(need => {
            return (
              <div className="expense-item text-center" key={need['item']}>        
                <img src={require('./assets/' + need['image'])} className="image" alt={"Picture for item " + need['item']}/>
                <p>{fixName(need['item'], false) + " Expenses for One Person"}</p>
                <p>{"Cost: $" + need['cost'].toLocaleString("en-US") + "/yr."}</p>
                <div className="flex-row-center counter-container">
                  <button className="counter-button minus-button" onClick={(e) => handleChange(-1, need['cost'], eval(need['item']), eval(need['setItem']))}>-</button>
                  <p className="number">{eval(need['item']).toLocaleString("en-US")}</p>
                  <button className="counter-button plus-button" onClick={(e) => handleChange(1, need['cost'], eval(need['item']), eval(need['setItem']))}>+</button>
                </div>
                <p>{"Total Spent: $" + (need['cost'] * eval(need['item'])).toLocaleString("en-US")}</p>
              </div>
            )
          })
        }

      </section>

      {/* SECTION 3:
      Footer which says:
      "Made by Isaac Lee"
      With LinkedIn, Twitter, and Github links */}
   
      <footer className="footer">
        <a href="https://twitter.com/isaacwonhalee" target="_blank"><FontAwesomeIcon icon={faTwitter}></FontAwesomeIcon></a>
        <a href="https://www.linkedin.com/in/isaac-lee-621873133/" target="_blank"><FontAwesomeIcon icon={faLinkedin}></FontAwesomeIcon></a>
        <a href="https://isaaclee.org/" target="_blank">Made by Isaac Lee</a>
        <a href="https://github.com/isaaclee12" target="_blank"><FontAwesomeIcon icon={faGithub}></FontAwesomeIcon></a>
        <a href="mailto:isaac.wonha.lee@outlook.com" target="_blank"><FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon></a>
      </footer>
    </div>
  );
}

export default App;
