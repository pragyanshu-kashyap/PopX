import { BrowserRouter, Routes, Route } from "react-router-dom";
import Welcome from "./components/Welcome";
import CreateAccountForm from "./components/CreateAccountForm";
import LoginForm from "./components/LoginForm";
import AccountSettings from "./components/AccountSettings";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/welcome" element={<Welcome />} />
        <Route path="/register" element={<CreateAccountForm />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/account" element={<AccountSettings />} />
        <Route path="*" element={<Welcome />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
