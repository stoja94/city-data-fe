import React, { useState } from 'react';
import ReactPaginate from 'react-paginate';

const  getValueOrDefault = (value) => {
    return value === null || value === ' ' ? '' : value;
  };

  const CityTable  = ({ cityData, itemsPerPage }) => {
    const [currentPage, setCurrentPage] = useState(0);
  
    const handlePageChange = ({ selected }) => {
      setCurrentPage(selected);
    };
    const offset = currentPage * itemsPerPage;
    console.log(cityData)
  const currentPageData = cityData.slice(offset, offset + itemsPerPage);
  console.log(currentPageData)

  return (
    <div>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Regione</th>
            <th>Denominazione</th>
            <th>Sigla Provincia</th>
            <th>Cod. Comune</th>
            <th>Sezione</th>
          </tr>
        </thead>
        <tbody>
          {currentPageData.map((city, index) => (
            <tr key={index}>
              <td>{getValueOrDefault(city.DESC_REGIONE)}</td>
              <td>{getValueOrDefault(city.DENOMINAZIONE)}</td>
              <td>{getValueOrDefault(city.SIGLA_PROVINCIA)}</td>
              <td>{getValueOrDefault(city.COD_COMUNE)}</td>
              <td>{getValueOrDefault(city.SEZIONE)}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <ReactPaginate
        previousLabel={"Indietro"}
        nextLabel={"Avanti"}
        previousClassName={"my-custom-previous-class"}
        nextClassName={"my-custom-next-class"}
        pageCount={Math.ceil(cityData.length / itemsPerPage)}
        pageRangeDisplayed={10}
        marginPagesDisplayed={10}
        onPageChange={handlePageChange}
        containerClassName={'pagination'}
        activeClassName={'active'}
      />
    </div>
  );
};
  
  export default CityTable;