import {StrictMode} from 'react';
import {createRoot, hydrateRoot} from 'react-dom/client';
import App from './App.tsx';
import {normalizePath} from './pages';
import './index.css';

const container = document.getElementById('root')!;
const app = (
  <StrictMode>
    <App path={normalizePath(window.location.pathname)} />
  </StrictMode>
);

// Les pages de production sont prérendues ; en développement, #root est vide.
if (container.hasChildNodes()) {
  hydrateRoot(container, app);
} else {
  createRoot(container).render(app);
}
