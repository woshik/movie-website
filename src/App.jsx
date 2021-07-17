import { Suspense } from 'react';
import { BrowserRouter } from 'react-router-dom';
import BaseRouter from './BaseRouter';
import Loader from './components/Loader';

const App = () => (
  <Suspense fallback={<Loader />}>
    <BrowserRouter>
      <BaseRouter />
    </BrowserRouter>
  </Suspense>
);

export default App;
