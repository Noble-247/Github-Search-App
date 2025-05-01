import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import NavBar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import About from './components/pages/About';
import NotFound from './components/pages/NotFound';
import GithubState from './components/context/github/GithubState';
import AlertState from './components/context/alert/AlertState';
import Home from './components/pages/Home';
import User from './components/users/User';

function App() {
  return (
    <BrowserRouter>
      <GithubState>
        <AlertState>
          <div className='App'>
            <NavBar />
            <div className='container'>
              <Routes>
                <Route index element={<Home />} />
                <Route path='about' element={<About />} />
                <Route path='/user/:login' element={<User />} />
                <Route path='404' element={<NotFound />} />
                <Route path='*' element={<NotFound />} />
                {<Route path='*' element={<Navigate to='/404' />} />}
              </Routes>
            </div>
            <Footer />
          </div>
        </AlertState>
      </GithubState>
    </BrowserRouter>
  );
}

export default App;
