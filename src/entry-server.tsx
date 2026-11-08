import { StrictMode } from 'react';
import { renderToString } from 'react-dom/server';
import App from './App.tsx';

export { NOT_FOUND, PAGES, SITE_URL } from './pages';

export function render(path: string): string {
  return renderToString(
    <StrictMode>
      <App path={path} />
    </StrictMode>,
  );
}
