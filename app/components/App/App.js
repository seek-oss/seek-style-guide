import styles from  './App.less';

import React from 'react';
import { SeekApp } from 'seek-style-guide/react';

import Header from 'Header/Header';
import Hero from 'Hero/Hero';
import Preface from 'Preface/Preface';
import Body from 'Body/Body';

import Buttons from 'Buttons/Buttons';

export default function App() {
  return (
    <SeekApp fullScreen={true}>
      <div className={styles.root}>
        <Buttons />
        <Header />
        <Hero />
        <Preface />
        <Body />
      </div>
    </SeekApp>
  );
}
