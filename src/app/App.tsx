import React from 'react';
import { AppRouter } from './providers';
import { Header } from '../widgets/Navbar';

function App() {
  return (
    <div>
      <Header/>
      <AppRouter/>
    </div>
  );
}

export default App;
