import React from 'react';

// Import Component
import SendQuote from './components/SendQuote';

// Import material-ui Component
import { ThemeProvider } from '@material-ui/core/styles';

// Import theme
import theme from './theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <SendQuote />
    </ThemeProvider>
  );
}

export default App;
