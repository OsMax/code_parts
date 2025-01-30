import "./App.css";
import Layout from "./components/Layout/Layout";
import Home from "./components/pages/Home/Home";

import Loaders from "./components/Parts/Loaders/Loaders";
import List from "./components/Parts/List/List";
import AuthForm from "./components/Parts/AuthForm/AuthForm";

import { Routes, Route, Navigate } from "react-router-dom";
import { store, persistor } from "./redux/store";
import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="loaders" element={<Loaders />} />
            <Route path="list" element={<List />} />
            <Route path="auth" element={<AuthForm />} />
          </Route>
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </PersistGate>
    </Provider>
  );
}

export default App;
