import { Suspense } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import BaseRouter from './BaseRouter';
import Loader from './components/Loader';

const App = () => (
  <Provider store={store}>
    <Suspense fallback={<Loader />}>
      <BrowserRouter>
        <BaseRouter />
      </BrowserRouter>
    </Suspense>
  </Provider>
);

export default App;
