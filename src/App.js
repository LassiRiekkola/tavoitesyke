import logo from './logo.svg';
import './App.css';
import {useState} from 'react';

function App() {

  const [ikä, setIkä] = useState();
  const [ylä, setYlä] = useState();
  const [ala, setAla] = useState();

  function Calculate(e) {
    setIkä(ikä);
    setYlä((220 - ikä) * 0.85);
    setAla((220 - ikä) * 0.65);
  }




  return (
    <div>
      <h1>Syke maksimit</h1>
        <form>
          <div>
           <label>ikä</label>
           <input type="number" value={ikä} onChange={e => setIkä(e.target.value)} />
        </div>
      <div>
        <label>Heart rate limits </label>
        <output>{ala} - {ylä}</output>
        </div>
      <button type="button" onClick={Calculate}> laske</button>
      </form>
     </div>
  );
}




export default App;
