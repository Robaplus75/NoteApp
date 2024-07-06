import {createBrowserRouter, RouterProvider} from "react-router-dom"
import HomePage from "./pages/HomePage"
import SignupPage from "./pages/SignupPage"
import LogInPage from "./pages/LoginPage"
import CreateNotePage from "./pages/CreateNotePage"
import UpdateNotePage from "./pages/UpdateNotePage"
import NotFoundPage from "./pages/NoteFoundPage"
import NavigationBar from "./components/NavigationBar"


const router = createBrowserRouter([
  {
    path:'/',
    element: <NavigationBar><HomePage /></NavigationBar>,
    errorElement: <NotFoundPage />
  },
  {
    path:'/signup',
    element: <SignupPage />
  },
  {
    path:'/login',
    element: <LogInPage />
  },
  {
    path:'/createnote',
    element: <NavigationBar><CreateNotePage /></NavigationBar>
  },
  {
    path:'/updatenote',
    element: <NavigationBar><UpdateNotePage /></NavigationBar>
  }
])

function Router() {
  return <RouterProvider router={router} />
}

export default Router
