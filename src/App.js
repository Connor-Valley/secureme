import { useState } from "react";
import './App.css';

function App() {
  const [password, setPassword] = useState('');
  const [result, setResult] = useState('');

  const handleClick = () => {
    alert(`checking password: ${password}`);
  };
  
  return (
    <div class="grid-container">
      <h1 class="title">~/secureMe.sh</h1>
      <p class="subtitle">Check if your password has been found in any data breaches!</p>
      <input class="password"
        type="password" 
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Enter Password"
      />
      <button class="check" onClick={handleClick}>Check</button>
    </div>
  );
}

export default App;
