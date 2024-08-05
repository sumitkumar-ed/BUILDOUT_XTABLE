import React, { useState } from 'react';
import data from '../data';
import './XTable.css';

const XTable = () => {
  const [tableData, setTableData] = useState(data);

  const sortByDate = () => {
    const sortedData = [...tableData].sort((a, b) => {
      if (b.date === a.date) {
        return b.views - a.views;
      }
      return new Date(b.date) - new Date(a.date);
    });
    setTableData(sortedData);
  };

  const sortByViews = () => {
    const sortedData = [...tableData].sort((a, b) => {
      if (b.views === a.views) {
        return new Date(b.date) - new Date(a.date);
      }
      return b.views - a.views;
    });
    setTableData(sortedData);
  };

  return (
    <div className="table-container">
      <h1>Date and Views Table</h1>
      <div className="buttons-container">
        <button onClick={sortByDate}>Sort by Date</button>
        <button onClick={sortByViews}>Sort by Views</button>
      </div>
      <table className="data-table">
        <thead>
          <tr>
            <th>Date</th>
            <th>Views</th>
            <th>Article</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((item, index) => (
            <tr key={index}>
              <td>{item.date}</td>
              <td>{item.views}</td>
              <td>{item.article}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default XTable;
