import React from "react";
import Logo from "./pics/Logo.png";
import Zoom from "./pics/section-background.png";
import Affiche from "./pics/affiche-film.png";
import "./App.css";

function App() {
  return (
    <>
      <div className="Cinema">
        <header className="Allo-Cine">
          <img src={Logo} className="Logo" alt="logo" />
          <div className="Title">ALLOCINE</div>
        </header>
        <body>
          <div className="Section-Top">
            <img src={Zoom} alt="Zoom Affiche du film" />
          </div>

          <div className="Presentation">
            <img src={Affiche} alt="Affiche du film" />
            <div className="Details du Film">
              <div id="Date"> Date de sortie 27 septembre 1968 (2h21mn) </div>
              <div id="Director"> De Stanley Kubrick</div>
              <div id="Cast">
                {" "}
                Avec Keir Dullea, Gary Lockwood, William Sylvester{" "}
              </div>
              <div id="Category">Genre Science fiction</div>
              <div id="Origin">Americain, Britannique</div>
            </div>

            <h1> Synopsis et details</h1>
            <p>
              {" "}
              A l'aube de l'Humanite, dans le desert africain, une tribu de
              primates subit les assaults repetes d'une bande rivale, qui lui
              dispute un point d'eau. La decouverte d'un monolythe noir inspire
              au chef des singes assieges un geste inedit et decisif.
              Brandissant un os, il passe a l'attaque et massacre ses
              adversaires. Le premier instrument est ne. En 2001, quatre
              millions d'annees plus tard, un vaisseau spatial evolue en orbite
              lunaire au rythme langoureux du "Beau Danube Bleu". A son bord, le
              Dr. Heywood Floyd enquete secretement sur la decouverte d'un
              monolythe noir qui emet d'etranges signaux vers Jupiter. Dix-huit
              mois plus tard, les astronautes David Bowman et Frank Poole font
              route vers Jupiter a bord du Discovery. Les deux hommes vaquent
              sereinement a leurs taches quotidiennes sous le controle de HAL
              9000, un ordinateur exceptionnel doue d'intelligence et de parole.
              Cependant, HAL sans doute plus humain que ses maitres, commence a
              donner des signes d'inquietude: a quoi rime cette mission et que
              risque t-on de decouvrir sur Jupiter?{" "}
            </p>
          </div>
        </body>
      </div>
    </>
  );
}

export default App;
