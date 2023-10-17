import { Routes, Route } from "react-router-dom";
import Main from "./pages/main/main";
import Login from "./pages/auth/login";
import MyPlaylist from "./pages/myPlaylist/myPlalist";
import SidebarPages from "./pages/sidebarPages/sidebarPages";
import NotFound from "./pages/notFound/notFound";
import { ProtectedRoute } from "./protectedRoute";

export const AppRoutes = () => {
  localStorage.setItem('token', true);
  let value = localStorage.getItem('token')
  console.log(value)
  return (
    <Routes>
      <Route element={<ProtectedRoute isToken={value} />}>
        <Route path="/" element={<Main />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/favorites" element={<MyPlaylist />} />
        <Route path="/category/:id" element={<SidebarPages />} />
      </Route>
      <Route path="/login" element={<Login />} />
    </Routes>
  );
};
