import React from 'react';
import './globals.scss';
import { Metadata } from 'next/types';

export const metadata: Metadata = {
  title: 'Modern portfolio Ruslan Karliuk Frontend Developer',
  description: 'Modern portfolio Ruslan Karliuk Frontend Developer',
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
      </head>
      <body>{children}</body>
    </html>
  );
};

export default RootLayout;
