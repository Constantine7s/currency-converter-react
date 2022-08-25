import { useEffect, useState } from 'react';
import { Block } from './Block';
import axios from 'axios';

function App() {
  const [rates, setRates] = useState({});

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
        currency="JPY"
        onChangeCurr={(curr) => console.log(curr)}
      />
      <Block value={0} currency="USD" />
    </div>
  );
}

export default App;
