import { Provider } from 'react-redux';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import store from './store';

import Header from './components/common/Layout/Header/Header';
import LoginPage from './components/views/LoginPage/LoginPage';
import SignUpPage from './components/views/SignUpPage/SignUpPage';
import Dashboard from './components/views/Dashboard/Dashboard';
import About from './components/views/About/About';
import Auth from './components/views/Auth/Auth';

import './App.css';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Auth />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="signup" element={<SignUpPage />} />
          <Route path="about" element={<About />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route
            path="*"
            element={
              <main style={{ padding: '1rem' }}>
                <p>There's nothing here!</p>
              </main>
            }
          />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
