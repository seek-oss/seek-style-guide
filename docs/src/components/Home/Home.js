import React from 'react';
import { ScreenReaderOnly } from 'seek-style-guide/react';
import Hero from './Hero/Hero';
import Preface from './Preface/Preface';

export default function Home() {
  return (
    <div>
      <ScreenReaderOnly>
        <h1>SEEK Style Guide</h1>
      </ScreenReaderOnly>
      <Hero />
      <Preface />
    </div>
  );
}
