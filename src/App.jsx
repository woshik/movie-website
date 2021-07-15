import { Suspense } from 'react';
import { BrowserRouter } from 'react-router-dom';
import BaseRouter from './BaseRouter';

const App = () => (
  <Suspense fallback="loading">
    <BrowserRouter>
      <BaseRouter />
    </BrowserRouter>
  </Suspense>
);

export default App;
