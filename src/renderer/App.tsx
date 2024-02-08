import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
// import icon from '../../assets/icon.svg';
import Home from './pages/home/Home';
import './App.css';
import AddTraitsPage from './pages/addTraitsPage/AddTraitsPage';
import AddExternalGroupPage from './pages/addExternalGroupPage/AddExternalGroupPage';
import AddDescendantsPage from './pages/addDescendantsPage/AddDescendantsPage';
import Templates from './pages/templatesPage/Templates';
import Template from './pages/templatePage/Template';

export default function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/addTraits" element={<AddTraitsPage />} />
          <Route path="/addExternalGroup" element={<AddExternalGroupPage />} />
          <Route path="/addDescendants" element={<AddDescendantsPage />} />
          <Route path="/templates" element={<Templates />}></Route>
          <Route path="templates/:id" element={<Template />} />
        </Routes>
      </Router>
    </>
  );
}
