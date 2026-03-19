import { Navigate, Route, Routes } from "react-router-dom";
import Login from "./pages/Login.jsx";
import Signup from "./pages/Signup.jsx";
import Home from "./pages/Home.jsx";

const PrivateRoute = ({ children }) => {
  const token = localStorage.getItem("token");

  return token ? children : <Navigate to="/login" replace />;
};

const App = () => {
  const token = localStorage.getItem("token");

  return (
    <div className="app">
      <Routes>

        <Route path="/" element={<Navigate to="/login" />} />

        <Route
          path="/login"
          element={
            token ? <Navigate to="/home" replace /> : <Login />
          }
        />

        <Route
          path="/signup"
          element={
            token ? <Navigate to="/home" replace /> : <Signup />
          }
        />

        <Route
          path="/home"
          element={
            <PrivateRoute>
              <Home />
            </PrivateRoute>
          }
        />

        <Route path="*" element={<Navigate to="/login" />} />

      </Routes>
    </div>
  );
};

export default App;