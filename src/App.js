import React, { useState } from 'react';

import Deals from './components/deals/deals';
import { Vacation } from './components/vacation/vacation.jsx';

import './App.css';
import './responsive.css';

function App() {

  const [specificAirport, setSpecificAirport] = useState(false);

  const updateSpecificAirport = (state) => {
    setSpecificAirport(state);
  };

  return (
    <>
      <div className="desktop">
        <Vacation specificAirport={specificAirport} />
        <Deals specificAirport={specificAirport} updateSpecificAirport={updateSpecificAirport} />
      </div>
      <div className="fake-company">© 2022 Totally Fictitious Company</div>
    </>
  );
}

export default App;
