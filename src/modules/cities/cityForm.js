import React, { useState } from 'react';
import { searchCity } from './../../api/cityApi';

const CityForm = ({ onCitySubmit }) => {
    const [cityNameOrCode, setCityNameOrCode] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
      e.preventDefault();    
      setError('');

      try {
        const data = await searchCity(cityNameOrCode);
      // Check if there is data
        if(data && Object.keys(data).length > 0){
          onCitySubmit(data);
      }else {
        // Set error and onCitySubmit
        setError('Comune o codice Comune non trovato.')
        onCitySubmit(null)
      }
      } catch (error) {
        if (error && error.status === 404) {
          onCitySubmit(null)
          // Set error city not found
          setError('Comune o codice Comune non trovato.');
        } else if (error && error.status === 500) {
          // Set error 500
          setError('Errore inatteso, riprovare più tardi.');
          onCitySubmit(null)
        } else {
          // Set other error
          setError('Errore durante la ricerca del comune.');
          onCitySubmit(null)
        }
      }
    };

return (
    <form onSubmit={handleSubmit}>
      <input
        type='text'
        placeholder='Inserisci il comune o codice '
        value={cityNameOrCode}
        onChange={(e) => setCityNameOrCode(e.target.value)}
        required
        size={30}
      />
      <button type="submit">Cerca</button>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </form>
  );
}

export default CityForm;