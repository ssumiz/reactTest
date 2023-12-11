import logo from './logo.svg';
import './App.css';
import { useState } from 'react';



function App() {

  let [useSta, useSet] = useState(0);

  return (

    <div className="App">
      <header className="App-header">
        <p>I'm 컴포넌트에요.</p>
        <img src="/logo512.png"></img>
        소스호출하기 (public은 루트디렉토리로 인식한다.)
        <h2>{useSta}</h2>
        {/* <h2>{useSet(useSta + 1)}</h2> */}

      </header>
    </div>
  );
}

export default App;
