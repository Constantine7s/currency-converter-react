import { useEffect, useState } from 'react';
import { Block } from './Block';
import axios from 'axios';

function App() {
  const [rates, setRates] = useState({});
  const [fromCurrency, setFromCurrency] = useState('JPY');
  const [toCurrency, setToCurrency] = useState('USD');

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
        value={0}
        currency={fromCurrency}
        onChangeCurr={(curr) => setFromCurrency(curr)}
      />
      <Block
        value={0}
        currency={toCurrency}
        onChangeCurr={(curr) => setToCurrency(curr)}
      />
    </div>
  );
}

export default App;
