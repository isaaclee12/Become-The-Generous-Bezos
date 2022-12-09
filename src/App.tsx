import React from 'react';
import bezos from'./bezos.png';
import './App.css';

function App() {
  return (
    <div className="App">
      {/* 

      HEADER:
      Header that has a title, no more no less

      SECTION 1:
      Stickied items:
      - Jeff Bezos' Face
      - A money meter that will stick to the top (TEST 1st)

      SECTION 2:
      A list of items with +/- counters for each Item
      And also in a grid that changes depending on screen size
      4 cols in desktop
      2 cols on tablet
      1 col on mobile
      This splits the 8 items up nicely
      
      SECTION 3:
      Footer which says:
      "Made by Isaac Lee"
      With LinkedIn, Twitter, and Github links
      
       */}
      <section>
        <header>Become The Generous Jeff Bezos</header>
      </section>
      <section>
        <img src={bezos} alt="An image of Jeff Bezos' face"/>
      </section>
    </div>
  );
}

export default App;
