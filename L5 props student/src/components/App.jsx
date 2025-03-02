import React from "react";
import Uczen from "./Uczen";
import Nauczyciel from "./Nauczyciel";
import Dyrektor from "./Dyrektor";
import Administracja from "./Administracja";

function App() {
  return (
    <div className="box">

      {/* Sekcja uczniów */}
      <div className="section uczniowie">
        <h3>Uczniowie</h3>
        <Uczen
          imie="Mateusz"
          nazwisko="Nowak"
          wiek={15}
          czStudent={true}
          oceny={[2, 5, 4, 3]}
        />
        <Uczen
          imie="Ania"
          nazwisko="Kowalska"
          wiek={17}
          czStudent={true}
          oceny={[2, 5, 5, 1]}
        />
      </div>

      {/* Sekcja nauczycieli */}
      <div className="section nauczyciele">
        <h3>Nauczyciele</h3>
        <Nauczyciel
          imie="Katarzyna"
          nazwisko="Jablko"
          wiek={32}
          przedmiot="Matematyka"
        />
        <Nauczyciel
          imie="Piotr"
          nazwisko="Karwowski"
          wiek={38}
          przedmiot="Chemia"
        />
      </div>

      {/* Sekcja administracji */}
      <div className="section administracja">
        <h3>Administracja</h3>
        <Administracja
          imie="Maciej"
          nazwisko="Musiał"
          wiek={36}
          rola="woźny"
        />
        <Administracja
          imie="Kinga"
          nazwisko="Blechman"
          wiek={45}
          rola="sprzątaczka"
        />
      </div>

      {/* Sekcja dyrektora */}
      <Dyrektor
        imie="Krzysztow"
        nazwisko="Stanowski"
        wiek={47}
        moc={102}
      />
    </div>
  );
}

export default App;

