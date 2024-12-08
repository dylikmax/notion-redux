import { createBrowserRouter } from "react-router";
import RequireAuth from "./components/RequireAuth";
import Layout from "./components/Layout";
import AboutMePage from "./pages/about-me-page/AboutMePage";
import NotesPage from "./pages/notes-page/NotesPage";
import NotePage from "./pages/note-page/NotePage";
import SignInWrapper from "./pages/login-page/SignInWrapper";

export const router = createBrowserRouter([
    {
      path: "/",
      element: (
          <RequireAuth></RequireAuth>
      ),
      children: [
        {
          path: "/",
          element: <Layout />,
          children: [
            {
              path: "/",
              element: <AboutMePage />,
            },
            {
              path: "/notes",
              element: <NotesPage />,
            },
            {
              path: "/notes/:id",
              element: <NotePage />,
            },
          ],
        },
        {
          path: "/login",
          element: <SignInWrapper />,
        },
      ],
    },
  ]);