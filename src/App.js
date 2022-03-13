import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {

  let [address, setAddress] = useState("");

  useEffect(()=>{
    async function getService(){
      let res = await axios.get("http://localhost:8080/getService");
      setAddress(res.data);
    }
    getService();
  },[])
  return (
    <div className="App">
      <header>
        {/* <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
      </header>
      <body>
          <div>
          <ul>
            {
              address && address.map(data=>{
                return <li>{data}</li>
              })
                  
          }
          </ul>
          </div>
         </body>
    </div>
  );
}

export default App;
