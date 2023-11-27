
import { BrowserRouter , Routes, Route} from 'react-router-dom';
import MainPage from './pages/MainPage';

function App() {
  return (
    <BrowserRouter>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<MainPage />} />
        <Route path="/search" element={<MainPage/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;