import { Navigation } from './screens/Navigation';
import { Provider } from 'react-redux';
import { store } from './store/store';

export const App = () => (
  <Provider store={store}>
    <Navigation />
  </Provider>
);