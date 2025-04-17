import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { TextTransformProvider } from './context/TextTransformContext';
import withGlobalTextTransform from './components/withGlobalTextTransform';
import Routes from './Routes';

function App() {
  return (
    <Router>
      <TextTransformProvider>
        <div className="flex flex-col min-h-screen">
          <main className="flex-grow">
            <Routes />
          </main>
        </div>
      </TextTransformProvider>
    </Router>
  );
}

// Apply global text transformation to the entire app
export default withGlobalTextTransform(App); 