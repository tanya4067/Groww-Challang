import React from 'react';
import '../stocktable.css';
function StockTable({ stocksData }) {
  const slicedRecords = stocksData.records.slice(0, 20);
  return (
    <div>
      <h2>Stocks Data</h2>
      <table>
        <thead>
          <tr>
            <th>ISIN</th>
            <th>Company Name</th>
           
            <th>Close Price</th>
            <th>Market Cap</th>
          </tr>
        </thead>
        <tbody>
          {slicedRecords.map((stock, index) => (
            <tr key={index}>
              <td>{stock.isin}</td>
              <td>{stock.companyName}</td>
    
              <td>{stock.closePrice}</td>
              <td>{stock.marketCap}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default StockTable;
