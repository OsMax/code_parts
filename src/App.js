import "./App.css";
import Layout from "./components/Layout/Layout";
import Home from "./components/pages/Home/Home";

import Loaders from "./components/Parts/Loaders/Loaders";
import List from "./components/Parts/List/List";
import AuthForm from "./components/Parts/AuthForm/AuthForm";

import { Routes, Route, Navigate } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="loaders" element={<Loaders />} />
        <Route path="list" element={<List />} />
        <Route path="auth" element={<AuthForm />} />
      </Route>
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default App;
