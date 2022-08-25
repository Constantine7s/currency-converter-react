import React from 'react';
const defaultCurrencies = ['JPY', 'USD', 'EUR', 'GBP'];

export const Block = ({ value, currency, onChangeVal, onChangeCurr }) => (
  <div className="block">
    <ul className="currencies">
      {defaultCurrencies.map((curr) => (
        <li onClick={() => onChangeCurr(curr)} key={curr}>{curr}</li>
      ))}
    </ul>
  </div>
);
