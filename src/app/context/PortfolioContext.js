"use client";
import React, { createContext, useContext, useState } from 'react';

const PortfolioContext = createContext();

export const usePortfolio = () => {
  const context = useContext(PortfolioContext);
  if (!context) {
    throw new Error('usePortfolio must be used within a PortfolioProvider');
  }
  return context;
};

export const PortfolioProvider = ({ children }) => {
  const [mode, setMode] = useState('career'); // 'career' or 'leadership'

  const toggleMode = () => {
    setMode(prev => prev === 'career' ? 'leadership' : 'career');
  };

  return (
    <PortfolioContext.Provider value={{ mode, setMode, toggleMode }}>
      {children}
    </PortfolioContext.Provider>
  );
};