import React from 'react';

import Hero from 'Hero/Hero';
import Preface from 'Preface/Preface';
import Body from 'Body/Body';

export default function Home() {
  return (
    <div>
      <Hero />
      <Preface />
      <Body />
    </div>
  );
}
