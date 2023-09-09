import 'react-toastify/dist/ReactToastify.css';

import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { ThemeProvider } from 'styled-components';

import { GlobalStyles } from './styles/global-styles.ts';
import { theme } from './styles/theme.ts';
import Home from './templates/Home/index.tsx';

const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(
  <>
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<Home />} />
        </Routes>
      </BrowserRouter>
      <GlobalStyles />
    </ThemeProvider>
    <ToastContainer theme="colored" />
  </>,
);
