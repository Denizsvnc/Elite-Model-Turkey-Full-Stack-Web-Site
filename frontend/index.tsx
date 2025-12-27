import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { LanguageProvider } from './src/contexts/LanguageContext';
import SplashScreen from './src/pages/SplashScreen';
import './index.css'
const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}

const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <SplashScreen />
    <LanguageProvider>
      <App />
    </LanguageProvider>
  </React.StrictMode>
);