import React from 'react';
import Layout from './Layout/Layout';

export default function App() {
  const siteTitle = "Flashcard-o-matic";
  const siteDescription = "Discover the Flashcard Difference."
  
  return <Layout
            siteTitle={siteTitle}
            siteDescription={siteDescription}
         />
};
