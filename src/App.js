import "./App.css";
import Loan from "./components/Loan/Loan";
import CrowdSourcing from "./components/CrowdSourcing/CrowdSourcing";
import LoanForm from "./components/LoanForm/LoanForm";
import Review from "./components/Review/Review";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import OfferLoan from "./components/OfferLoan/OfferLoan";
import SignUp from "./components/SignUp/SignUp";
import { AuthProvider } from "./context/AuthContext";
import Profile from "./components/Profile/Profile";
import Response from "./components/Response/Response";
import ApplyFor from "./components/ApplyFor/ApplyFor";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import PrivateSingleRoute from "./components/PrivateRoute/PrivateSingleRoute";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Header></Header>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/loan" element={<Loan></Loan>}></Route>
          <Route path="/crowdsourcing" element={<CrowdSourcing />}></Route>
          {/* // private route  */}
          <Route path="/loanform" element={<PrivateSingleRoute><LoanForm></LoanForm></PrivateSingleRoute>}></Route>
          <Route path="/offerLoan/:id" element={<PrivateSingleRoute><OfferLoan/></PrivateSingleRoute>}></Route>
          
          <Route path="/review" element={<Review></Review>}></Route>
          <Route path="/login" element={<Login></Login>}></Route>
          <Route path="/register" element={<SignUp></SignUp>}></Route>
          <Route path="/profile" element={<Profile />}></Route>
          {/* // private route  */}
          <Route path="/profile/*" element={<PrivateRoute />}>
            <Route path="response" element={<Response></Response>}></Route>
            <Route path="applyFor" element={<ApplyFor></ApplyFor>}></Route>
          </Route>
          {/* <Toast></Toast> */}
        </Routes>
      </AuthProvider>
    </div>
  );
}

export default App;
