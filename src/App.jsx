import { useState } from 'react';
import Header from './containers/Header.jsx';
import './App.css';
import Banner from './containers/Banner.jsx';
import './containers/ban.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="wrapper" id="wrapper">
      <Header />
      <Banner />
    </div>
  );
}

export default App;
