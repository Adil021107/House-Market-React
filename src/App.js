import { ToastContainer } from 'react-toastify'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import NavBar from "./components/NavBar/NavBar"
import Explore from "./pages/Explore"
import ForgotPassword from "./pages/ForgotPassword"
import Offers from "./pages/Offers"
import SignIn from "./pages/SignIn"
import SignUp from "./pages/SignUp"
import Profile from "./pages/Profile"
import 'react-toastify/dist/ReactToastify.css';
import PrivateRoute from './components/NavBar/PrivateRoute/PrivateRoute'
import CreateListing from './pages/CreateListing'
import Category from './pages/Category'
import Listing from './pages/Listing'
import Contact from './pages/Contact'
const App = () => {
  return <>
    <Router>
      <Routes>
        <Route path="/" element={<Explore />} />
        <Route path="/offers" element={<Offers />} />
        <Route path='/category/:categoryName' element={<Category />} />
        <Route path='/profile' element={<PrivateRoute />}>
          <Route path="/profile" element={<Profile />} />
        </Route>
        <Route
          path='/category/:categoryName/:listingId'
          element={<Listing />}
        />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path='/create-listing' element={<CreateListing />} />
        <Route path='/Contact/:landlordId' element={<Contact />} />
      </Routes>
      <NavBar />
    </Router>
    <ToastContainer />

  </>
}

export default App