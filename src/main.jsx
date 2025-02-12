import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App';
import Login from './Components/Login';
import Register from './Components/Register';
import ErrorBoundary from './Components/ErrorBoundary';
import AuthProviderx from './Provider/AuthProviderx';
import { Bounce, ToastContainer } from 'react-toastify';
import Rooms from './Components/Rooms/Rooms';
import MyBookings from './Components/Rooms/MyBookings';
import TopRatedRooms from './Components/Rooms/TopRatedRooms';
import PrivateRoute from './PrivateRoute';
import RoomDetails from './Components/Rooms/RoomDetails';
import Reactmaps from './Components/Reactmaps';
import ProvideTheme from './Components/ThemeContext';
import UserProfile from './Components/UserProfile';

const router = createBrowserRouter(
  [
    {
      path: "/", // Main app route (renders App with background and Navbar)
      element: <App />,
      loader: () => fetch('https://inn-sight-server.vercel.app/sortedRooms'),
      children: [ // Nested routes
          {
              path: "top-rated", // Unique path
              element: <TopRatedRooms />,
          },
          {
              path: "map", // Unique path
              element: <Reactmaps />,
          },
          // ... other nested routes as needed
      ],
  },
    {
      path: "/login",
      element: <Login></Login>
    },
    {
      path: "/register",
      element: <Register></Register>
    },
    {
      path: "/rooms",
      element: <Rooms></Rooms>,
      loader: () => fetch('https://inn-sight-server.vercel.app/allRooms')
    },
    {
      path: "/mybookings",
      element: <PrivateRoute><MyBookings></MyBookings></PrivateRoute>,
      loader: () => fetch(`https://inn-sight-server.vercel.app/BookedRooms`)
    },
    {
      path: "/myprofile",
      element: <PrivateRoute><UserProfile/></PrivateRoute>
    },
    {
      path: "*",
      element: <ErrorBoundary></ErrorBoundary>
    },
    {
      path: "/room-details/:id",
      element:<RoomDetails></RoomDetails>,
      loader: ({params}) => fetch(`https://inn-sight-server.vercel.app/allRooms/${params.id}`)
    }

  ]
);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProviderx>
      <ProvideTheme>
      <RouterProvider router={router}></RouterProvider>
      </ProvideTheme>
    <ToastContainer
    position="top-right"
    autoClose={2000}
    hideProgressBar={false}
    newestOnTop={false}
    closeOnClick={false}
    rtl={false}
    pauseOnFocusLoss
    draggable
    pauseOnHover
    theme="light"
    transition={Bounce}
    />
    </AuthProviderx>
  </StrictMode>,
)
