import React from 'react';
import bezos from'./assets/bezos.png';
import './App.css';

function App() {
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
          <h3>$202,000,000,000</h3>
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
        <div className="expense-item">
          {/* insert image here */}
          <div className="flex-row-center">
            <button>-</button>
            <p>0</p>
            <button>+</button>
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
