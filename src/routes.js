import { Routes, Route } from "react-router-dom";
import Main from "./pages/main/main";
import Login from "./pages/auth/login";
import MyPlaylist from "./pages/myPlaylist/myPlalist";
import SidebarPages from "./pages/sidebarPages/sidebarPages";
import NotFound from "./pages/notFound/notFound";
import { ProtectedRoute } from "./protectedRoute";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route element={<ProtectedRoute isToken={true} />}>
        <Route path="/" element={<Main />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/myplay" element={<MyPlaylist />} />
        <Route path="/sidepage/:id" element={<SidebarPages />} />
      </Route>
      <Route path="/login" element={<Login />} />
    </Routes>
  );
};
