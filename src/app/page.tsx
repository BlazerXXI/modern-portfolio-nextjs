'use client';
import { useState } from 'react';
import Header from './components/Header/Header';
import MainScreen from './screens/mainScreen/MainScreen';
import LoadingScreen from '@/app/components/LoadingScreen/LoadingScreen';

export default function Home() {
  const [loading, setLoading] = useState(true);

  setTimeout(() => {
    setLoading(false);
  }, 500);

  return (
    <>
      {loading ? (
        <LoadingScreen />
      ) : (
        <>
          <Header />
          <MainScreen />
          {/* <Footer/> */}
        </>
      )}
    </>
  );
}
