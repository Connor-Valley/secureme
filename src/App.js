import { useState } from "react";
import './App.css';

function App() {
  const [password, setPassword] = useState('');
  const [result, setResult] = useState('');

  const handleClick = () => {
    // Hash the password using SHA-1
    checkPassword(password).then((res) => {
      alert(`result: ${res}`);
    })
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

async function sha1(password) {
  const encoder = new TextEncoder();
  const data = encoder.encode(password);
  const hashBuffer = await crypto.subtle.digest('SHA-1', data);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  const hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
  return hashHex;
}

// Function to check if the password hash is in the database
async function checkPassword(password) {
  const hash = await sha1(password);
  const response = await fetch(`https://api.pwnedpasswords.com/range/${hash.slice(0, 5)}`);
  const data = await response.text();
  const hashes = data.split('\n');
  for (const line of hashes) {
    const [suffix, count] = line.split(':');
    if (hash.slice(5).toUpperCase() === suffix.toUpperCase()) {
      return count;
    }
  }
  return 0;
}



export default App;
