import React from 'react';
const defaultCurrencies = ['JPY', 'USD', 'EUR', 'GBP'];

export const Block = ({ value, currency, onChangeVal, onChangeCurr }) => (
  <div className="block">
    <ul className="currencies">
      {defaultCurrencies.map((curr) => (
        <li onClick={() => onChangeCurr(curr)} key={curr}>
          {curr}
        </li>
      ))}
      <li>
        <svg
          width="70"
          height="55"
          viewBox="-2.5 -5 75 60"
          preserveAspectRatio="none"
        >
          <path
            d="M0,0 l35,50 l35,-50"
            fill="none"
            stroke="black"
            stroke-linecap="round"
            stroke-width="5"
          />
        </svg>
      </li>
    </ul>
    <input
      onChange={(e) => onChangeVal(e.target.value)}
      value={value}
      type="number"
      placeholder={0}
    />
  </div>
);
