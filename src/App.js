import React, { useState } from 'react';
import CityForm from './modules/cities/cityForm';
import CityTable from './modules/cities/cityTable';
import Footer from './Footer'
import 'bootstrap/dist/css/bootstrap.min.css';
require('./style/main.css')

const App = () => {
  const [cityData, setCityData] = useState(null);

  const handleCitySubmit = (data) => {
    setCityData(data);
  };

  return (
    <div className='main'>
      <h1>Ricerca Comune o Codice </h1>
      <CityForm onCitySubmit={handleCitySubmit} />
      {cityData && cityData.length > 0 ? <CityTable cityData={cityData} itemsPerPage={10} /> :<p></p> }
    <Footer/>
    </div>
  );
};

export default App;
