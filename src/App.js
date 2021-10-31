import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import AuthProvider from './Context/AuthProvider';
import AddPackage from './pages/AddPackage/AddPackage';
import AllBookings from './pages/AllBookings/AllBookings';
import Booking from './pages/Booking/Booking';
import Contact from './pages/Contact/Contact';
import Home from './pages/Home/Home/Home';
import Login from './pages/Login/Login';
import MyBooking from './pages/MyBooking/MyBookings';
import NotFound from './pages/NotFound/NotFound';
import PrivateRoute from './pages/PrivateRoute/PrivateRoute';
import Footer from './pages/Shared/Footer/Footer';
import Header from './pages/Shared/Header/Header';
import SignUp from './pages/SignUp/SignUp';

function App() {
  return (
    <div>
     <AuthProvider>
     <BrowserRouter>
     <Header></Header>
     <Switch>
      <Route exact path='/'>
        <Home></Home>
      </Route>
      <Route path='/home'>
        <Home></Home>
      </Route>
      <PrivateRoute path='/contact'>
        <Contact></Contact>
      </PrivateRoute>
      <PrivateRoute path='/booking/:packageId'>
        <Booking></Booking>
      </PrivateRoute>
      <PrivateRoute path='/manageAllBookings'>
        <AllBookings></AllBookings>
      </PrivateRoute>
      <PrivateRoute path='/myBookings'>
        <MyBooking></MyBooking>
      </PrivateRoute>
      <Route path='/signup'>
        <SignUp></SignUp>
      </Route>
      <PrivateRoute path='/addPackage'>
        <AddPackage></AddPackage>
      </PrivateRoute>
      <Route path='/login'>
        <Login></Login>
      </Route>
      <Route path='*'>
        <NotFound></NotFound>
      </Route>
     </Switch>
     <Footer></Footer>
     </BrowserRouter>
     </AuthProvider>
    </div>
  );
}

export default App;
