//frontend/src/App.tsx
import { Routes, Route } from 'react-router-dom';
import Home from './Pages/home';
import CreateUser from './Pages/CreateUser';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/createUser" element={<CreateUser />} />
      </Routes>
    </>
  );
}

export default App;
