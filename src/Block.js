import React from 'react';
const defaultCurrencies = ['JPY', 'USD', 'EUR', 'GBP'];

export const Block = ({ value, currency, onChangeVal, onChangeCurr }) => (
  <div className="block">
    <ul className="currencies">
      {defaultCurrencies.map((curr) => (
        <li onClick={() => onChangeCurr(curr)} key={curr}  className={currency === curr ? 'active' : ''}>
          {curr}
        </li>
      ))}
      
    </ul>
    <input
      onChange={(e) => onChangeVal(e.target.value)}
      value={value}
      type="number"
      placeholder={0}
    />
  </div>
);
