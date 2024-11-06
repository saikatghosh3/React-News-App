
import './App.css';
import NewsArea from './components/NewsArea';
import Navbar from './components/Navbar';
import { useState } from 'react';

const App = () => {
  const [category, setCategory] = useState("general")
  return (
    <div>
      <Navbar setCategory={setCategory} />
      <NewsArea category={category} />
    </div>
  );
};

export default App;
