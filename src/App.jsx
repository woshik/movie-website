import { Suspense } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import BaseRouter from './BaseRouter';

// components
import Loader from './components/Loader';
import ScrollToTop from './components/ScrollToTop';

const App = () => (
  <Provider store={store}>
    <Suspense fallback={<Loader />}>
      <BrowserRouter>
        <ScrollToTop />
        <BaseRouter />
      </BrowserRouter>
    </Suspense>
  </Provider>
);

export default App;
