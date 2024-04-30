import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Header from '../appHeader/appHeader';

const Main = lazy(() => import('../pages/mainPage'))
const Comics = lazy(() => import('../pages/comicsPage'))
const EachComics = lazy(() => import('../eachComics/eachComics'))

function App() {
  return (
    <Router>
      <div className="App">
        <Header/>
        <Suspense>
          <Routes>

          <Route path="*" element={<Main />} />

          <Route path="/comics" element={<Comics />} />

          <Route path="/comics/:comicsId" element={<EachComics />} />

        </Routes>
      </Suspense>
      </div>
    </Router>
  );
}

export default App;
