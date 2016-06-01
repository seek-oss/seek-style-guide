import React from 'react';

import Header from 'Header/Header';
import Hero from 'Hero/Hero';
import Preface from 'Preface/Preface';
import Body from 'Body/Body';
import Footer from 'Footer/Footer';

export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <Preface />
      <Body />
      <Footer />
    </div>
  );
}
