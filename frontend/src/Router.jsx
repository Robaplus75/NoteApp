import {createBrowserRouter, RouterProvider} from "react-router-dom"
import HomePage from "./pages/HomePage"
import SignupPage from "./pages/SignupPage"
import LogInPage from "./pages/LoginPage"
import CreateNotePage from "./pages/CreateNotePage"
import UpdateNotePage from "./pages/UpdateNotePage"
import NotFoundPage from "./pages/NoteFoundPage"
import NavigationBar from "./components/NavigationBar"
import { AuthProvider } from "./context/AuthContext"


const router = createBrowserRouter([
  {
    element: <NavigationBar />,
    errorElement: <NotFoundPage />,
    children : [
      {
        path:'/',
        element: <HomePage />,
      },
      {
        path:'/createnote',
        element: <CreateNotePage />
      },
      {
        path:'/updatenote',
        element: <UpdateNotePage />
      },
    ]
  },
  {
    path:'/signup',
    element: <SignupPage />
  },
  {
    path:'/login',
    element: <LogInPage />
  },
])

function Router() {
  return <AuthProvider><RouterProvider router={router} /></AuthProvider>
}

export default Router
