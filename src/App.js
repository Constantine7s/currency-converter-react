import {Block} from './Block'

function App() {
  return (
    <div className="App">
      <Block value={0} currency="JPY" onChangeCurrency={(cur) => console.log(cur)} />
      <Block value={0} currency="USD" />
    </div>
  );
}

export default App;
