import { useState } from "react";

function App() {
  const [password, setPassword] = useState('');
  const [result, setResult] = useState('');

  const handleClick = () => {
    alert(`checking password: ${password}`);
  };
  
  return (
    <div>
      <h1>SecureMe</h1>
      <p>Check if your password has been found in any data breaches!</p>
      <input 
        type="password" 
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Enter Password"
      />
      <button onClick={handleClick}>Check</button>
    </div>
  );
}

export default App;
