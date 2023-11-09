import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../layout/RootLayout";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import CreateAssignment from "../pages/CreateAssignment/CreateAssignment";
import AllAssignments from "../pages/AllAssignments/AllAssignments";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import PrivateRoute from "./PrivateRoute";
import UpdateAssignment from "../pages/UpdateAssignment/UpdateAssignment";
import AssignmentDetails from "../pages/AssignmentDetails/AssignmentDetails";
import PostedAssignments from "../pages/PostedAssignments/PostedAssignments";
import SubmittedAssignments from "../pages/SubmittedAssignments/SubmittedAssignments";
import MySubAssignment from "../pages/MySubAssignment/MySubAssignment";
import ViewSolution from "../pages/ViewSolution/ViewSolution";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/create-assignment",
        element: (
          <PrivateRoute>
            <CreateAssignment />
          </PrivateRoute>
        ),
      },
      {
        path: "/update-assignment/:id",
        element: (
          <PrivateRoute>
            <UpdateAssignment />
          </PrivateRoute>
        ),
      },
      {
        path: "/assignments",
        element: <AllAssignments />,
      },
      {
        path: "/assignmentdetails/:id",
        element: <PrivateRoute><AssignmentDetails /></PrivateRoute>,
      },
      {
        path: "/posted-assignments",
        element: <PrivateRoute><PostedAssignments /></PrivateRoute>
      },
      {
        path: "/submitted-assignments",
        element: <PrivateRoute><SubmittedAssignments /></PrivateRoute>
      },
      {
        path: "/mysubmit-assignments",
        element: <PrivateRoute><MySubAssignment /></PrivateRoute>
      },
      {
        path: "/view-solution/:id",
        element: <PrivateRoute> <ViewSolution /> </PrivateRoute>
      }
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
]);

export default router;
