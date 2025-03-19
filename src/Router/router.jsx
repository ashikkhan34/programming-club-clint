import { createBrowserRouter } from "react-router-dom";
import MainLayOut from "../MainlayOut/MainLayOut";
import Home from "../Pages/Home/Home";
import Login from "../Components/Login/Login";
import SignUp from "../Components/Register/SignUp";
import Members from "../Pages/Members/Members";
import About from "../Pages/About/About";
import Events from "../Pages/Events/Events";
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

const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayOut></MainLayOut>,
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
          element:<Events></Events>
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
        }
      ]
    },
    {
      path:'dashboard',
      element:<Dashboard></Dashboard>,
      children:[
        {
          path:'adminHome',
          element:<AdminHome></AdminHome>
        },
        {
          path:'users',
          element:<AllUsers></AllUsers>
        },
        {
          path:'addMember',
          element:<AddMember></AddMember>
        },
        {
          path:'addEvents',
          element:<AddEvents></AddEvents>
        },
        {
          path:'addProject',
          element:<AddProject></AddProject>
        },
        {
          path:'addBlog',
          element:<AddBlog></AddBlog>
        },
        {
          path:'deleteMember',
          element:<DeleteMember></DeleteMember>
        },
        {
          path:'updateMember/:id',
          element:<UpdateMember></UpdateMember>,
          loader:({params})=>fetch(`http://localhost:4000/members/${params.id}`)
        },
        {
          path:'deleteEvent',
          element:<DeleteEvent></DeleteEvent>
        },
        {
          path:'updateEvent/:id',
          element:<UpdateEvent></UpdateEvent>,
          loader:({params})=>fetch(`http://localhost:4000/events/${params.id}`)
        }
      ]
    }
  ]);

  export default router;