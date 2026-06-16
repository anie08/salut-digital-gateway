import React, { useState } from 'react';
import './OrderModal.css';

export default function OrderModal({
  setTableNumber,
  setOrderConfirmed
}) {
  const [selectedTable, setSelectedTable] = useState(null);

  const tables = Array.from({ length: 12 }, (_, i) => i + 1);

  const confirmTable = () => {
    if (!selectedTable) return;

    setTableNumber(selectedTable);
    setOrderConfirmed(true);
  };

  return (
    <div className="backdrop">
      <div className="sheet">

        <div className="handle" />

        <h2 className="title">Choose Your Table</h2>
        <p className="subtitle">Please select where you are seated</p>

        <div className="tableGrid">
          {tables.map(t => (
            <button
              key={t}
              onClick={() => setSelectedTable(t)}
              className={`tableBtn ${
                selectedTable === t ? 'activeTable' : ''
              }`}
            >
              {t}
            </button>
          ))}
        </div>

        <div className="actions">
          <button
            onClick={() => setOrderConfirmed(true)}
            className="cancelBtn"
          >
            Cancel
          </button>

          <button
            onClick={confirmTable}
            disabled={!selectedTable}
            className="submitBtn"
          >
            Enter Menu
          </button>
        </div>

      </div>
    </div>
  );
}