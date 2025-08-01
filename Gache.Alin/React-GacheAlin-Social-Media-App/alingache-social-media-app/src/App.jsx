import "./App.css";
import Layout from "./components/Layout";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/home/HomePage";
import AuthPage from "./pages/auth/AuthPage";
import NotFound from "./pages//home/NotFound";
import ProfilePage from "./pages/auth/profile/ProfilePage";
import ProfileHeader from "./pages/auth/profile/profileComponents/ProfileHeader";
import AboutSection from "./pages/auth/profile/profileComponents/AboutSection";

function App() {
  return (
    <>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/auth" element={<AuthPage />} />
          <Route path="/profile/:id" element={<ProfilePage />}></Route>
          <Route
            path="/my-profile"
            element={[
              <ProfileHeader key={Math.random()} />,
              <AboutSection key={Math.random()} />,
            ]}
          ></Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </>
  );
}

export default App;
