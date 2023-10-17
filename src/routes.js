import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Main from "./pages/main/main";
import Login from "./pages/auth/login";
import MyPlaylist from "./pages/myPlaylist/myPlalist";
import SidebarPages from "./pages/sidebarPages/sidebarPages";
import NotFound from "./pages/notFound/notFound";
import { ProtectedRoute } from "./protectedRoute";

export const AppRoutes = () => {
  const [isAuth, setIsAuth] = useState(() => {
    const storedValue = localStorage.getItem('isAuth')
    return storedValue ? JSON.parse(storedValue) : false
  })

  const handleLogin = () => {
    setIsAuth(true)
    localStorage.setItem('isAuth', JSON.stringify(true))
  }

  const handleLogout = () => {
    setIsAuth(false)
    localStorage.removeItem('isAuth')
  }
  return (
    <Routes>
      <Route element={<ProtectedRoute isAuth={isAuth} handleLogout={handleLogout}/>}>
        <Route path="/" element={<Main />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/favorites" element={<MyPlaylist />} />
        <Route path="/category/:id" element={<SidebarPages />} />
      </Route>
      <Route path="/login" element={<Login handleLogin={handleLogin}/>} />
    </Routes>
  );
};
