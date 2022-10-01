
import { useEffect, useState } from 'react';
import './App.css';

function App() {
const [quote, setQuote] = useState("");

useEffect(()=> { 
getQuote ();
}, [])
const getQuote = async ()=> {
  const response = await fetch('https://api.quotable.io/random');
  const data= await response.json();
  console.log (data);
  setQuote (data.content)
}
/* useEffect( async ()=>{
  {
  const response = await fetch('https://api.quotable.io/random');
  const data = await response.json();
    setQuote (data.content)
   }
  }, []) */

  return (
    <div className="App">
      <p>{quote}</p>
    </div>
  );
}

export default App;
