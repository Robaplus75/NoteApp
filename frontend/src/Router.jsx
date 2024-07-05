import {createBrowserRouter, RouterProvider} from "react-router-dom"
import HomePage from "./pages/HomePage"
import SignupPage from "./pages/SignupPage"
import LogInPage from "./pages/LoginPage"
import CreateNotePage from "./pages/CreateNotePage"
import NotFoundPage from "./pages/NoteFoundPage"


const router = createBrowserRouter([
  {
    path:'/',
    element: <HomePage />,
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
    element: <CreateNotePage />
  }
])

function Router() {
  return <RouterProvider router={router} />
}

export default Router
