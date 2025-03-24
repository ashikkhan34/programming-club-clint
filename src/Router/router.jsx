import { createBrowserRouter } from "react-router-dom";
import MainLayOut from "../MainlayOut/MainLayOut";
import Home from "../Pages/Home/Home";
import Login from "../Components/Login/Login";
import SignUp from "../Components/Register/SignUp";
import Members from "../Pages/Members/Members";
import About from "../Pages/About/About";
import Events from "../Pages/Events/Events";
import RegisterEvent from '../Pages/Events/RegisterEvent'
import Blog from "../Pages/Blog/Blog";
import Contact from "../Components/Contact/Contact";
import Projects from "../Pages/Projects/Projects";
import Dashboard from "../Dashborad/Dashboard";
import AdminHome from "../AdminComponents/AdminHome/AdminHome";
import AllUsers from "../AdminComponents/AllUsers/AllUsers";
import AddMember from "../AdminComponents/AddMember/AddMember";
import AddEvents from "../AdminComponents/AddEvents/AddEvents";
import AddProject from "../AdminComponents/AddProject/AddProject";
import AddBlog from "../AdminComponents/AddBlog/AddBlog";
import DeleteMember from "../AdminComponents/AddMember/DeleteMember";
import UpdateMember from "../AdminComponents/AddMember/UpdateMember";
import DeleteEvent from "../AdminComponents/AddEvents/DeleteEvent";
import UpdateEvent from "../AdminComponents/AddEvents/UpdateEvent";
import ReviewMore from "../Components/Review/ReviewMore";
import Error from "../Components/Error/Error";
import PrivateRoute from "../Components/PrivateRoute/PrivateRoute";
import AdminRoute from "../Components/AdminRoute/AdminRoute";
import EventMembers from "../Dashborad/EventMembers/EventMembers";

const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayOut></MainLayOut>,
      errorElement:<Error></Error>,
      children:[
        {
            path:'/',
            element: <Home></Home>
        },
        {
          path:'about',
          element:<About></About>
        },
        {
          path:'events',
          element:<PrivateRoute><Events></Events></PrivateRoute>
        },
        {
          path:'blog',
          element:<Blog></Blog>
        },
        {
          path:'projects',
          element:<Projects></Projects>
        },
        {
          path: 'login',
          element:<Login></Login>
        },
        {
          path:'signUp',
          element:<SignUp></SignUp>
        },
        {
          path:'members',
          element:<Members></Members>
        },
        {
          path:'contact',
          element:<Contact></Contact>
        },
        {
          path:'/reviewMore',
          element:<ReviewMore></ReviewMore>
        },
        {
          path:'registerEvent',
          element:<RegisterEvent></RegisterEvent>
        }
      ]
    },
    {
      path:'dashboard',
      element:<PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
      children:[
        {
          path:'adminHome',
          element:<AdminRoute><AdminHome></AdminHome></AdminRoute>
        },
        {
          path:'users',
          element:<AdminRoute><AllUsers></AllUsers></AdminRoute>
        },
        {
          path:'addMember',
          element:<AdminRoute><AddMember></AddMember></AdminRoute>
        },
        {
          path:'addEvents',
          element:<AdminRoute><AddEvents></AddEvents></AdminRoute>
        },
        {
          path:'addProject',
          element:<AdminRoute><AddProject></AddProject></AdminRoute>
        },
        {
          path:'addBlog',
          element:<AdminRoute><AddBlog></AddBlog></AdminRoute>
        },
        {
          path:'deleteMember',
          element:<AdminRoute><DeleteMember></DeleteMember></AdminRoute>
        },
        {
          path:'updateMember/:id',
          element:<AdminRoute><UpdateMember></UpdateMember></AdminRoute>,
          loader:({params})=>fetch(`https://programming-club-ppi-server.vercel.app/members/${params.id}`)
        },
        {
          path:'deleteEvent',
          element:<AdminRoute><DeleteEvent></DeleteEvent></AdminRoute>
        },
        {
          path:'updateEvent/:id',
          element:<AdminRoute><UpdateEvent></UpdateEvent></AdminRoute>,
          loader:({params})=>fetch(`https://programming-club-ppi-server.vercel.app/events/${params.id}`)
        },
        {
          path:'eventMembers',
          element:<EventMembers></EventMembers>
        }
      ]
    }
  ]);

  export default router;