import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Carousel from './components/Middle/Carousel';
import CardSection from './components/Middle/CardSection';
import Footer from './components/Footer';
import Body from './components/Middle/Body';
import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom';
import About from './components/About';
import Profile from './components/Profile';
import Error from './components/Error';
import Contact from './components/Contact';
import RestrauntMenu from './components/Middle/RestrauntMenu';
import ProfileClass from './components/ProfileClass';

 

function App() {
  return (
    <div >
     <Header />
     {/* <Body/> */}
     {<Outlet />}
     <Footer/>
    </div>
  );
}

const apprRouter = createBrowserRouter([
  {
    path:'/',
    element: <App />,
    errorElement:<Error/>,
    children:[
      {
        path:'/',
        element:<Body/>
      },
      {
        path:'/about',
        element:<About/>,
        children:[{
          path:'profile',
          element:< ProfileClass/>
        }
        ]
      },
      // {
      //   path:'/favourite',
      //   element:<About/>
      // },
      {
        path:'/Profile',
        element:<Profile/>
      },
      {
        path:'/contact',
        element:<Contact/>
      },
      {
        //dynamic routing
        path:'/restraunt/:id',
        element:<RestrauntMenu />
        
      }
    ]
  },
]); 

function Main() {
  return (
    <RouterProvider router={apprRouter}> {/* Wrap your app with RouterProvider */}
      <App />
    </RouterProvider>
  );
}

export default Main;
