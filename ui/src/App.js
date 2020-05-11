import React from 'react';
import HelloApi from './api';

async function getHello(name) {
    const hello = await HelloApi.get(name)
    console.log(hello)
}

function App() {
  return (
    <div className="App">
        <button onClick={() => getHello('agatha')}>hello</button>
    </div>
  );
}

export default App;
