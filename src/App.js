import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import store from './store';

import Header from './components/common/Layout/Header/Header.redux';
import Sidebar from './components/common/Layout/Sidebar/Sidebar.redux';
import UiState from './components/common/Layout/UiState/UiState.redux';
import AllRoutes from './routes/AllRoutes/AllRoutes';

import './App.scss';

function App() {
  return (
    <Provider store={store}>
      <UiState>
        <BrowserRouter>
          <Header />
          <Sidebar />
          <AllRoutes />
        </BrowserRouter>
      </UiState>
    </Provider>
  );
}

export default App;
