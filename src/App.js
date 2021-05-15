import { createContext, useState } from "react";
import {
  BrowserRouter as Router,
  Route, Switch
} from "react-router-dom";
import './App.css';
import AddService from "./Components/Dashboard/AddService/AddService";
import Book from "./Components/Dashboard/Book/Book";
import BookingList from "./Components/Dashboard/BookingList/BookingList";
import MakeAdmin from "./Components/Dashboard/MakeAdmin/MakeAdmin";
import MangeServices from "./Components/Dashboard/MangeServices/MangeServices";
import OrderList from "./Components/Dashboard/OrderList/OrderList";
import Review from "./Components/Dashboard/Review/Review";
import About from "./Components/Home/About/About";
import Home from "./Components/Home/Home/Home";
import Projects from "./Components/Home/Projects/Projects";
import Services from "./Components/Home/Services/Services";
import Login from "./Components/Login/Login";
import PrivateRoute from "./Components/Login/PrivateRoute";
import Footer from "./Components/Shared/Footer/Footer";
import TopBar from "./Components/Shared/TopBar/TopBar";



export const UserContext = createContext();


function App() {
  const [loggedInUser, setLoggedInUser] = useState({});

  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]} >
      <Router>
        <Switch>
          <Route exact path="/" >
            <Home></Home>
          </Route>
          <Route path="/login" >
            <TopBar></TopBar>
            <Login></Login>
            <Footer></Footer>
          </Route>
          <Route path="/about" >
            <TopBar></TopBar>
            <About></About>
            <Footer></Footer>
          </Route>
          <Route path="/services" >
            <TopBar></TopBar>
            <Services></Services>
            <Footer></Footer>
          </Route>
          <Route path="/projects" >
            <TopBar></TopBar>
            <Projects></Projects>
            <Footer></Footer>
          </Route>
          <PrivateRoute path="/dashboard/book/:id" >
            <Book></Book>
          </PrivateRoute>
          <PrivateRoute path="/dashboard/bookingList" >
            <BookingList></BookingList>
          </PrivateRoute>
          <PrivateRoute path="/dashboard/review" >
            <Review></Review>
          </PrivateRoute>
          <PrivateRoute path="/dashboard/addService" >
            <AddService></AddService>
          </PrivateRoute>
          <PrivateRoute path="/dashboard/manageServices" >
            <MangeServices></MangeServices>
          </PrivateRoute>
          <PrivateRoute path="/dashboard/makeAdmin" >
            <MakeAdmin></MakeAdmin>
          </PrivateRoute>
          <PrivateRoute path="/dashboard/orderList" >
            <OrderList></OrderList>
          </PrivateRoute>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;