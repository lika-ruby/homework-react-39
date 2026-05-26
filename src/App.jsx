import "./App.css";
import { GlobalStyle } from "./GlobalStyles.js";
import { useEffect, lazy } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchContacts } from "./redux/contacts/operations.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "./components/Layout/Layout.jsx";
import { refreshUser } from "./redux/auth/operations.js";
import { selectToken } from "./redux/auth/selectors.js";

const HomePage = lazy(() => import("./pages/HomePage.js"));
const RegisterPage = lazy(() => import("./pages/RegisterPage.js"));
const LoginPage = lazy(() => import("./pages/LoginPage.js"));
const ProfilePage = lazy(() => import("./pages/ProfilePage.js"));
const ContactsPage = lazy(() => import("./pages/ContactsPage.js"));

export const App = () => {
  const dispatch = useDispatch();

  const token = useSelector(selectToken);

  useEffect(() => {
    if (!token) return;

    dispatch(refreshUser());
  }, [dispatch, token]);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <BrowserRouter basename="/homework-react-39">
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/contacts" element={<ContactsPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
