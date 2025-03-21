import React from 'react';
import MainLayout from './Layout/mainLayout';
import Manu from './components/Manu/Manu';
import Hero from './components/Hero/Hero';

const App = () => {
  return (
    <MainLayout>
      <Manu />
      <Hero />
    </MainLayout>
  );
};

export default App;
