import Animal from "./Animal";
const PolskieSsaki = [
    {
      nazwa: "Żubr",
      czyChroniony: true,
      waga: 900,
      srodowisko: "Puszcza Białowieska",
      img:"https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/Bison_bonasus_%28Linnaeus_1758%29.jpg/1280px-Bison_bonasus_%28Linnaeus_1758%29.jpg",
    },
    {
      nazwa: "Wilk",
      czyChroniony: true,
      waga: 40,
      srodowisko: "Lasy",
      img:"https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/Front_view_of_a_resting_Canis_lupus_ssp.jpg/800px-Front_view_of_a_resting_Canis_lupus_ssp.jpg",
    },
    {
      nazwa: "Lis",
      czyChroniony: false,
      waga: 7,
      srodowisko: "Pola, lasy",
      img:"https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Vulpes_vulpes_at_Cape_Newenham.jpg/1280px-Vulpes_vulpes_at_Cape_Newenham.jpg",
    },
    {
      nazwa: "Dzik",
      czyChroniony: false,
      waga: 100,
      srodowisko: "Lasy",
      img:"https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Locha%28js%29.jpg/1280px-Locha%28js%29.jpg",
    },
    {
      nazwa: "Sarna",
      czyChroniony: false,
      waga: 25,
      srodowisko: "Lasy, pola",
      img:"https://upload.wikimedia.org/wikipedia/commons/b/ba/Reh11ibb.jpg",
    },
    {
      nazwa: "Bóbr",
      czyChroniony: true,
      waga: 20,
      srodowisko: "Rzeki, jeziora",
      img:"https://upload.wikimedia.org/wikipedia/commons/6/6b/American_Beaver.jpg",
    },
    {
      nazwa: "Zając",
      czyChroniony: false,
      waga: 4,
      srodowisko: "Pola, łąki",
      img:"https://upload.wikimedia.org/wikipedia/commons/4/46/Feldhase_Schiermonnikoog.JPG",
    },
    {
      nazwa: "Ryś",
      czyChroniony: true,
      waga: 20,
      srodowisko: "Lasy",
      img:"https://upload.wikimedia.org/wikipedia/commons/6/68/Lynx_lynx_poing.jpg",
    },
  ];
  


function addAnimal({ czyChroniony, waga, srodowisko, nazwa, img }) {
return (
    <Animal
    czyChroniony={czyChroniony}
    waga={waga}
    srodowisko={srodowisko}
    nazwa={nazwa}
    img={img}
    />
);
}
   
   
function App() {
return (
    <div className="app">{PolskieSsaki.map((animal) => addAnimal(animal))}</div>
);
}
export default App;
   