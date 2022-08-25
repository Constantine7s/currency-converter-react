import { useEffect, useState } from 'react';
import { Block } from './Block';
import axios from 'axios';

function App() {
  const [rates, setRates] = useState({});
  const [fromCurrency, setFromCurrency] = useState('JPY');
  const [toCurrency, setToCurrency] = useState('USD');
  const [fromPrice, setfromPrice] = useState(0);
  const [toPrice, setToPrice] = useState(0);

  const onChangeFromPrice = (value) => {
    const price = value / rates[fromCurrency];
    const result = price * rates[toCurrency];
    setfromPrice(value);
    setToPrice(result);
  };
  const onChangeToPrice = (value) => {
    const result = (rates[fromCurrency] / rates[toCurrency]) * value;
    setfromPrice(result);
    setToPrice(value);
  };

  useEffect(() => {
    onChangeFromPrice(fromPrice);
  }, [fromCurrency]);

  useEffect(() => {
    onChangeToPrice(toPrice);
  }, [toCurrency]);

  useEffect(() => {
    axios
      .get('https://cdn.cur.su/api/latest.json')
      .then((res) => res.data)
      .then((json) => setRates(json.rates))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="App">
      <Block
        value={fromPrice}
        currency={fromCurrency}
        onChangeCurr={(curr) => setFromCurrency(curr)}
        onChangeVal={(val) => onChangeFromPrice(val)}
      />
      <Block
        value={toPrice}
        currency={toCurrency}
        onChangeCurr={(curr) => setToCurrency(curr)}
        onChangeVal={(val) => onChangeToPrice(val)}
      />
    </div>
  );
}

export default App;
