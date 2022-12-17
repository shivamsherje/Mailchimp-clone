import React from 'react'
import Content from './Content';
import Navbar from './Navbar'
import TopSection from './TopSection';

function Main() {
  return (
    <main>
      <Navbar />
      <TopSection />
      <Content />
    </main>
  );
}

export default Main