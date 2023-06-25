import { Route, Routes } from 'react-router-dom';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/basket" element={<> </>} />
      <Route path="/:category/:id" element={<> </>} />
    </Routes>
  );
};

export default AppRoutes;
